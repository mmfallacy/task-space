<script lang="ts">
    import type { TaskType } from '@/types';
    import { format } from 'date-fns';
    import clsx from 'clsx';

    export let date: Date;
    export let variant: string;
    export let tasks: TaskType[];
</script>

<div class={clsx(variant, 'item', tasks.length > 0 && 'has-task')}>
    {format(date, 'd')}
    {#each tasks as task}
        <p>T:{task.name}</p>
    {/each}
</div>

<style>
    .item {
        height: 100%;
        width: 100%;
        border: 1px solid red;

        background: #f1f5f9;
        border: 0.5px solid #cbd5e1;
    }
    .inactive {
        color: #e2e8f0;
    }
    .active {
        color: currentColor;
    }
    .has-task {
        background: #f8fafc;
    }
    .today {
        background: #156ef0;
    }
</style>
