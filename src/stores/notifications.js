import { writable, derived } from 'svelte/store';

function createNotificationStore() {
    const _notifications = writable([]);

    function send(message, type = 'default', timeout) {
        _notifications.update((state) => {
            return [...state, { id: id(), type, message, timeout }];
        });
    }

    const notifications = derived(_notifications, ($_notifications, set) => {
        set($_notifications);
        if ($_notifications.length > 0) {
            const timer = setTimeout(() => {
                _notifications.update((state) => {
                    state.shift();
                    return state;
                });
            }, $_notifications[0].timeout);
            return () => {
                clearTimeout(timer);
            };
        }
    });
    const { subscribe } = notifications;

    return {
        subscribe,
        send,
        email: (msg, timeout) => send(msg, 'email', timeout),
        password: (msg, timeout) => send(msg, 'password', timeout),
        registered: (msg, timeout) => send(msg, 'registered', timeout),
    };
}

function id() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

export const notifications = createNotificationStore();
