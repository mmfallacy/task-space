import { writable, type Writable, type Updater } from "svelte/store"
import { browser } from '$app/environment'


export function persistent<T>(key: string, init?: T): Writable<T> {

    const _writable = writable<T>(init)

    if (!browser) return _writable

    const stored = localStorage.getItem(key)

    if (stored)
        _writable.set(JSON.parse(stored));

    _writable.subscribe(value => {
        localStorage?.setItem(key, JSON.stringify(value));
    })



    return _writable


}

