<script>
    import {humanize} from '../../services/other.js'
    export let data;
    export let userName;
</script>

<div class="msg" class:right-msg="{data.side !== 'THEM'}" class:left-msg="{data.side === 'THEM'}">
    
    <!-- <div class="msg-img" style="background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg)"></div> -->
    <div class="msg-bubble">
    <div class="msg-info">
    
    {#if data.side !== 'THEM'}
        <div class="msg-info-name">{userName}</div>
    {:else}
        <div class="msg-info-name">{data.username}</div>
    {/if}

    <div class="msg-info-time">{humanize(data.time)}</div>
    </div>
    <div class="msg-text">
        {data.text}
    </div>
    </div>
</div>
<style>
    .msg-text {
        text-align: left;
    }
</style>