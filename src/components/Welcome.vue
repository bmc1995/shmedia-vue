<template>
  <h1>{{ msg }}</h1>
  <p>Hello, {{ authState.idToken.claims.name }}</p>
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
