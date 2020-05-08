<script>
	import MsgList from './MsgList.svelte'
	import Intro from './Intro.svelte'
	import MsgForm from './MsgForm.svelte'

	import init from './service.js'

	const loadWS = () => {
		init();
	}
</script>

<svelte:window on:load={loadWS}/>
<main>
	<MsgList></MsgList>
	<Intro/>
	<MsgForm/>
</main>

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