<script lang="ts">
    import {
        startOfMonth,
        endOfMonth,
        startOfWeek,
        endOfWeek,
        eachDayOfInterval,
        format,
    } from 'date-fns';
    let current = new Date();

    let monthStart = startOfMonth(current);
    let monthEnd = endOfMonth(current);

    let weekStartOfMonthStart = startOfWeek(monthStart);
    let weekEndOfMonthEnd = endOfWeek(monthEnd);

    let days = eachDayOfInterval({
        start: weekStartOfMonthStart,
        end: weekEndOfMonthEnd,
    });
</script>

<main>
    {days.map((day) => format(day, 'MM-dd-yyyy'))}
</main>

<style>
    main {
        max-width: 500px;
        word-wrap: break-word;
    }
</style>
