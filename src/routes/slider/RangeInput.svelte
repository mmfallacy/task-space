<script>
    export let min = 0;
    export let max = 100;
    export let value = 50;
    export let label = "Slider:";
    export let id = "slider";
  
    function handleInput(event) {
      value = +event.target.value;
    }
  </script>
  
  <main>
    <label for={id}>{label}</label>
    <input class="RangeInput" type="range" id={id} min={min} max={max} bind:value on:input={handleInput}>
    <p>The current value is: {value}</p>
  </main>
  
  <style>

  .RangeInput {
    width: 100%;
    height: 10px;
    background-color: #F1F5F9;
    border: none;
    border-radius: 10px;
    -webkit-appearance: none;
    position: relative;
  }

  .RangeInput::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background-color: #156EF0;
    border: 1px solid #156EF0;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    z-index: 2;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }

  label {
    font-size: 16px;
    margin-bottom: 10px;
  }


  </style>
  
