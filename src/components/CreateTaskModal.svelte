<script>
    export let showModal; // boolean

    let dialog; // HTMLDialogElement

    $: if (dialog && showModal) dialog.showModal();
</script>

<dialog
    bind:this={dialog}
    on:close={() => (showModal = false)}
    on:click|self={() => dialog.close()}
>
    <div class="modal" on:click|stopPropagation>
        <slot name="header" />
        <slot />
    </div>
</dialog>

<style>
    dialog {
        border: none;
        border-radius: 8px;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
    }

    .modal {
        display: block !important;
    }
</style>
