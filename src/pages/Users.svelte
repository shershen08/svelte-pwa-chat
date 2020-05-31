<script>
	import { onMount} from 'svelte';
    import {loadUsers} from '../services/api'

    let users = [];

    onMount(async () => {
        users = await loadUsers()
    })

    const chatWithUser = (user) => {
        console.log(user)
    }
</script>

<div>
    <h2>Users list</h2>
     {#each users as user}
    <p on:click={chatWithUser(user.id)}>
      {user.name}
    </p>
  {/each}
</div>
