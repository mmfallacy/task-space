<script lang="ts">
    import CalendarView from '@/components/Calendar/View.svelte';
    import Layout from '@/routes/layout.svelte';
    import Left from 'svelte-icons/md/MdChevronLeft.svelte';
    import Right from 'svelte-icons/md/MdChevronRight.svelte';
    import { today } from '@/utils';
    import { addMonths, format } from 'date-fns';
    import { writable } from 'svelte/store';
    import FilterCalendar from '@/components/FilterCalendar.svelte';

    let current = today();
    let filterValues = writable({
        computerScience: false,
        generalEducation: false,
    });

    function nextMonth() {
        current = addMonths(current, 1);
    }

    function prevMonth() {
        current = addMonths(current, -1);
    }

    function thisMonth() {
        current = today();
    }

    const handleFilter = (event) => {
        const { computerScience, generalEducation } = event.detail;

        // Update the store
        filterValues.set({ computerScience, generalEducation });
    };
</script>

<Layout>
    <div class="wrapper">
        <section class="controls">
            <h2>Calendar</h2>
            <hr />
            <h4>Categories</h4>

            <FilterCalendar on:filter={handleFilter} />
        </section>
        <section class="view">
            <header>
                <button on:click={prevMonth}>
                    <Left />
                </button>
                <button on:click={nextMonth}>
                    <Right />
                </button>
                <h2>{format(current, 'MMMM')}</h2>
                <button on:click={thisMonth} class="today">Today</button>
            </header>
            <CalendarView {current} {filterValues} />
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
        background: white;
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
        display: flex;
        padding: 8px;
        align-items: center;
        background: white;
        position: relative;
        z-index: 10;
    }

    .view header button:has(svg) {
        background: transparent;
        border: none;
        margin: 0 8px;
        color: #475569;
        width: 24px;

        cursor: pointer;
    }
    .view header h2 {
        font-weight: 600;
        font-size: 20px;
        flex: 1;
    }

    .view header .today {
        padding: 8px 16px;
        border: 1px solid #e2e8f0;
        border-radius: 4px;
        color: #156ef0;
        font-size: 16px;
        line-height: 20px;

        cursor: pointer;
    }
    .controls {
        padding: 16px;
    }
    .controls hr {
        margin: 8px 0;
        border: 1px solid #e2e8f0;
    }
    .controls h2 {
        font-weight: 600;
        font-size: 20px;
        flex: 1;
    }
    .controls h4 {
        color: #94a3b8;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
    }
</style>
