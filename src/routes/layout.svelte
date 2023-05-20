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
        grid-template-rows: 36px calc(100% - 56px);
        grid-template-columns: 56px calc(100% - 56px);

        height: 100%;
        width: 100%;

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
        position: relative;
        z-index: 2000;
        background: white;
        box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.1);
    }
    .content {
        height: 100%;
        width: 100%;
        background: #f8fafc;
    }
</style>
