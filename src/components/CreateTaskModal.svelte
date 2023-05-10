<script lang="ts">
    import { tasks } from '@/stores/task';
    import { TaskSchema } from '@/types';

    let dialog: HTMLDialogElement;

    export let showModal: boolean;

    $: if (dialog && showModal) dialog.showModal();

    function onSubmit(this: HTMLFormElement) {
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        const task = TaskSchema.omit({ uid: true }).parse(data);

        tasks.add(task);
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<main>
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
                <input type="text" name="name" required />
            </div>
            <br />

            <div>
                <label for="date">Date</label>
                <input type="date" name="deadline" required />
            </div>
            <br />

            <br />

            <div>
                <label for="name">Category</label>
                <input type="text" name="category" required />
            </div>

            <br />

            <div>
                <label for="name">Timescale</label>
                <input
                    type="number"
                    name="timescale"
                    min="1"
                    max="10"
                    required
                />
            </div>
            <br />

            <button type="submit">Continue</button>
        </form>
    </dialog>
</main>

<style>
</style>
