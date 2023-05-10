<script>
    import { tasks } from '@/stores/task';
</script>

<main>
    {#each $tasks as task (task.uid)}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
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

</main>

<style>
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

    .tasklist-row-dropdown {
        flex: 1 1 170px;
        min-width: 170px;
    }
</style>