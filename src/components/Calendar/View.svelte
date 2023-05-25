<script lang="ts">
    import { getCalendarDaysOfMonth } from '@/utils';
    import { isSameDay, isSameMonth, isToday } from 'date-fns';
    import ViewItem from './ViewItem.svelte';
    import { tasks } from '@/stores/task';
    // import { currentUser } from '@/stores/currentUser';

    export let current: Date;
    export let filterValues;

    let filter;
    filterValues.subscribe((values) => {
        filter = values;
    });

    $: days = getCalendarDaysOfMonth(current);

    function getVariant(day: Date, current: Date) {
        if (isToday(day)) return 'today';
        if (isSameMonth(day, current)) return 'active';
        return 'inactive';
    }

    const LABELS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
</script>

<div class="grid view">
    <header>
        {#each LABELS as label}
            <h3>{label}</h3>
        {/each}
    </header>
    {#each days as day}
        <ViewItem
            date={day}
            variant={getVariant(day, current)}
            tasks={$tasks.filter((task) => {
                if (filter.allTasks) {
                    return isSameDay(task.deadline, day);
                } else if (
                    (filter.computerScience &&
                        task.category !== 'Computer Science') ||
                    (filter.generalEducation &&
                        task.category !== 'General Education')
                ) {
                    return false;
                }
                return isSameDay(task.deadline, day);
            })}
        />
    {/each}
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: auto repeat(6, 1fr);
    }
    .view {
        flex: 1;
    }

    .view header {
        grid-column: 1/-1;
        display: grid;
        align-items: center;
        justify-items: end;
        grid-template-columns: repeat(7, 1fr);

        background: #f8fafc;
        border: 0.5px solid #cbd5e1;
    }
    .view header h3 {
        padding: 8px 16px;
    }
</style>
