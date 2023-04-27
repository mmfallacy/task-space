import { writable } from 'svelte/store';

const userStore = writable<string | null>(null);

export const user = {
    ...userStore,
    set: () => { },
};
