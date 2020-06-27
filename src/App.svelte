<script>

	import Router from 'svelte-spa-router'

	import Links from './components/Links.svelte'
	import Login from './pages/Login.svelte'
	import Chat from './pages/Chat.svelte'
	import List from './pages/Users.svelte'
	import Settings from './pages/Settings.svelte'

	// use localhost, not 127.0.0.1 or 0.0.0.0
	 if ('serviceWorker' in navigator && !process.env.production) {
      navigator.serviceWorker.register('/service-worker.js');
	}
	const routes = {
		 '/': Login,
		 '/settings': Settings,
		 '/chat': Chat,
		 '/list': List,
		  '*': Login,
	}

</script>


  <Links></Links>
  <div class="main">
    <Router {routes}/>
  </div>

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