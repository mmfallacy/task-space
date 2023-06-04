<script>
    import { currentUser } from '@/stores/currentUser';
    import { goto } from '$app/navigation';

    function logout() {
        currentUser.update((_) => null);
        goto('/');
    }
</script>

<div class="navbar">
    <button on:click={logout}>Logout?</button>
    Hello, {$currentUser}!
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
    button {
        background: none;
        border: none;
        font-family: Arial;
        color: white;
        font-size: 14px;
        margin-left: 4px;
        text-decoration: underline;
        cursor: pointer;
    }
    button:hover {
        color: rgba(255, 255, 255, 0.75);
    }
</style>
