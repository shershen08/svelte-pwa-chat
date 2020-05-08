<script>
    import {doSend} from './service.js'
    let text = ''
    const sendMsg = () => {
        console.log(text)
        doSend(text)
        text = ''
    }

// if(window.SpeechRecognition) {

//        var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
// var recognition = new SpeechRecognition();
// var speechRecognitionList = new SpeechGrammarList();
// speechRecognitionList.addFromString(grammar, 1);
// recognition.grammars = speechRecognitionList;
// recognition.continuous = false;
// recognition.lang = 'en-US';
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;

// recognition.onresult = function(event) {

//   var color = event.results[0][0].transcript;
//     console.log(event.results, color)
// }


// }

</script>

<textarea bind:value={text}></textarea>
<button on:click={sendMsg}>send</button>
<!-- <button on:click={activateRecognition}>activateRecognition</button> -->