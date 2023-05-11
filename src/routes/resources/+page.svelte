<script lang="ts">
    import Modal from '@/components/CreateTaskModal.svelte';
    import { currentUser } from '@/stores/currentUser';
    import Resources from '@/components/Resources.svelte';
    import Layout from '../layout.svelte';
    import { RESOURCES } from '@/stores/resources';
</script>

<Layout>
    <div class="right-left-wrapper">
        <div class="left">
            <h1 class="TTCommons-Regular-20">Back to Dashboard</h1>

            <button class="line" style="width: 250px;" />
        </div>
        <div class="right">
            <div class="resources-header">
                <h1 style="font-family: arial;">Resources</h1>
            </div>

            {#each RESOURCES as resource}
                <Resources {resource} />
            {/each}
        </div>
    </div>
</Layout>

<style>
    .resources-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        height: 56px;
        background-color: #fff;

        padding: 12px 32px;
        margin-bottom: 8px;
    }

    .right-left-wrapper {
        display: flex;
        height: 100%;
        width: 100%;
    }

    .right {
        background-color: #f1f5f9;
        overflow: hidden auto;

        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        padding: 24px;
    }

    .left {
        width: 250px;
        background: #fff;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
        padding: 24px 16px;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .line {
        cursor: pointer;

        background: E2E8F0;
        border-radius: 8px;
        border: none;
    }

    .TTCommons-Regular-20 {
        font-family: Arial;
        font-size: 20px;
        color: black;
        letter-spacing: -0.04em;
    }
</style>
