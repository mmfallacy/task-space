<script>
    import { notifications } from '@/stores/notifications.js';
    import Toasts from '@/components/Toasts.svelte';
</script>

<button on:click={() => notifications.email('Invalid Credentials!', 3000)}>
    Email
</button>
<button on:click={() => notifications.password('Invalid Credentials!', 3000)}>
    Password
</button>
<button
    on:click={() => notifications.registered('Email already registered!', 3000)}
>
    Registered
</button>
<Toasts />
