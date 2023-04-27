import { z } from 'zod';

export const TaskSchema = z.object({
    uid: z.string(),
    name: z.string(),
    category: z.string(),
    deadline: z.coerce.date(),
    timescale: z.coerce.number().min(1).max(10),
});

export type TaskType = z.infer<typeof TaskSchema>;

export interface Badge {
    badgeName: string;
    rarity: number;
}

export interface Resource {
    label: string;
    description: string;
    classification: string;
}
// export interface Task {
//     uid: string;
//     name: string;
//     category: string;
//     deadline: Date;
//     timescale: number;
// }

export interface User {
    uid: string;
    name: string;
    badges: Badge[];
}
