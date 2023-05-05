<script lang="ts">
    import { tasks } from '@/stores/task';
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
