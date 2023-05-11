<script>
    import Modal from '@/components/CreateTaskModal.svelte';
    import FaRegCalendar from 'svelte-icons/fa/FaRegCalendar.svelte';
    let showModal = false;
</script>

<aside class="sidebar">
    <button class="plus" on:click={() => (showModal = !showModal)}>
        <div class="plusbutton" />
    </button>

    <hr />

    <button class="navitem">
        <div class="homebutton" />
    </button>

    <button class="navitem selected">
        <div class="taskbutton" />
    </button>

    <button class="navitem">
        <FaRegCalendar />
    </button>

    <Modal {showModal} />
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
        height: 100%;
        width: 100%;

        border: none;
    }

    .taskbutton {
        background-image: url('icons/TaskButton.png');

        background-repeat: no-repeat;
        background-position: center;
        background-size: 24px;
        height: 100%;
        width: 100%;

        border: none;
    }

    hr {
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        margin: 7px 0;
        width: 80%;
    }

    .selected {
        cursor: pointer;

        background: #156ef0;
    }

    .navitem {
        cursor: pointer;

        border-radius: 8px;
        border: none;
        height: 48px;
        width: 48px;
        padding: 12px;
    }

    .navitem:not(:last-child) {
        margin-bottom: 12px;
    }
</style>
