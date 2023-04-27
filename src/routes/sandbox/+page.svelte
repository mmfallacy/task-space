<script lang="ts">
    import Modal from '@/components/CreateTaskModal.svelte';
    import { tasks } from '@/stores/task';
    import { hashSHA256 } from '@/utils';
    // This code snippet adds a new task with given task properties.
    tasks.add({
        name: 'Task test',
        category: 'none',
        deadline: new Date(),
        timescale: 2,
    });
</script>

<main>
    {JSON.stringify($tasks)}
</main>

<style>
</style>
