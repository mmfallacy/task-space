<script lang="ts">
    import CalendarView from '@/components/Calendar/View.svelte';
    import Layout from '@/routes/layout.svelte';
    import { today } from '@/utils';
    import { addMonths } from 'date-fns';

    let current = today();
</script>

<Layout>
    <div class="wrapper">
        <section class="controls">
            <h3>Calendar</h3>
            <button on:click={() => (current = addMonths(current, -1))}>
                Prev
            </button>
            <button on:click={() => (current = addMonths(current, 1))}>
                Next
            </button>
        </section>
        <section class="view">
            <header>
                <h3>November</h3>
                <button> Today </button>
            </header>
            <CalendarView {current} />
        </section>
    </div>
</Layout>

<style>
    .wrapper {
        display: flex;
        height: 100%;
        width: 100%;
    }
    .controls {
        width: 320px;
    }
    .view {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .view header {
        width: 100%;
    }
</style>
