import { writable, type Writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Persistent<T> = Writable<T>

export function persistent<T>(key: string, init?: T): Persistent<T> {
    const _writable = writable<T>(init);

    if (!browser) return _writable;

    const stored = localStorage.getItem(key);

    if (stored)
        _writable.set(JSON.parse(stored));

    _writable.subscribe(value => {
        localStorage?.setItem(key, JSON.stringify(value));
    });


    return _writable;
}

