<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function toggleModal() {
        dispatch('toggleModal');
    }
</script>

<aside class="sidebar">
    <button class="plus" on:click={toggleModal}>
        <div class="plusbutton" />
    </button>

    <button class="line" style="width: 50px;" />

    <button class="not-selected">
        <div class="homebutton" />
    </button>

    <button class="selected">
        <div class="taskbutton" />
    </button>
</aside>

<style>
    .sidebar {
        background: white;
        height: 100%;
        width: 100%;
        box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 15px 0;
    }

    .plus {
        cursor: pointer;
        background: #156ef0;
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

    .line {
        cursor: pointer;

        background: E2E8F0;
        border-radius: 8px;
        border: none;
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
</style>
