<template>
  <h1>{{ msg }}</h1>
  <p v-if="authState.idToken">Hello, {{ authState.idToken.claims.name }}</p>
  <p v-if="!authState.idToken">Hello, please log in!</p>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
