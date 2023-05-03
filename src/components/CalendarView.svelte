<script lang="ts">
    import { getCalendarDaysOfMonth } from '@/utils';
    import { format } from 'date-fns';

    let days = getCalendarDaysOfMonth(new Date());
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
