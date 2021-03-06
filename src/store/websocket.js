import { writable } from 'svelte/store';
import {network} from './network.js'
import {settings} from '../settings.js'
import {user} from './user.js'

const RECONNECT_TIMEOUT = 1000;
let localUrl = '';
let reconnectRetry;
let websocket;

const getJSON = () => {
  let data = []
  try {
    data = JSON.parse(localStorage.getItem(settings.lsKey));
  } catch {
    //
  }
  return data
}

export const messages = writable(getJSON())

messages.subscribe(value => {
  if(!value) return;
  localStorage.setItem(settings.lsKey, JSON.stringify(value))
}); 

function initWebSocket(url)
{
  websocket = new WebSocket(url);
  websocket.onopen = function(evt) { onOpen(evt) };
  websocket.onclose = function(evt) { onClose(evt) };
  websocket.onmessage = function(evt) { onMessage(evt) };
  websocket.onerror = function(evt) { onError(evt) };
}

function onOpen(evt)
{
  network.update(state => ({
    ...state,
    wsConnected: true
  }))

  if(reconnectRetry) {
    clearTimeout(reconnectRetry)
  }
  
  DEBUGwriteToScreen("CONNECTED");
}

function onClose(evt)
{
  network.update(state => ({
    ...state,
    wsConnected: false
  }))

  reconnectRetry = setTimeout(function() {
    initWebSocket(localUrl);
  }, RECONNECT_TIMEOUT);
  
  DEBUGwriteToScreen("DISCONNECTED");
}

export function onMessage({data})
{
  messages.update(old => {
    if(!old) {
      old = []
    }
    old.push({
        side: 'THEM', 
        text: data,
        //time: new Date(),
        username: ''
    })
    return old
  });
}

function onError(evt)
{
  DEBUGwriteToScreen('ERROR: ' + evt.data);
}

export function doSend(message)
{

  websocket.send(message);
  messages.update(old => {
    if(!old) {
      old = []
    }
    old.push({
        side: 'ME', 
        text: message,
        username: user.userName,
        time: new Date().getTime(),
    })
    return old
  });
}

export function DEBUGwriteToScreen(message)
{
  console.log(message)
}

export default function init(url)
{
  localUrl = url;
  initWebSocket(url);
}