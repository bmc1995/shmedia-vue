<template>
  <div id="profileContainer"><UserCard /> <ProfilePosts /></div>
  <!-- <pre>{{ token }}</pre> -->
</template>

<script>
import UserCard from "../components/UserCard.vue";
import ProfilePosts from "../components/ProfilePosts.vue";

export default {
  name: "Profile",
  // inject: ["Auth"],
  components: {
    UserCard,
    ProfilePosts,
  },
  // computed: {
  //   token() {
  //     console.log(this.Auth.getIdTokenClaims());
  //     return this.Auth.getIdTokenClaims();
  //   },
  // },
};
</script>

<style scoped>
#profileContainer {
  max-width: 1440px;
  /* display: grid; */
  border: 1px solid black;
  margin: auto;
}
</style>
