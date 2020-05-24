import { writable } from 'svelte/store';

export const network = writable({
    wsConnected: false,
    offline: false,
})
