<script lang="ts">
    import Modal from '@/components/CreateTaskModal.svelte';
    import { currentUser } from '@/stores/currentUser';
    import MainFocus from '@/components/Rewards-MainFocus.svelte';

    let rewards = [
        {
            title: '30 days streak',
            content: 'Way to go! We’re so proud of you :)',
            date: '07 Nov 2022',
        },
        {
            title: '20 days streak',
            content: 'It may seem impossible until it’s done',
            date: '27 Oct 2022',
        },
        {
            title: '10 days streak',
            content: 'We are capable of amazing things',
            date: '17 Oct 2022',
        },
    ];

    let showModal = false;

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

        <MainFocus {rewards} />
    </div>
    <Modal {showModal} />
</main>

<style>
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
        min-height: 100vh;
    }

    .TTCommons-Regular-16 {
        font-family: Arial;
        font-size: 16px;
        color: black;
        letter-spacing: -0.04em;
    }

    .TTCommons-Bold-16 {
        font-family: Arial;
        font-weight: bold;
        font-size: 16px;
        color: black;
        letter-spacing: -0.04em;
    }

    .TTCommons-Regular-18 {
        font-family: Arial;
        font-size: 18px;
        color: black;
        letter-spacing: -0.04em;
    }

    .TTCommons-Regular-20 {
        font-family: Arial;
        font-size: 20px;
        color: black;
        letter-spacing: -0.04em;
    }

    .TTCommons-SemiBold-72 {
        font-family: Arial;
        font-size: 72px;
        color: #04285c;
        letter-spacing: -0.04em;
    }
</style>
