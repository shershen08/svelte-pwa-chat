<script>
    import {onMount} from 'svelte';
    import {network} from '../store/network.js'
    let msg = ''
    let state;

    const handleOffline = () => {
        state = 'offline'
        msg = 'Offline...'

        network.update(state => ({
            ...state,
            offline: true
        }))
    }
    const handleOnline = () => {
        state = ''
        msg = ''
        
        network.update(state => ({
            ...state,
            offline: false
        }))
    }
</script>

<svelte:window on:offline={handleOffline}  on:online={handleOnline}/>


{#if !$network.wsConnected}
    <div class="offline">
        Could not connect to server...
    </div>
{:else}
    <div class:offline={state === 'offline'}>
        {msg}
    </div>
{/if}
<style>
    .offline {
        padding: 5px 10px;
        text-align: center;
        background: red;
        color: aliceblue;
        font-size: 0.8em;
    }
</style>