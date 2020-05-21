<script>
    import {doSend} from '../store/api.js'
    let username = ''
    const login = () => {
        console.log(text)
        doSend(text)
        text = ''
    }

</script>
<label>Name</label>
<input bind:value={username}/>
<button on:click={login}>Login</button>