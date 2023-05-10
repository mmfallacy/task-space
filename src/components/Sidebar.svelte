<script>
    let showModal = false;
    import Modal from '@/components/CreateTaskModal.svelte';
</script>

<main>
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
    <Modal {showModal} />
</main>

<style>
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
</style>
