<script lang="ts">
    import { getCalendarDaysOfMonth } from '@/utils';
    import { isSameDay, isSameMonth, isToday } from 'date-fns';
    import ViewItem from './ViewItem.svelte';
    import { tasks } from '@/stores/task';

    export let current: Date;
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

<div class="grid view">
    {#each days as day}
        <ViewItem
            date={day}
            variant={getVariant(day, current)}
            tasks={$tasks.filter((task) => isSameDay(task.deadline, day))}
        />
    {/each}
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat(6, 1fr);
    }
    .view {
        flex: 1;
    }
</style>
