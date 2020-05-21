import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		wsUri: "ws://echo.websocket.org/"
	}
});

export default app;