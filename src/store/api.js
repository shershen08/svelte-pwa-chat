import { writable } from 'svelte/store';

export const messages = writable([])

messages.subscribe(value => {
	//console.log(value);
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
  writeToScreen("CONNECTED");
  doSend("WebSocket rocks");
}

function onClose(evt)
{
  writeToScreen("DISCONNECTED");
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
  writeToScreen('ERROR: ' + evt.data);
}

export function doSend(message)
{

  websocket.send(message);
  messages.update(old => {
    old.push({
        side: 'ME', 
        text: message,
        username: ''
    })
    return old
  });
}

export function writeToScreen(message)
{
  // console.log(message)
}

export default function init(url)
{
  initWebSocket(url);
}