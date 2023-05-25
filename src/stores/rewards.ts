import { RewardSchema, type RewardType } from '@/types';
import { z } from 'zod';
import { persistent } from './persistent';

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
        delete: (uid: RewardType['uid']) =>
            update((rewards) => rewards.filter((reward) => reward.uid != uid)),
        subscribe,
    };
}

export const rewards = createRewardStore();
