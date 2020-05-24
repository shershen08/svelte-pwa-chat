<script>
import {messages} from '../../store/api.js'
import {user} from '../../store/user.js'

import Message from './Message.svelte'
import {sendNotification, readMsg} from '../../services/browser.js'

let messagesListContainer;

const scroll = () => {
    if(!messagesListContainer) return;
    messagesListContainer.lastElementChild.scrollIntoView();
}

messages.subscribe(value => {
    const msg = value[value.length-1];
    if(msg && msg.side === 'THEM'){
        readMsg(msg.text)
        sendNotification();
    }
    scroll();
}); 

</script>

<code bind:this={messagesListContainer}>
    <!-- {JSON.stringify($messages)} -->

    {#each $messages as item}
      <Message data={item} userName={$user.userName}/>
    {/each}
</code>