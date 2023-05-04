<script lang="ts">
    import type { TaskType } from '@/types';
    import { format } from 'date-fns';
    import clsx from 'clsx';

    export let date: Date;
    export let variant: string;
    export let tasks: TaskType[];
</script>

<div class={clsx(variant, 'item')}>
    {format(date, 'd')}
    {#each tasks as task}
        <p>T:{task.name}</p>
    {/each}
</div>

<style>
    .item {
        height: 64px;
        width: 64px;
    }
    .inactive {
        background: darkgray;
    }
    .active {
        background: white;
    }
    .today {
        background: lightblue;
    }
</style>
