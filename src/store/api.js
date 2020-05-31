import { writable } from 'svelte/store';
import {network} from './network.js'

export const messages = writable(JSON.parse(localStorage.getItem('chatHistory')))

messages.subscribe(value => {
  localStorage.setItem('chatHistory', JSON.stringify(value))
}); 

let websocket

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
  
  DEBUGwriteToScreen("CONNECTED");
}

function onClose(evt)
{
  network.update(state => ({
    ...state,
    wsConnected: false
  }))
  
  DEBUGwriteToScreen("DISCONNECTED");
}

export function onMessage({data})
{
  messages.update(old => {
    old.push({
        side: 'THEM', 
        text: data,
        time: new Date(),
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
    old.push({
        side: 'ME', 
        text: message,
        username: '',
        time: new Date(),
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
  initWebSocket(url);
}