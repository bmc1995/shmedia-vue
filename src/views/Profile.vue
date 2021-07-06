<template>
  <div id="profileContainer">
    <UserCard
      :userName="username"
      :bio="bio"
      :profilePicSrc="profilePic_url"
      :displayName="displayName"
      :counts="counts"
    />
    <ProfilePosts :imgArr="imgArr" />
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
      imgArr: undefined,
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
    counts() {
      return {
        followers: this.profile?.followers.current.length,
        following: this.profile?.following.length,
        posts: this.imgArr?.length,
      };
    },
  },
  async beforeRouteUpdate(to) {
    this.profile = await this.getProfileInfo(to.params.username);
  },
  created() {
    this.getProfileInfo(this.$route.params.username);
  },
  methods: {
    async getProfileInfo(username) {
      const response = await fetch(`http://localhost:3000/users/${username}`)
        .then((res) => {
          return res.json();
        })
        .catch((err) => err);
      const result = response.result;
      result ? this.getPosts(result.okta_uid) : null;
      return (this.profile = result);
    },
    async getPosts(okta_uid) {
      const response = await fetch("http://localhost:3000/posts/byUsers", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userIdArr: [okta_uid] }),
      });
      let posts = await response.json();
      return (this.imgArr = posts);
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
