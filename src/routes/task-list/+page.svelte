<script lang="ts">
    import { tasks } from '@/stores/task';
    import Modal from '@/components/CreateTaskModal.svelte';
    import { currentUser } from '@/stores/currentUser';
    let showModal = false;

    console.log($currentUser);
</script>

<main>
    <div class="main">
        <div class="navbar" />

        <div class="sidebar">
            <br />
            <div class="sidebar-header">
                <button class="plus" on:click={() => (showModal = !showModal)}>
                    <div class="plusbutton" />
                </button>

                <button class="line" style="width: 50px;" />

                <button class="not-selected">
                    <div class="homebutton" />
                </button>

                <button class="selected">
                    <div class="taskbutton" />
                </button>
            </div>
        </div>

        <div class="right-left-wrapper">
            <div class="left">
                <h1 class="TTCommons-Regular-20">Back to Dashboard</h1>

                <button class="line" style="width: 250px;" />

                <div class="checkbox-list">
                    <div class="checkbox-main">
                        <p class="TTCommons-Regular-16" style="color:white">
                            All Tasks
                        </p>

                        <div class="checkbox-container">
                            <input type="checkbox" />
                        </div>
                    </div>

                    <div class="checkbox-main-white">
                        <div class="checkbox-child-title">
                            <p>Type</p>
                        </div>

                        <div class="flex-fill" />

                        <div class="checkbox-container">
                            <input type="checkbox" />
                        </div>
                    </div>

                    <div class="horizontal" />

                    <div
                        class="checkbox-main-white"
                        style="margin-top: -15px; margin-bottom: -15px;"
                    >
                        <p class="TTCommons-Regular-16">Quiz</p>

                        <div class="flex-fill" />

                        <div class="checkbox-container">
                            <input type="checkbox" />
                        </div>
                    </div>

                    <div
                        class="checkbox-main-white"
                        style="margin-top: -20px; margin-bottom: -15px;"
                    >
                        <p class="TTCommons-Regular-16">Project</p>

                        <div class="flex-fill" />

                        <div class="checkbox-container">
                            <input type="checkbox" />
                        </div>
                    </div>

                    <div
                        class="checkbox-main-white"
                        style="margin-top: -20px; margin-bottom: -15px;"
                    >
                        <p class="TTCommons-Regular-16">Problem Set</p>

                        <div class="flex-fill" />

                        <div class="checkbox-container">
                            <input type="checkbox" />
                        </div>
                    </div>

                    <div class="checkbox-main-white">
                        <div class="checkbox-child-title">
                            <p>Categories</p>
                        </div>

                        <div class="flex-fill" />

                        <div class="checkbox-container">
                            <input type="checkbox" />
                        </div>
                    </div>

                    <div class="horizontal" />

                    <div
                        class="checkbox-main-white"
                        style="margin-top: -15px; margin-bottom: -15px;"
                    >
                        <p class="TTCommons-Regular-16">CS 140</p>

                        <div class="flex-fill" />

                        <div class="checkbox-container">
                            <input type="checkbox" />
                        </div>
                    </div>

                    <div
                        class="checkbox-main-white"
                        style="margin-top: -15px; margin-bottom: -15px;"
                    >
                        <p class="TTCommons-Regular-16">CS 32</p>

                        <div class="flex-fill" />

                        <div class="checkbox-container">
                            <input type="checkbox" />
                        </div>
                    </div>

                    <div
                        class="checkbox-main-white"
                        style="margin-top: -15px; margin-bottom: -15px;"
                    >
                        <p class="TTCommons-Regular-16">CS 191</p>

                        <div class="flex-fill" />

                        <div class="checkbox-container">
                            <input type="checkbox" />
                        </div>
                    </div>

                    <div
                        class="checkbox-main-white"
                        style="margin-top: -15px; margin-bottom: -15px;"
                    >
                        <p class="TTCommons-Regular-16">CS 21</p>

                        <div class="flex-fill" />

                        <div class="checkbox-container">
                            <input type="checkbox" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <h1 style="font-family:arial; margin-bottom: 0px;">
                    Task List
                </h1>
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
                                        <p style="font-family:arial">
                                            Task Title
                                        </p>
                                    </div>
                                </div>

                                <div class="tasklist-header-duedate">
                                    <div>
                                        <p style="font-family:arial">
                                            Due Date
                                        </p>
                                    </div>
                                </div>

                                <div class="tasklist-header-category">
                                    <div>
                                        <p style="font-family:arial">
                                            Category
                                        </p>
                                    </div>
                                </div>

                                <div class="tasklist-header-status">
                                    <div>
                                        <p style="font-family:arial">Status</p>
                                    </div>
                                </div>

                                <div class="tasklist-row-dropdown" />
                            </div>

                            {#each $tasks as task (task.uid)}
                                <div
                                    class="tasklist-row-container"
                                    on:click={() => tasks.delete(task.uid)}
                                >
                                    <div class="tasklist-row-tasktitle">
                                        <div>
                                            <p
                                                style="font-family:arial; font-weight: bold;"
                                            >
                                                {task.name}
                                            </p>
                                        </div>
                                    </div>

                                    <div class="tasklist-row-duedate">
                                        <div>
                                            <p style="font-family:arial">
                                                {task.deadline.toString()}
                                            </p>
                                        </div>
                                    </div>

                                    <div class="tasklist-row-category">
                                        <div class="category-container">
                                            <div
                                                class="category-color"
                                                style="background: rgb(255, 107, 0);"
                                            />
                                            <p style="font-family:arial">
                                                {task.category}
                                            </p>
                                        </div>
                                    </div>

                                    <div class="tasklist-row-status">
                                        <div>
                                            <p
                                                style="font-family:arial; font-weight:bold;  color: #10B981"
                                            >
                                                Ongoing
                                            </p>
                                        </div>
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
    </div>
    <Modal {showModal} />
</main>

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
        margin: 12px -12px;
    }
    .tasklist-board-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 24px;
    }

    .tasklist-board-container {
        width: 100%;
        padding: 12px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 6px -1px;
        border-radius: 8px;
        background-color: rgb(255, 255, 255);
    }

    .tasklist-board {
        width: 100%;
    }

    .right-left-wrapper {
        display: flex;
    }

    .right {
        background-color: white;
        overflow: hidden auto;

        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 10px;
        margin-left: -10px;

        padding: 24px;
    }

    .horizontal {
        margin-top: -20px;
        height: 1px;
        width: 100%;
        background: #e2e8f0;
    }

    .checkbox-child-title {
        font-family: Arial;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #94a3b8;

        display: flex;
        align-items: center;
        cursor: pointer;
        gap: 8px;
    }

    .flex-fill {
        flex: 1 1 auto !important;
    }

    .checkbox-container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border-radius: 3px;
        margin-bottom: 0px;
    }

    input[type='checkbox'] {
        box-sizing: border-box;
        padding: 0;
    }

    input {
        color: #000;

        overflow: visible;

        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    .checkbox-list {
        border: 1px solid #e2e8f0;
        margin: 8px 0 0 0px;
        padding: 14px;
        border-radius: 5px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);

        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .checkbox-main {
        background: #000;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        height: 42px;
        padding: 0 8px;
        display: flex;
        align-items: center;
    }

    .checkbox-main-white {
        background: white;
        border-radius: 5px;
        padding: 0 8px;
        margin-bottom: 0px;
        display: flex;
        align-items: center;
    }

    .left {
        width: 250px;
        height: calc(100vh - 68px);
        background: #fff;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
        padding: 24px 16px;
        margin: 10px 10px 10px 55px;
        display: flex;
        flex-direction: column;
    }

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
    }

    .TTCommons-Regular-16 {
        font-family: Arial;
        font-size: 16px;
        color: black;
        letter-spacing: -0.04em;
    }

    .TTCommons-Regular-20 {
        font-family: Arial;
        font-size: 20px;
        color: black;
        letter-spacing: -0.04em;
    }
</style>
