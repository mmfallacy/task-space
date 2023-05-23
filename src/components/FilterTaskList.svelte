<script>
    import { onMount, onDestroy, createEventDispatcher } from 'svelte';

    let allTasksChecked = true;
    let computerScienceChecked = false;
    let generalEducationChecked = false;

    const dispatch = createEventDispatcher();

    function handleCheckboxChange(event) {
        const { name, checked } = event.target;

        if (name === 'allTasks') {
            allTasksChecked = checked;
            computerScienceChecked = false;
            generalEducationChecked = false;
        } else if (name === 'computerScience') {
            allTasksChecked = false;
            computerScienceChecked = checked;
            generalEducationChecked = !checked && generalEducationChecked; // Uncheck generalEducation if computerScience is checked
        } else if (name === 'generalEducation') {
            allTasksChecked = false;
            generalEducationChecked = checked;
            computerScienceChecked = !checked && computerScienceChecked; // Uncheck computerScience if generalEducation is checked
        }

        dispatch('filter', {
            computerScience: computerScienceChecked,
            generalEducation: generalEducationChecked,
        });
    }

    onMount(() => {
        dispatch('filter', {
            computerScience: computerScienceChecked,
            generalEducation: generalEducationChecked,
        });
    });

    onDestroy(() => {
        // Cleanup code if needed
    });
</script>

<div class="checkbox-list">
    <div>
        <label class="checkbox-main">
            <p class="TTCommons-Regular-16" style="color:white">All Tasks</p>

            <div class="flex-fill" />

            <input
                type="checkbox"
                name="allTasks"
                bind:checked={allTasksChecked}
                on:change={handleCheckboxChange}
            />
        </label>
    </div>

    <div class="checkbox-main-white">
        <div class="checkbox-child-title">
            <p>Categories</p>
        </div>
    </div>

    <div class="horizontal" />

    <div>
        <label class="checkbox-main-white">
            <p class="TTCommons-Regular-16">Computer Science</p>

            <div class="flex-fill" />

            <input
                type="checkbox"
                name="computerScience"
                bind:checked={computerScienceChecked}
                on:change={handleCheckboxChange}
            />
        </label>
    </div>
    <div>
        <label class="checkbox-main-white">
            <p class="TTCommons-Regular-16">General Education</p>

            <div class="flex-fill" />

            <input
                type="checkbox"
                name="generalEducation"
                bind:checked={generalEducationChecked}
                on:change={handleCheckboxChange}
            />
        </label>
    </div>
</div>

<style>
    .horizontal {
        height: 1px;
        width: 100%;
        background: #e2e8f0;
    }

    .checkbox-child-title {
        font-family: Arial;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #94a3b8;

        display: flex;
        align-items: center;
        cursor: pointer;
        gap: 8px;
    }

    .flex-fill {
        flex: 1 1 auto !important;
    }

    /* .checkbox-container {
        display: flex;
        align-items: center;
        justify-content: center;S
        position: relative;
        border-radius: 3px;
        margin-bottom: 0px;
    } */

    input[type='checkbox'] {
        box-sizing: border-box;
        padding: 0;
    }

    input {
        color: #000;

        overflow: visible;

        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    .checkbox-list {
        border: 1px solid #e2e8f0;
        margin: 0px;
        padding: 14px;
        border-radius: 5px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);

        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .checkbox-main {
        background: #000;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        height: 42px;
        padding: 0 8px;
        display: flex;
        align-items: center;
    }

    .checkbox-main-white {
        background: white;
        border-radius: 5px;
        padding: 0 8px;
        margin-bottom: 0px;
        display: flex;
        align-items: center;
    }

    .TTCommons-Regular-16 {
        font-family: Arial;
        font-size: 16px;
        color: black;
        letter-spacing: -0.04em;
    }
</style>
