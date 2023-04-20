<script>
    let email = '';
    let password = '';
    let isLoggedIn = false;

    const handleLogin = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user.email === email && user.password === password) {
            isLoggedIn = true;
        }
    };
  </script>

  {#if isLoggedIn}
    <p>Welcome back!</p>
  {:else}
    <form on:submit|preventDefault={handleLogin}>
      <label>
        Email:
        <input type="email" bind:value={email} />
      </label>
      <label>
        Password:
        <input type="password" bind:value={password} />
      </label>
      <button type="submit">Log In</button>
    </form>
  {/if}
