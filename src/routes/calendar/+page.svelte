<script lang="ts">
    import CalendarView from '@/components/CalendarView.svelte';
</script>

<div>
    <div class="navbar" />
    <div class="sidebar" />
    <main class="content">
        <section class="controls">
            <h3>Calendar</h3>
            <CalendarView />
        </section>
    </main>
</div>

<style>
    .navbar {
        background: #156ef0;
        width: 100dvw;
        height: 24px;
    }

    .sidebar {
        background: white;
        width: 64px;
        box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.1);

        margin: 10px -8px;
        padding: 0px;
    }

    .content {
        padding-left: 64px;
    }
</style>
