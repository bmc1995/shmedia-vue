<template>
  <div id="profileContainer">
    <UserCard
      :userName="username"
      :bio="bio"
      :profilePicSrc="profilePic_url"
      :displayName="displayName"
    />
    <ProfilePosts />
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
  data() {
    return {
      profile: undefined,
    };
  },
  computed: {
    username() {
      return this.profile?.username;
    },
    bio() {
      return this.profile?.bio;
    },
    profilePic_url() {
      return this.profile?.profilePic_url;
    },
    displayName() {
      return this.profile
        ? `${this.profile.first_name} ${this.profile.last_name}`
        : undefined;
    },
  },
  created() {
    this.getProfileInfo(this.authState.idToken.claims.sub);
  },
  methods: {
    async getProfileInfo(okta_uid) {
      const response = await fetch(`http://localhost:3000/users/${okta_uid}`);
      const result = await response.json();
      console.log(result.result);
      return (this.profile = result.result);
    },
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
