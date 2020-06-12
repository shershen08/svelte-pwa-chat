<script>
	import { onMount} from 'svelte';

	import MsgList from '../components/messages/MsgList.svelte'
	import MsgForm from '../components/messages/MsgForm.svelte'
	import Header from '../components/Header.svelte'
	import Notifications from '../components/Notifications.svelte'

	import init from '../store/websocket.js'

	const wsUri = process.env.wsUrl
    
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
	<Notifications></Notifications>
	<main class="msger-chat">
		<MsgList/>
	</main>
	<MsgForm/>
</section>