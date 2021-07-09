<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>you are logged in as {{ authState.idToken.claims.name }}</p>
    <!-- <p>{{ authState.isAuthenticated }}</p> -->
    <button @click="clickit">click me</button>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    clickit() {
      console.log(this.$auth);
    },
  },
};
</script>
