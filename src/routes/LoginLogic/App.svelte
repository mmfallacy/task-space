<script>
    import SignUp from './SignUp.svelte';
    import Login from './Login.svelte';
    import { count } from './store.js';
    count.useLocalStorage();

    let isLoggedIn = false;

    const handleLogout = () => {
        isLoggedIn = false;
    };

    const user = localStorage.getItem('user');
    if (user) {
        isLoggedIn = true;
    }
</script>

{#if isLoggedIn}
    <button on:click={handleLogout}>Log Out</button>
{:else}
    <SignUp />
    <Login />
{/if}
