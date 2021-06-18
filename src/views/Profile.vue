<template>
  <div id="profileContainer">
    <UserCard /> <ProfilePosts />
    <!-- <button @click="userTestReq">userTestReq</button> -->
  </div>
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
  // methods: {
  //   async userTestReq() {
  //     let token = await this.$auth.getAccessToken();

  //     let a = await fetch(`http://localhost:3000/users/cracky`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }).then((res) => {
  //       return res.json();
  //     });

  //     console.log(a);
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
