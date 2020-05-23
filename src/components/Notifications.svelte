<script>
    import {user} from '../store/user.js'
    let msg = '...'
</script>
<div class="type">
    {msg} / { $user}
</div>
<style>
    .type {
        padding: 5px 10px;
        text-align: center;
        background: green;
        color: aliceblue;
        font-size: 0.8em;
    }
</style>