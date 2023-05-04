<script>
    import { currentUser } from '@/stores/currentUser';
  
    export let title = '';
    export let fontSize = '14px';
    export let textColor = 'white';
    export let textAlign = 'right';
  </script>
  
  <style>
    .navbar {
      font-family: Arial;
      background: #156EF0;
      z-index: 1000 !important;
      padding: 15px !important;
      margin: -10px !important;
    }
  </style>
  
  <div class="navbar" style="font-size: {fontSize}; color: {textColor}; text-align: {textAlign};">
    {#if title}
      {title}
    {:else}
      Hello, {$currentUser}
    {/if}
  </div>
  