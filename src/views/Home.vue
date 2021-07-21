<template>
  <div id="HomeContainer">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Welcome msg="Welcome to Shmedia" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Welcome from "@/components/Welcome.vue";
// import Profile from "@/components/Profile.vue";

export default {
  name: "Home",
  components: {
    // Profile,
    // HelloWorld,
    Welcome,
  },
  data() {
    return { claims: "" };
  },
  created() {
    this.setup();
  },
  methods: {
    async setup() {
      if (this.authState.isAuthenticated) {
        console.log(this.authState);
        this.$data.claims = await this.$auth.getUser();
      }
    },
    login() {
      this.$auth.signInWithRedirect("/");
    },
  },
};
</script>

<style scoped>
/* #HomeContainer { */
/* display: flex; */
/* justify-content: center; */
/* align-items: center; */
/* flex-direction: column; */
/* } */
</style>
