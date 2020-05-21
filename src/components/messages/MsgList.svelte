<script>
import {messages} from '../../store/api.js'
import Message from './Message.svelte'
import {sendNotification, readMsg} from '../../services/browser.js'




messages.subscribe(value => {
    const msg = value[value.length-1];
    if(msg && msg.side === 'THEM'){
        readMsg(msg.text)
        sendNotification();
    }
}); 


</script>

<code>
    <!-- {JSON.stringify($messages)} -->

    {#each $messages as item}
      <Message data={item}/>
    {/each}
</code>