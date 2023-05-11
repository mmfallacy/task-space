<script>
    import { currentUser } from '@/stores/currentUser';
</script>

<div class="navbar">
    Hello, {$currentUser}
</div>

<style>
    .navbar {
        font-family: Arial;
        background: #156ef0;
        z-index: 1000 !important;
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        padding: 0 15px;
        height: 100%;
        width: 100%;
        font-size: 14px;
        color: white;
    }
</style>
