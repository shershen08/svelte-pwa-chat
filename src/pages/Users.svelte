<script>
	import { onMount} from 'svelte';
    import {loadUsers} from '../services/api'

    let users = [];

    const getPromise = () => {
      return new Promise(async (resolve) => {
        users = await loadUsers()
        resolve()
      })
    }

    let usersLoading = getPromise()

    const chatWithUser = (user) => {
        console.log(user)
    }
</script>

<div>
    <h2>Users list</h2>
    {#await usersLoading}
      <p>Loading users...</p>
    {:then value}
     {#each users as user}
        <p on:click={chatWithUser(user)}>
          {user.name}
        </p>
      {/each}
    {:catch error}
      <p>failed to load users list</p>
    {/await}
</div>
