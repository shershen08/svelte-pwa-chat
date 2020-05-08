<script>
import {messages} from './service.js'

const sendNotification = () => {
    //https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification
  let promise = Notification.requestPermission();
  // wait for permission
  promise.then(data => {

      const eventName = 'new message'

        var options = {
      //body: 'Some HTML here',
      icon: 'https://community.hackages.io/static/media/logo_h_cube.6d1c5012.svg'
  }
      var myNotification = new Notification(eventName, options);

    readMsg(eventName)
    readMsg(options.body)

  })
}


// init speech synth
let synth = window.speechSynthesis;
let voice = synth.getVoices()[0]

const readMsg = (text) => {
     var utterThis = new SpeechSynthesisUtterance(text);
     utterThis.voice = voice

//    utterThis.pitch = pitch.value;
//   utterThis.rate = rate.value;

  synth.speak(utterThis);
}

messages.subscribe(value => {
    const msg = value[value.length-1];
    if(msg && msg.side === 'THEM'){
        readMsg(msg.text)
        sendNotification();
    }
}); 


</script>

<code>
    {JSON.stringify($messages)}
</code>
<!-- <button on:click={sendMsg}>send</button> -->