<script>
    import Modal from '@/components/CreateTaskModal.svelte';
    import FaRegCalendar from 'svelte-icons/fa/FaRegCalendar.svelte';
    import FaRegListAlt from 'svelte-icons/fa/FaRegListAlt.svelte';
    import FaBookOpen from 'svelte-icons/fa/FaBookOpen.svelte';
    import FaRegStar from 'svelte-icons/fa/FaRegStar.svelte';
    import clsx from 'clsx';
    let showModal = false;

    let routes = [
        { url: '/task-list', icon: FaRegListAlt },
        { url: '/calendar', icon: FaRegCalendar },
        { url: '/rewards', icon: FaRegStar },
        { url: '/resources', icon: FaBookOpen },
    ];

    let currentPathname = window.location.pathname;
</script>

<aside class="sidebar">
    <button class="plus" on:click={() => (showModal = !showModal)}>
        <div class="plusbutton" />
    </button>

    <hr />

    {#each routes as route}
        <a
            href={route.url}
            class={clsx('navitem', currentPathname == route.url && 'selected')}
        >
            <svelte:component this={route.icon} />
        </a>
    {/each}

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

    hr {
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        margin: 7px 0;
        width: 80%;
    }

    .selected {
        cursor: pointer;

        background: #156ef0;
        color: white !important;
    }

    .navitem {
        cursor: pointer;

        border-radius: 8px;
        border: none;
        height: 42px;
        width: 42px;
        padding: 12px;

        color: black;
    }

    .navitem:not(:last-child) {
        margin-bottom: 12px;
    }
</style>
