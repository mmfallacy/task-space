<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
  
    // Your form-related JavaScript code here...
    let cat = [
      { id: 1, text: "CS 180" },
      { id: 2, text: "CS 192" },
    ];
  
    let selected;
    let ans = "";
  
    function isFormValid(data) {
      if (!isRequiredFieldValid(data.tasktitle)) {
        return false;
      }
  
      if (!isRequiredFieldValid(data.date)) {
        return false;
      }
      return true;
    }
  
    function isRequiredFieldValid(value) {
      return value != null && value !== "";
    }
  
    function onSubmit(e) {
      // Your onSubmit logic here...
      const formData = new FormData(e.target);
  
      const data = {};
      for (let field of formData) {
        const [key, value] = field;
        data[key] = value;
      }
  
      if (isFormValid(data)) {
        dispatch("submit", data);
      } else {
        console.log("Invalid Form");
      }
    }
  </script>
  
  <form on:submit|preventDefault="{onSubmit}">
    <!-- Task Title -->
    <div style="margin: 0px 0px 8px 0px;">
      <label class="TTCommons-Regular-16" for="name">Task Title</label>
    </div>
    <div>
      <input
        class="form"
        type="text"
        id="tasktitle"
        name="tasktitle"
        placeholder="Input subject title"
      />
    </div>
    <br />
  
    <!-- Date and Time -->
      <div class="date">
        <div style="margin: 0px 0px 8px 0px;">
          <label class="TTCommons-Regular-16" for="name">Date</label>
        </div>
        <div>
          <input
            class="form"
            type="date"
            id="date"
            name="date"
          />
        </div>
      </div>
<br />

<!-- Category -->
<div style="margin: 0px 0px 8px 0px;">
  <label class="TTCommons-Regular-16" for="name">Category</label>
</div>
<div>
  <select required class="form" value={selected} on:change="{() => ans = ''}">
    {#each cat as c}
      <option value={c}>
        {c.text}
      </option>
    {/each}
  </select>
</div>
<br />

<!-- TimeScale -->
<div style="margin: 0px 0px 8px 0px;">
  <label class="TTCommons-Regular-16" for="name">TimeScale</label>
</div>
<div>
    <input
    class="form"
    type="number"
    name="timescale"
    min="1"
    max="10"
    required
  />
</div>
<br />

<!-- Submit button -->
<div class="modal-footer">
  <div></div>
  <button class="primary-button" type="submit">Continue</button>
</div>
</form>

<style>
    .date-time-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }
  
    .form {
      width: 100%;
      background-color: #E2E8F0;
      border-radius: 4px;
      font-family: Arial;
      padding: 12px 16px;
      border: 1px solid #E2E8F0;
      box-sizing: border-box;
      transition: 0.5s;
      outline: none;
    }
  
    .modal-footer {
      background-position: right;
      border-top: none;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      display: flex;
      align-items: right;
      justify-content: space-between;
    }
  
    .primary-button {
      background-color: #0A5BD0;
      cursor: pointer;
      font-family: Arial;
      font-weight: 600;
      border-radius: 5px;
      box-shadow: none;
      color: #F8FAFC;
      line-height: 20px;
      height: 44px;
      border: 1px solid transparent;
      padding: 0.375rem 0.75rem;
      font-size: 14px;
      text-align: center;
      vertical-align: middle;
      display: inline-block;
    }
  
    .TTCommons-Regular-16 {
      font-family: Arial;
      font-size: 16px;
      color: black;
      letter-spacing: -.04em;
    }
  </style>
  

  