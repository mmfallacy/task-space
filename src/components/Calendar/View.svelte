<script lang="ts">
    import { getCalendarDaysOfMonth } from '@/utils';
    import { addMonths, isSameMonth } from 'date-fns';
    import ViewItem from './ViewItem.svelte';

    let current = new Date();
    $: days = getCalendarDaysOfMonth(current);
</script>

<main>
    <div class="grid">
        {#each days as day}
            <ViewItem date={day} active={isSameMonth(day, current)} />
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
