<script lang="ts">
    import { tasks } from '@/stores/task';
    import { writable } from 'svelte/store';
    import { rewards } from '@/stores/rewards';
    import { currentUser } from '@/stores/currentUser';
    import Layout from '../layout.svelte';
    import Dropdown from '@/components/Dropdown.svelte';
    import FilterTaskList from '@/components/FilterTaskList.svelte';
    import TaskListContainer from '@/components/TaskListContainer.svelte';

    let filterValues = writable({
        computerScience: false,
        generalEducation: false,
    });

    console.log($currentUser);

    const handleDeleteTask = (taskUid) => {
        tasks.delete(taskUid);
    };

    const handleFilter = (event) => {
        const { computerScience, generalEducation } = event.detail;

        // Update the store
        filterValues.set({ computerScience, generalEducation });
    };

    function rewardSystem(N) {
        if (N === 1) {
            rewards.add({
                userId: $currentUser,
                title: 'Complete your first ever task',
                dateAcquired: new Date(),
                description: 'Welcome to Task Space!',
            });
        }

        if (N === 3) {
            rewards.add({
                userId: $currentUser,
                title: 'Completed 3 tasks',
                dateAcquired: new Date(),
                description: "You're almost there!",
            });
        }

        if (N === 5) {
            rewards.add({
                userId: $currentUser,
                title: 'Completed 5 tasks',
                dateAcquired: new Date(),
                description: 'What a surge of productivity!',
            });
        }

        if (N === 10) {
            rewards.add({
                userId: $currentUser,
                title: 'Completed 10 tasks',
                dateAcquired: new Date(),
                description: 'Good job! Now take a well-deserved break :)',
            });
        }

        if (N === 15) {
            rewards.add({
                userId: $currentUser,
                title: 'Completed 15 tasks',
                dateAcquired: new Date(),
                description: 'We are capable of amazing things',
            });
        }

        if (N === 20) {
            rewards.add({
                userId: $currentUser,
                title: 'Completed 20 tasks',
                dateAcquired: new Date(),
                description: "Way to go! We're so proud of you :)",
            });
        }
    }

    function rewardChecker() {
        let complete = $tasks
            .filter((task) => task.completed === true)
            .filter((task) => task.userId === $currentUser);
        let N = complete.length;
        rewardSystem(N);
    }
</script>

<Layout>
    <div class="right-left-wrapper">
        <div class="left">
            <h1 style="font-family:arial;">Task List</h1>

            <button class="line" style="width: 250px;" />

            <FilterTaskList on:filter={handleFilter} />
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

                    <TaskListContainer />

                    {#each $tasks.filter((task) => task.userId === $currentUser) as task (task.uid)}
                        {#if $filterValues.computerScience ? task.category === 'Computer Science' : $filterValues.generalEducation ? task.category === 'General Education' : true}
                            <div
                                class="tasklist-row-container"
                                on:click={() => {
                                    tasks.completeTask(task.uid);
                                    rewardChecker();
                                }}
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
                                    <Dropdown
                                        on:delete={() => handleDeleteTask(task.uid)}
                                    />
                                </div>
                            </div>
                        {/if}
                    {/each}
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
