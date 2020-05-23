<script>
    import {doSend} from '../../store/api.js'
    let text = ''
    
    $: textIsValid = text.length > 1

    const sendMsg = () => {
        doSend(text)
        text = ''
    }
</script>

<form class="msger-inputarea">
    <input bind:value={text} class="msger-input" placeholder="Enter your message..."/>
    <button on:click|preventDefault={sendMsg} disabled={!textIsValid} class="msger-send-btn">send</button>
</form>