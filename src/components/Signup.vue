<template>
  <div id="signupForm">
    <h3>Sign Up</h3>
    <form action="#" method="post">
      <input
        placeholder="Email.."
        type="email"
        name="email-input"
        required
        id="emailInput"
      />
      <input
        placeholder="Password.."
        type="password"
        name="password-input"
        required
        id="passwordInput"
      />
      <button type="button">Sign up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Signup",
};
</script>

<style scoped>
#signupForm {
  display: inline-block;
  border: 1px solid black;
  border-radius: 10px;
  padding: 1rem;
}
form input {
  display: block;
  height: 2rem;
  margin: 1rem 0;
}

button {
  width: 5rem;
  height: 2rem;
}
</style>
