<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>you are logged in as {{ pref_name }}</p>
  </div>
</template>

<script>
export default {
  name: "About",
  computed: {
    pref_name() {
      return this.$data.authState.idToken.claims.preferred_username;
    },
  },
};
</script>
