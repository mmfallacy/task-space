<script lang="ts">
    import Navbar from '@/components/Navbar.svelte';
    import './global.css';
    import Sidebar from '@/components/Sidebar.svelte';
</script>

<main class="grid">
    <div class="navbar">
        <Navbar />
    </div>
    <div class="sidebar">
        <Sidebar />
    </div>
    <div class="content">
        <slot />
    </div>
</main>

<style>
    .grid {
        display: grid;
        grid-template-rows: 36px auto;
        grid-template-columns: 64px auto;

        height: 100svh;
        width: 100svw;

        font-family: Arial, Helvetica, sans-serif;
        color: #475569;
    }
    .grid .navbar {
        grid-column: span 2;
    }
    .navbar {
        background: blue;
    }
    .sidebar {
        background: white;
        box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.1);
    }
    .content {
        overflow: hidden;
    }
</style>
