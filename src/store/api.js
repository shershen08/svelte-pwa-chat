import { writable } from 'svelte/store';
import {user} from './user.js'

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
  user.update(state => {
    wsConnected: true
  })
  DEBUGwriteToScreen("CONNECTED");
}

function onClose(evt)
{
  user.update(state => {
    wsConnected: false
  })
  
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

  //websocket.close();
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