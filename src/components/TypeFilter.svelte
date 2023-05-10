<script>
</script>

<main>
    <div class="checkbox-main-white">
        <div class="checkbox-child-title">
            <p>Type</p>
        </div>

        <div class="flex-fill" />

        <div class="checkbox-container">
            <input type="checkbox" />
        </div>
    </div>
</main>

<style>
    .checkbox-main-white {
        background: white;
        border-radius: 5px;
        padding: 0 8px;
        margin-bottom: 0px;
        display: flex;
        align-items: center;
    }

    .checkbox-container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border-radius: 3px;
        margin-bottom: 0px;
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
</style>
