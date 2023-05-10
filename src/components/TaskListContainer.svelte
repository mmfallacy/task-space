<script>

</script>

<main>
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
        </div>
    </div>
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

    .tasklist-board-maincontent {
        flex: 1 1 0%;
        display: flex;
        flex-direction: column;
    }
</style>