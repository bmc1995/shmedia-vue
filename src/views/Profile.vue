<template>
  <div id="profileContainer"><UserCard /> <ProfilePosts /></div>
</template>

<script>
import UserCard from "../components/UserCard.vue";
import ProfilePosts from "../components/ProfilePosts.vue";

export default {
  name: "Profile",
  components: {
    UserCard,
    ProfilePosts,
  },
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
