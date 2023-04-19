<script lang="ts">
    import { assert } from '@/asserts';

    let dialog: HTMLDialogElement;

    $: if (dialog && showModal) dialog.showModal();

    let showModal = false;

    function onSubmit(e: SubmitEvent) {
        assert(e.target instanceof HTMLFormElement);

        const formData = new FormData(e.target);
        const task = Object.fromEntries(formData.entries());

        console.log(task);
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<main>
    <button on:click={() => (showModal = true)}> + </button>

    <dialog
        bind:this={dialog}
        on:close={() => (showModal = false)}
        on:click|self={() => dialog.close()}
    >
        <h2>
            <b>Create a task</b>
            <p>An organized task schedule is key to success!</p>
            <hr />
        </h2>

        <form on:submit={onSubmit}>
            <div>
                <label for="title">Task Title</label>
                <input type="text" name="title" required />
            </div>
            <br />

            <div>
                <label for="date">Date</label>
                <input type="date" name="date" />
            </div>
            <br />

            <br />

            <div>
                <label for="name">Category</label>
                <input type="text" name="category" />
            </div>

            <br />

            <div>
                <label for="name">Timesacale</label>
                <input type="number" name="timescale" />
            </div>
            <br />

            <button type="submit">Continue</button>
        </form>
    </dialog>
</main>

<style>
</style>
