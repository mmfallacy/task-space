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

    let cat = [
        { id: 1, text: 'Computer Science' },
        { id: 2, text: 'General Education' },
    ];
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
    bind:this={dialog}
    on:close={() => (showModal = false)}
    on:click|self={() => dialog.close()}
>
    <div class="modal-header">
        <div class="TTCommons-DemiBold-34">Create a task</div>
        <div class="TTCommons-Regular-20">
            An organized task schedule is key to success!
        </div>
        <hr />
    </div>

    <form on:submit={onSubmit}>
        <div style="margin: 0px 0px 8px 0px;">
            <label class="TTCommons-Regular-16" for="name">Task Title</label>
        </div>
        <div>
            <input class="form" type="text" name="name" required />
        </div>
        <br />

        <!-- Date and Time -->
        <div class="date">
            <div style="margin: 0px 0px 8px 0px;">
                <label class="TTCommons-Regular-16" for="name">Date</label>
            </div>
            <div>
                <input class="form" type="date" name="deadline" />
            </div>
        </div>
        <br />

        <!-- Category -->
        <div style="margin: 0px 0px 8px 0px;">
            <label class="TTCommons-Regular-16" for="name">Category</label>
        </div>
        <div>
            <select required class="form" name="category">
                {#each cat as c}
                    <option value={c.text}>
                        {c.text}
                    </option>
                {/each}
            </select>
        </div>
        <br />

        <!-- Difficulty -->
        <div style="margin: 0px 0px 8px 0px;">
            <label class="TTCommons-Regular-16" for="name">Difficulty</label>
        </div>
        <div>
            <input
                class="form"
                type="number"
                name="timescale"
                min="1"
                max="10"
                required
            />
        </div>
        <br />

        <!-- Submit button -->
        <div class="modal-footer">
            <div />
            <button class="primary-button" type="submit">Continue</button>
        </div>
    </form>
</dialog>

<style>
    /* .date-time-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
    } */

    .form {
        width: 100%;
        background-color: #e2e8f0;
        border-radius: 4px;
        font-family: Arial;
        padding: 12px 16px;
        border: 1px solid #e2e8f0;
        box-sizing: border-box;
        transition: 0.5s;
        outline: none;
    }

    .modal-footer {
        background-position: right;
        border-top: none;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        display: flex;
        align-items: right;
        justify-content: space-between;
    }

    .primary-button {
        background-color: #0a5bd0;
        cursor: pointer;
        font-family: Arial;
        font-weight: 600;
        border-radius: 5px;
        box-shadow: none;
        color: #f8fafc;
        line-height: 20px;
        height: 44px;
        border: 1px solid transparent;
        padding: 0.375rem 0.75rem;
        font-size: 14px;
        text-align: center;
        vertical-align: middle;
        display: inline-block;
    }

    .TTCommons-Regular-16 {
        font-family: Arial;
        font-size: 16px;
        color: black;
        letter-spacing: -0.04em;
    }

    .TTCommons-Regular-20 {
        font-family: Arial;
        font-size: 20px;
        color: black;
        letter-spacing: -0.04em;
    }

    .TTCommons-DemiBold-34 {
        font-family: Arial;
        font-weight: bold;
        font-size: 34px;
        color: black;
        letter-spacing: -0.04em;
    }

    dialog {
        border: none;
        border-radius: 8px;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
        padding: 16px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
