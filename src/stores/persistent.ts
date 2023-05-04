import { writable, type Writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { z } from 'zod';

export type Persistent<T> = Writable<T>;

export function persistent<T, S extends z.ZodTypeAny>(
    key: string,
    init?: T,
    schema?: S
): Persistent<T> {
    const _writable = writable<T>(init);

    if (!browser) return _writable;

    const stored = localStorage.getItem(key);

    _writable.subscribe((value) => {
        localStorage.setItem(key, JSON.stringify(value));
    });

    if (stored) {
        let parsed = JSON.parse(stored);
        if (schema) parsed = schema.parse(parsed);

        _writable.set(parsed);
    }

    return _writable;
}
