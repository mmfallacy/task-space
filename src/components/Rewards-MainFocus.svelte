<script>
    import Rewards from '@/components/Rewards.svelte';

    export let rewards = [];
</script>

<div class="main-focus">
    <div class="rewards-container">
        <div class="rewards-header">
            <h1 style="font-family: arial;">Rewards</h1>
            <p class="TTCommons-Regular-16">Good job grabbing these rewards!</p>
        </div>

        <div class="rewards-wrapper">
            {#each rewards as reward}
                <Rewards {reward} />
            {/each}
        </div>
    </div>
</div>

<style>
    .rewards-wrapper {
        background-color: #fff;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        margin-top: 32px;
    }

    .rewards-container {
        min-width: 1000px;
        max-width: 1500px;
        margin: 24px auto;
    }

    .main-focus {
        display: flex;
        flex-grow: 1;
        overflow-y: auto;
        margin-left: 56px;
    }

    .rewards-header {
        align-items: center;
        justify-content: space-between;
    }

    .TTCommons-Regular-16 {
        font-family: Arial;
        font-size: 16px;
        color: black;
        letter-spacing: -0.04em;
    }
</style>
