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
        add: (reward: RewardType) =>
            update((rewards) => {
                const match = rewards.filter((r) => reward.title == r.title);
                if (match.length < 1) rewards.push(reward);
                return rewards;
            }),
        subscribe,
    };
}

export const rewards = createRewardStore();
