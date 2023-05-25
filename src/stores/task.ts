import { TaskSchema, type TaskType } from '@/types';
import { z } from 'zod';
import { persistent } from './persistent';
/**
 * An array store that contains the tasks.
 * TODO: relax assumption that task store contains an array of tasks for one user
 */
const TaskStore = z.array(TaskSchema);

function createTaskStore() {
    const { update, subscribe } = persistent(
        'task-store',
        TaskStore.parse([]),
        TaskStore
    );

    return {
        add: (task: Omit<TaskType, 'uid'>) =>
            update((tasks) => [
                ...tasks,
                { uid: crypto.randomUUID(), ...task },
            ]),
        delete: (uid: TaskType['uid']) =>
            update((tasks) => tasks.filter((task) => task.uid != uid)),
        completeTask: (uid: TaskType['uid']) =>
            update((tasks) =>
                tasks.map((task) => {
                    if (task.uid === uid) {
                        return {
                            ...task,
                            completed: true,
                        };
                    } else {
                        return task;
                    }
                })
            ),
        update: (uid: TaskType['uid'], changes: Partial<TaskType>) =>
            update((tasks) =>
                tasks.map((task) =>
                    task.uid === uid ? { ...task, ...changes } : task
                )
            ),
        subscribe,
    };
}

export const tasks = createTaskStore();
