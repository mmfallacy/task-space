<script>
    import { onMount } from 'svelte';
  
    let showMenu = false;
    let menu;
  
    const handleClickOutside = (event) => {
      if (menu && !menu.contains(event.target)) {
        showMenu = false;
      }
    };
  
    onMount(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    });
  </script>
 
  <div class="kebab-menu" bind:this="{menu}">
    <div class="dropdown" on:click="{() => (showMenu = !showMenu)}">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul class="dropdown-menu {showMenu ? 'show' : ''}">
      <li>Action 1</li>
      <li>Action 2</li>
      <li>Action 3</li>
    </ul>
  </div>
  
  <style>
    .kebab-menu {
      position: relative;
      display: inline-block;
      cursor: pointer;
    }
  
    .kebab-menu__icon {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 24px;
      height: 24px;
    }

    .dropdown {
        background-image: url('/icons/Dropdown.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 24px;
        margin: 10px;
        padding: 10px;

        border: none;
        cursor: pointer;
    }
  
    .kebab-menu__icon span {
      width: 100%;
      height: 2px;
      background-color: #333;
    }
  
    .dropdown-menu {
      display: none;
      position: absolute;
      right: 0;
      background-color: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      min-width: 160px;
      padding: 8px 0;
      z-index: 1;
      
      font-family: Arial;
      font-size: 16px;
    }
  
    .dropdown-menu.show {
      display: block;
    }
  
    .dropdown-menu li {
      list-style: none;
      padding: 8px 16px;
    }
  
    .dropdown-menu li:hover {
      background-color: #f1f1f1;
    }
  </style>
  

  