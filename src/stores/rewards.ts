import { RewardSchema, type RewardType } from '@/types';
import { z } from 'zod';
import { persistent } from './persistent';

export const REWARDS: RewardType[] = [
    {
        uid: '',
        userId: '',
        title: '30 days streak',
        dateAcquired: new Date(0),
        description: "Way to go! We're so proud of you :)",
    },

    {
        uid: '',
        userId: '',
        title: '20 days streak',
        dateAcquired: new Date(0),
        description: "It may seem impossible until it's done",
    },

    {
        uid: '',
        userId: '',
        title: '10 days streak',
        dateAcquired: new Date(0),
        description: 'We are capable of amazing things',
    },

    {
        uid: '',
        userId: '',
        title: '5 days streak',
        dateAcquired: new Date(0),
        description: 'It is the courage to continue that counts',
    },

    {
        uid: '',
        userId: '',
        title: 'Completed 5 resources',
        dateAcquired: new Date(0),
        description: 'Great job!',
    },

    {
        uid: '',
        userId: '',
        title: 'Clear all tasks in a day',
        dateAcquired: new Date(0),
        description: 'Good job! Now take a well-deserved break :)',
    },

    {
        uid: '',
        userId: '',
        title: 'Completed 5 tasks in a day',
        dateAcquired: new Date(0),
        description: 'What a surge of productivity!',
    },

    {
        uid: '',
        userId: '',
        title: 'Completed 3 tasks in a day',
        dateAcquired: new Date(0),
        description: "You're almost there!",
    },

    {
        uid: '',
        userId: '',
        title: 'Complete your first ever task',
        dateAcquired: new Date(0),
        description: 'Welcome to Task Space!',
    },

    {
        uid: '',
        userId: '',
        title: 'Get 5 badges',
        dateAcquired: new Date(0),
        description: "Wow! Seems like you're on a roll :)",
    },
];

const RewardStore = z.array(RewardSchema);

function createRewardStore() {
    const { update, subscribe } = persistent(
        'reward-store',
        RewardStore.parse([]),
        RewardStore
    );

    return {
        add: (reward: Omit<RewardType, 'uid'>) =>
            update((rewards) => [
                ...rewards,
                { uid: crypto.randomUUID(), ...reward },
            ]),
        subscribe,
    };
}

export const rewards = createRewardStore();
