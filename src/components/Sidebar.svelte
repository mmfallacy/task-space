<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function toggleModal() {
    dispatch("toggleModal");
  }
</script>

<aside class="sidebar">
  <div class="sidebar-header">
    <button class="plus" on:click="{toggleModal}">
      <div class="plusbutton" />
    </button>

          <button class="line" style="width: 50px;" />

          <button class="not-selected">
              <div class="homebutton" />
          </button>

          <button class="selected">
              <div class="taskbutton" />
          </button>
    </div>
  </aside>
  
  <style>
    .sidebar {
      position: absolute;
      background: white;
      height: calc(100vh - 68px);
      width: 64px;
      min-width: 64px;
      box-shadow: 0px 25px 50px -12px rgba(0,0,0,.1);
      margin: 20px -8px;
      padding: 0px;
    }
  
    .sidebar-header {
      padding: 0px 0px 0px 5px;
      border-bottom: none;
    }
  
    .plus {
      cursor: pointer;
      background: #156EF0;
      border-radius: 8px;
      border: none;
    }
  
    .plusbutton {
        background-image: url('icons/PlusButton.png');

        background-repeat: no-repeat;
        background-position: center;
        background-size: 24px;
        margin: 10px;
        padding: 10px;

        border: none;
    }

    .homebutton {
        background-image: url('icons/HomeButton.png');

        background-repeat: no-repeat;
        background-position: center;
        background-size: 24px;
        margin: 10px;
        padding: 10px;

        border: none;
    }

    .taskbutton {
        background-image: url('icons/TaskButton.png');

        background-repeat: no-repeat;
        background-position: center;
        background-size: 24px;
        margin: 10px;
        padding: 10px;

        border: none;
    }

    .line {
        cursor: pointer;

        background: E2E8F0;
        border-radius: 8px;
        border: none;
    }

    .selected {
        cursor: pointer;

        background: #156ef0;
        border-radius: 8px;
        border: none;
    }

    .not-selected {
        cursor: pointer;

        background: white;
        border-radius: 8px;
        border: none;
    }
  </style>
  