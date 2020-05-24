<script>
	import { navigate } from "svelte-routing";
    import {user} from '../store/user.js'
    
    let username = ''

    const login = () => {
        user.update(() => ({
            userName: username
        }))
        // username = ''
        console.log(username)
        navigate("/chat", { replace: true });
    }

</script>
<label>Name</label>
<input bind:value={username}/>
<button on:click={login}>Login</button>