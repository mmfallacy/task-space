<script lang="ts">
    import Modal from "@/components/CreateTaskModal.svelte";
    import { persistent } from "@/stores/persistent";

    const count = persistent("count", 0);

    count.subscribe(console.log);

    count.update((v) => v + 1);
    count.update((v) => v + 1);
</script>

<main>
    <Modal />
</main>

<style>
</style>
