<template>
  <div id="profileContainer">
    <UserCard
      :userName="username"
      :bio="bio"
      :profilePicSrc="profilePic_url"
      :displayName="displayName"
      :counts="counts"
      v-show="!settingsOpen"
      @toggle-settings="toggleSettings"
    />
    <div id="settingsModal">
      <UserSettings
        @toggle-settings="toggleSettings"
        @refresh-info="refreshInfo"
        v-show="settingsOpen"
        :currentProfileImg="profilePic_url"
        :currentFname="`${displayName?.split(' ')[0]}`"
        :currentLname="`${displayName?.split(' ')[1]}`"
        :currentBio="bio"
        :currentUsername="username"
      />
    </div>
    <ProfilePosts v-show="!settingsOpen" :imgArr="imgArr" />
  </div>
</template>

<script>
import UserCard from "../components/UserCard.vue";
import ProfilePosts from "../components/ProfilePosts.vue";
import UserSettings from "../components/UserSettings.vue";

export default {
  name: "Profile",
  components: {
    UserCard,
    ProfilePosts,
    UserSettings,
  },
  data() {
    return {
      profile: undefined,
      imgArr: undefined,
      settingsOpen: false,
    };
  },
  created() {
    this.getProfileInfo(this.$route.params.username);
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
    refreshInfo(username) {
      this.getProfileInfo(username);
    },
    toggleSettings() {
      this.settingsOpen = !this.settingsOpen;
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
