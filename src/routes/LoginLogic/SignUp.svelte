<script>
    let name = '';
    let email = '';
    let password = '';
  
    const handleSubmit = () => {
      const user = {
        name,
        email,
        password
      };
      localStorage.setItem('user', JSON.stringify(user));
    };
  </script>
  
  <form on:submit|preventDefault={handleSubmit}>
    <label>
      Name:
      <input type="text" bind:value={name} />
    </label>
    <label>
      Email:
      <input type="email" bind:value={email} />
    </label>
    <label>
      Password:
      <input type="password" bind:value={password} />
    </label>
    <button type="submit">Sign Up</button>
  </form>
  