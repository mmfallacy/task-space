<script lang="ts">
    import Layout from '@/routes/layout.svelte';
    import MainFocus from '@/components/Rewards-MainFocus.svelte';

    import { REWARDS, rewards } from '@/stores/rewards';
    import { RewardSchema } from '@/types';
    import { currentUser } from '@/stores/currentUser';

    rewards.add({
        userId: '74fd6297-f523-4c9c-88be-bf8a52864f7a',
        title: '3 days streak',
        dateAcquired: new Date(0),
        description: "Way to go!"
    });

    rewards.add({
        userId: '',
        title: '5 days streak',
        dateAcquired: new Date(0),
        description: "Way to go!"
    });
</script>

<Layout>
    {#each $rewards.filter((reward) => reward.userId === $currentUser) as reward (reward.uid)}

    {reward.title}
    {reward.dateAcquired}
    {reward.description}

    {/each}
</Layout>

<style>
    .navbar {
        background: #156ef0;
        z-index: 1000 !important;
        padding: 15px !important;
        margin: -10px !important;
    }

    .selected {
        cursor: pointer;

        background: #156ef0;
        border-radius: 8px;
        border: none;
    }

    .not-selected {
        cursor: pointer;

        background: white;
        border-radius: 8px;
        border: none;
    }

    .homebutton {
        background-image: url('icons/HomeButton.png');

        background-repeat: no-repeat;
        background-position: center;
        background-size: 24px;
        margin: 10px;
        padding: 10px;

        border: none;
    }

    .taskbutton {
        background-image: url('icons/TaskButton.png');

        background-repeat: no-repeat;
        background-position: center;
        background-size: 24px;
        margin: 10px;
        padding: 10px;

        border: none;
    }

    .plus {
        cursor: pointer;

        background: #156ef0;
        border-radius: 8px;
        border: none;
    }

    .line {
        cursor: pointer;

        background: E2E8F0;
        border-radius: 8px;
        border: none;
    }

    .plusbutton {
        background-image: url('icons/PlusButton.png');

        background-repeat: no-repeat;
        background-position: center;
        background-size: 24px;
        margin: 10px;
        padding: 10px;

        border: none;
    }

    .sidebar {
        position: absolute;
        background: white;
        height: 700px;
        width: 64px !important;
        min-width: 64px !important;
        box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.1);

        margin: 10px -8px;
        padding: 0px;
    }

    .sidebar-header {
        padding: 0px 0px 0px 5px;
        border-bottom: none;
    }

    .main {
        background: #e2e8f0;
        padding: 0 !important;
        margin: 0 !important;
        min-height: 100vh;
    }

    .TTCommons-Regular-16 {
        font-family: Arial;
        font-size: 16px;
        color: black;
        letter-spacing: -0.04em;
    }

    .TTCommons-Bold-16 {
        font-family: Arial;
        font-weight: bold;
        font-size: 16px;
        color: black;
        letter-spacing: -0.04em;
    }

    .TTCommons-Regular-18 {
        font-family: Arial;
        font-size: 18px;
        color: black;
        letter-spacing: -0.04em;
    }

    .TTCommons-Regular-20 {
        font-family: Arial;
        font-size: 20px;
        color: black;
        letter-spacing: -0.04em;
    }

    .TTCommons-SemiBold-72 {
        font-family: Arial;
        font-size: 72px;
        color: #04285c;
        letter-spacing: -0.04em;
    }
</style>
