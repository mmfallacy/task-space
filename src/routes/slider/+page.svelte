<!-- App.svelte -->
<script>
    import RangeInput from './RangeInput.svelte';
</script>

<main>
    <RangeInput min={0} max={100} value={50} label="Slider:" id="slider1" />
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
    }
</style>
