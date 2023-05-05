<script>
    let options = ['Option 1', 'Option 2', 'Option 3'];
    let selectedOption = '';

    function handleSelect(event) {
        selectedOption = event.target.value;
    }
</script>

<label for="dropdown">Select an option:</label>
<select id="dropdown" on:change={handleSelect}>
    {#each options as option}
        <option value={option}>{option}</option>
    {/each}
</select>

<p>Selected option: {selectedOption}</p>
