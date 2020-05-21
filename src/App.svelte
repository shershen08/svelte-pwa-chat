<script>
	import { Router, Link, Route } from "svelte-routing";

	import Login from './pages/Login.svelte'
	import Chat from './pages/Chat.svelte'
	import Settings from './pages/Settings.svelte'

	export let url = "";
</script>

<Router url="{url}">
  <nav>
    <Link to="chat">Chat</Link>
    <Link to="">Login</Link>
    <Link to="settings">Settings</Link>
  </nav>
  <div>
    <Route path="" component="{Login}" />
    <Route path="settings" component="{Settings}" />
    <Route path="chat" component="{Chat}" />
    <Route path="/"><Login /></Route>
  </div>
</Router>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>