import { z } from 'zod';

export type TaskType = z.infer<typeof TaskSchema>;

export const BadgeSchema = z.object({
    badgeName: z.string(),
    rarity: z.coerce.number(),
});

export type BadgeType = z.infer<typeof BadgeSchema>;

export const ResourceSchema = z.object({
    title: z.string(),
    content: z.string(),
    link: z.string(),
});

export type ResourceType = z.infer<typeof ResourceSchema>;

export const UserSchema = z.object({
    uid: z.string(),
    name: z.string(),
    badges: z.array(BadgeSchema),
});

export type UserType = z.infer<typeof UserSchema>;

export const CredentialsSchema = z.object({
    uid: UserSchema.shape.uid,
    email: z.string(),
    passwordHash: z.string(),
});

export type CredentialsType = z.infer<typeof CredentialsSchema>;

export const TaskSchema = z.object({
    uid: z.string(),
    userId: CredentialsSchema.shape.uid,
    name: z.string(),
    category: z.string(),
    deadline: z.coerce.date(),
    timescale: z.coerce.number().min(1).max(10),
});
