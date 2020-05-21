<script>
	import { onMount } from 'svelte';
	 import MsgList from '../components/messages/MsgList.svelte'
	// import Intro from './Intro.svelte'
	 import MsgForm from '../components/messages/MsgForm.svelte'
	import Header from '../components/Header.svelte'

	import init from '../store/api.js'

    const wsUri = 'ws://echo.websocket.org/';
    
    onMount( () => {
        loadWS()
    })

	const loadWS = () => {
		init(wsUri);
	}
</script>


<svelte:window on:load={loadWS}/>

<section class="msger">
	<Header></Header>
	<main class="msger-chat">
		<MsgList/>
	</main>
	<MsgForm/>
</section>