import type { Task } from '@/types';
import { persistent, type Persistent } from './persistent';

/**
 * An array store that contains the tasks.
 * TODO: relax assumption that task store contains an array of tasks for one user
 */
function createTaskStore() {
    const { update, subscribe } = persistent<Task[]>('task-store', []);

    return {
        add: (task: Task) => update(tasks => [...tasks, task]),
        delete: (uid: Task['uid']) => update(tasks => tasks.filter(task => task.uid == uid)),
        subscribe,
    };
}

export const tasks = createTaskStore();
