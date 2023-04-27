import type { TaskType } from '@/types';
import { persistent } from './persistent';

/**
 * An array store that contains the tasks.
 * TODO: relax assumption that task store contains an array of tasks for one user
 */
function createTaskStore() {
    const { update, subscribe } = persistent<TaskType[]>('task-store', []);

    return {
        add: (task: Omit<TaskType, 'uid'>) =>
            update((tasks) => [
                ...tasks,
                { uid: crypto.randomUUID(), ...task },
            ]),
        delete: (uid: TaskType['uid']) =>
            update((tasks) => tasks.filter((task) => task.uid != uid)),
        subscribe,
    };
}

export const tasks = createTaskStore();
