<script>
    import {doSend} from '../../store/api.js'
    import {network} from '../../store/network.js'

    let text = ''
    
    $: disableFormSeding = text.length > 1 && !$network.offline

    const sendMsg = () => {
        doSend(text)
        text = ''
    }
</script>

<form class="msger-inputarea">
    <input bind:value={text} class="msger-input" placeholder="Enter your message..."/>
    <button on:click|preventDefault={sendMsg} disabled={!disableFormSeding} class="msger-send-btn">send</button>
</form>