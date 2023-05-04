<script lang="ts">
    import { getCalendarDaysOfMonth, today } from '@/utils';
    import { addMonths, isSameDay, isSameMonth, isToday } from 'date-fns';
    import ViewItem from './ViewItem.svelte';
    import { tasks } from '@/stores/task';

    let current = today();
    $: days = getCalendarDaysOfMonth(current);

    console.log(
        current,
        $tasks.map((task) => ({
            title: task.name,
            isNow: isSameDay(task.deadline, current),
        }))
    );

    function getVariant(day: Date, current: Date) {
        if (isToday(day)) return 'today';
        if (isSameMonth(day, current)) return 'active';

        return 'inactive';
    }
</script>

<main>
    <div class="grid">
        {#each days as day}
            <ViewItem
                date={day}
                variant={getVariant(day, current)}
                tasks={$tasks.filter((task) => isSameDay(task.deadline, day))}
            />
        {/each}
    </div>

    <button
        on:click={() => {
            current = addMonths(current, -1);
        }}>&lt;</button
    >

    <button
        on:click={() => {
            current = addMonths(current, 1);
        }}>&gt;</button
    >
</main>

<style>
    main {
        max-width: 500px;
        word-wrap: break-word;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
    }
</style>
