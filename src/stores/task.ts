import type { Task } from '@/types';
import { persistent } from './persistent';

/**
 * An array store that contains the tasks.
 * TODO: relax assumption that task store contains an array of tasks for one user
 */
function createTaskStore() {
    const { update, subscribe } = persistent<Task[]>('task-store', []);

    return {
        add: (task: Omit<Task, 'uid'>) =>
            update((tasks) => [
                ...tasks,
                { uid: crypto.randomUUID(), ...task },
            ]),
        delete: (uid: Task['uid']) =>
            update((tasks) => tasks.filter((task) => task.uid != uid)),
        subscribe,
    };
}

export const tasks = createTaskStore();
