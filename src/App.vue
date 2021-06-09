<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style>
body {
  margin: auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
