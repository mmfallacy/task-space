<script lang="ts">
    import type { TaskType } from '@/types';
    import { format } from 'date-fns';
    import clsx from 'clsx';

    export let date: Date;
    export let variant: string;
    export let tasks: TaskType[];
</script>

<div class={clsx(variant, 'item', tasks.length > 0 && 'has-task')}>
    <span><header>{format(date, 'd')}</header></span>
    <div class="list">
        {#each tasks as task}
            <p>T:{task.name}</p>
        {/each}
    </div>
</div>

<style>
    .item {
        height: 100%;
        width: 100%;
        border: 1px solid red;

        background: #f1f5f9;
        border: 0.5px solid #cbd5e1;
        display: flex;
        flex-direction: column;
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

    .item span {
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        display: flex;
        flex-direction: row-reverse;

        padding: 4px;
    }
    .today header {
        padding: 4px 8px;
        background: #156ef0;
        border-radius: 8px;
        color: white;
    }

    .item .list {
        max-height: 10svh;

        padding: 8px;
        padding-top: 0;

        overflow-x: hidden;
        overflow-y: scroll;
        -ms-overflow-style: none; /* Internet Explorer 10+ */
        scrollbar-width: none; /* Firefox */
    }

    .item .list::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }
</style>
