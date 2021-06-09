<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <UserCard />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import UserCard from "@/components/UserCard.vue";

export default {
  name: "Home",
  components: {
    UserCard,
  },
};
</script>

<style scoped>
/* .home {
  max-width: min-content;
} */
</style>
