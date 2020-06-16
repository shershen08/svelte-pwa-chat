<script>
    import MdSend from 'svelte-icons/md/MdSend.svelte'
    
    import cssVars from 'svelte-css-vars';

    import {doSend} from '../../store/websocket.js'
    import {network} from '../../store/network.js'

    let text = ''
    
    $: disableFormSeding = text.length > 1 && !$network.offline

    $: styleVars = {
        height: `${text.length/3}px`,
    };

    const sendMsg = () => {
        doSend(text)
        text = ''
    }
</script>

<form class="msger-inputarea">
    <textarea bind:value={text} class="msger-input" placeholder="Enter your message..." use:cssVars={styleVars}></textarea>
    
    <button on:click|preventDefault={sendMsg} disabled={!disableFormSeding} class="msger-send-btn">
    send
    <div class="icon">
        <MdSend/>
    </div>
    </button>
</form>

<style>
    textarea {
         height: var(--height);
         min-height: 36px;
         max-height: 120px;
    }

    .icon {
        color: #fff;
        width: 18px;
        height: 18px;
        float: left;
        margin-right: 6px;
    }
</style>