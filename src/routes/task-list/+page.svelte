<script lang="ts">
    import { currentUser } from '@/stores/currentUser';
    import { Sidebar } from '@/task-list-exports.js';
    import { Categories } from '@/task-list-exports.js';
    import { TaskListItems } from '@/task-list-exports.js';
    import { TaskListContainer } from '@/task-list-exports.js';
    
    console.log($currentUser);
</script>

<main>
    <div class="main">
        <div
            class="navbar TTCommons-Regular-16"
            style="font-size:14px; color:white; text-align:right;"
        >
            Hello, {$currentUser}
        </div>

        <Sidebar />

        <div class="right-left-wrapper">
            
            <Categories />

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

                        <TaskListContainer />

                        <TaskListItems />
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
</main>

<style>
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

    .navbar {
        background: #156ef0;
        z-index: 1000 !important;
        padding: 15px !important;
        margin: -10px !important;
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

</style>
