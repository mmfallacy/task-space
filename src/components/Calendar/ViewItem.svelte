<script lang="ts">
    import { format } from 'date-fns';

    export let date: Date;
    export let active: boolean;
</script>

<div class="item" class:active>
    {format(date, 'd')}
</div>

<style>
    .item {
        height: 64px;
        width: 64px;
        background: darkgray;
    }
    .active {
        background: white;
    }
</style>
