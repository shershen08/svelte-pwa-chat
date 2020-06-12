<script>
	import { flip } from 'svelte/animate';
    import { quintOut } from 'svelte/easing';
    import {afterUpdate} from 'svelte';

    import {messages} from '../../store/websocket.js'
    import {user} from '../../store/user.js'

    import Message from './Message.svelte'
    import {sendNotification, readMsg} from '../../services/browser.js'

    let messagesListContainer;

    const scroll = () => {
        if(!messagesListContainer || !messagesListContainer.lastElementChild) return;
        messagesListContainer.lastElementChild.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        });
    }

    afterUpdate(() => {
        scroll();
    })

    messages.subscribe(value => {
        if(!value) return;
        const msg = value[value.length-1];
        if(msg && msg.side === 'THEM'){
            readMsg(msg.text)
            sendNotification();
        }
    }); 
</script>

<code bind:this={messagesListContainer}>
    <!-- {JSON.stringify($messages)} -->
    {#if $messages}
        {#each $messages as item (`${item.time}-${item.text}`)}
        <div style="margin-bottom: .5em;" animate:flip="{{delay: 250, duration: 2500, easing: quintOut}}">
            <Message data={item} userName={$user.userName}/>
        </div>
        
        {/each}
    {/if}
</code>