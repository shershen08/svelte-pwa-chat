<script>
	import { Router, Link, Route } from "svelte-routing";

	import Links from './components/Links.svelte'
	import Login from './pages/Login.svelte'
	import Chat from './pages/Chat.svelte'
	import List from './pages/Users.svelte'
	import Settings from './pages/Settings.svelte'

	export let url = "";
</script>

<Router url="{url}">
  <Links></Links>
  <div class="main">
    <Route path="" component="{Login}" />
    <Route path="settings" component="{Settings}" />
    <Route path="chat" component="{Chat}" />
	<Route path="list" component="{List}" />
    <Route path="/"><Login /></Route>
  </div>
</Router>

<style>
	:global(.main) {
		text-align: center;
		padding: 1em;
		width: 100%;
    	height: 90vh;
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