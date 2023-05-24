<script lang="ts">
    import { tasks } from '@/stores/task';
    import { currentUser } from '@/stores/currentUser';
    import Layout from '../layout.svelte';

    console.log($currentUser);
</script>

<Layout>
    <div class="right-left-wrapper">
        <div class="left">
            <h1 style="font-family:arial; margin-bottom: 0px;">Task List</h1>
        </div>
        <div class="right">
            <h4 style="font-family:arial; margin-top: 8px;">
                The key is to do the more urgent ones first!
            </h4>

            <div class="tasklist-board">
                <div class="tasklist-board-container">
                    <div class="tasklist-board-header">
                        <p class="TTCommons-Regular-16">Important Tasks</p>
                    </div>

                    <div class="horizontal-line" />

                    <div class="tasklist-board-maincontent">
                        <div class="tasklist-maincontent-header">
                            <div class="tasklist-header-tasktitle">
                                <div>
                                    <p style="font-family:arial">Task Title</p>
                                </div>
                            </div>

                            <div class="tasklist-header-duedate">
                                <div>
                                    <p style="font-family:arial">Due Date</p>
                                </div>
                            </div>

                            <div class="tasklist-header-category">
                                <div>
                                    <p style="font-family:arial" />
                                </div>
                            </div>

                            <div class="tasklist-header-status">
                                <div>
                                    <p style="font-family:arial">Status</p>
                                </div>
                            </div>

                            <div class="tasklist-row-dropdown" />
                        </div>

                        {#each $tasks.filter((task) => task.userId === $currentUser) as task (task.uid)}
                            <div
                                class="tasklist-row-container"
                                on:click={() => {
                                    tasks.update(task.uid, { isDeleted: true });
                                }}
                            >
                                <div class="tasklist-row-tasktitle">
                                    {#if task.isDeleted}
                                        <p
                                            style="font-family: arial; font-weight: bold; text-decoration: line-through; color: gray;"
                                        >
                                            {task.name}
                                        </p>
                                    {:else}
                                        <p
                                            style="font-family: arial; font-weight: bold;"
                                        >
                                            {task.name}
                                        </p>
                                    {/if}
                                </div>

                                <div class="tasklist-row-duedate">
                                    {#if task.isDeleted}
                                        <p
                                            style="font-family: arial; font-weight: bold; text-decoration: line-through; color: gray;"
                                        >
                                            {task.deadline.toString()}
                                        </p>
                                    {:else}
                                        <p
                                            style="font-family: arial; font-weight: bold;"
                                        >
                                            {task.deadline.toString()}
                                        </p>
                                    {/if}
                                </div>

                                <div class="tasklist-row-category">
                                    <div class="category-container">
                                        <div
                                            class="category-color"
                                            style="background: rgb(255, 107, 0);"
                                        />
                                        {#if task.isDeleted}
                                            <p
                                                style="font-family: arial; font-weight: bold; text-decoration: line-through; color: #10B981;"
                                            >
                                                {task.category}
                                            </p>
                                        {:else}
                                            <p
                                                style="font-family:arial; font-weight:bold;  color: #10B981"
                                            >
                                                {task.category}
                                            </p>
                                        {/if}
                                    </div>
                                </div>

                                <div class="tasklist-row-status">
                                    {#if task.isDeleted}
                                        <p
                                            style="font-family: arial; font-weight: bold; text-decoration: line-through; color: #10B981;"
                                        >
                                            Done
                                        </p>
                                    {:else}
                                        <p
                                            style="font-family:arial; font-weight:bold;  color: #10B981"
                                        >
                                            Ongoing
                                        </p>
                                    {/if}
                                </div>

                                <div class="tasklist-row-dropdown">
                                    <div class="dropdown">
                                        <p />
                                    </div>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</Layout>

<style>
    .tasklist-header-status {
        flex: 1 1 170px;
        min-width: 170px;
    }

    .tasklist-header-category {
        flex: 1 1 150px;
        min-width: 150px;
    }

    .tasklist-header-duedate {
        flex: 1 1 200px;
        min-width: 200px;
    }

    .tasklist-header-tasktitle {
        flex: 0 1 250px;
        min-width: 250px;
    }

    .tasklist-maincontent-header {
        display: flex;
        gap: 16px;
        align-items: center;
        width: 100%;
        padding: 8px 16px;
        background-color: var(--gray-100);
        border-radius: 5px;
    }

    .dropdown {
        background-image: url(Dropdown.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 24px;
        margin: 10px;
        padding: 10px;

        border: none;
        cursor: pointer;
    }

    .tasklist-row-dropdown {
        flex: 1 1 170px;
        min-width: 170px;
    }

    .tasklist-row-status {
        flex: 1 1 170px;
        min-width: 170px;
    }

    .category-color {
        width: 16px;
        height: 16px;
        border-radius: 100%;
        min-width: 16px;
    }

    .category-container {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .tasklist-row-category {
        flex: 1 1 150px;
        min-width: 150px;
    }

    .tasklist-row-duedate {
        flex: 1 1 200px;
        min-width: 200px;
    }

    .tasklist-row-tasktitle {
        flex: 0 1 250px;
        min-width: 250px;
    }

    .tasklist-row-container {
        display: flex;
        align-items: center;
        gap: 16px;
        width: 100%;
        padding: 8px 8px 8px 16px;
        border-bottom: 1px solid rgb(241, 245, 249);
        border-radius: 4px;
        cursor: pointer;
        min-height: 64px;
    }

    .tasklist-board-maincontent {
        flex: 1 1 0%;
        display: flex;
        flex-direction: column;
    }

    .horizontal-line {
        border-bottom: 1px solid #e2e8f0;
    }
    .tasklist-board-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
    }

    .tasklist-board-container {
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 6px -1px;
        border-radius: 8px;
        background-color: rgb(255, 255, 255);
        margin: 16px 0;
    }

    .tasklist-board {
        width: 100%;
    }

    .right-left-wrapper {
        height: 100%;
        width: 100%;
        display: flex;
    }

    .right {
        overflow: hidden auto;

        display: flex;
        flex-direction: column;
        width: 100%;

        padding: 24px;
    }

    .left {
        background: white;
        width: 320px;
        height: 100%;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
        padding: 16px 16px;
        display: flex;
        flex-direction: column;
    }

    .TTCommons-Regular-16 {
        font-family: Arial;
        font-size: 16px;
        color: black;
        letter-spacing: -0.04em;
    }
</style>
