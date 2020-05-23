import { writable } from 'svelte/store';

export const user = writable({
    wsConnected: false,
    userLoggedIn: false
})
