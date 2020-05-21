import { writable } from 'svelte/store';

export const user = writable({
    wsLoaded: false,
    userLoggedIn: false
})