<template>
  <div id="HomeContainer">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- <Profile /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import Profile from "@/components/Profile.vue";

export default {
  name: "Home",
  components: {
    // Profile,
    HelloWorld,
  },
};
</script>

<style scoped>
#HomeContainer {
  /* display: flex; */
  justify-content: center;
  /* align-items: center; */
  /* flex-direction: column; */
}
</style>
