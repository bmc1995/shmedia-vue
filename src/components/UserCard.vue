<!-- <button class="followbtn">Follow</button>
    <button class="morebtn"><i class="fas fa-caret-down"></i></button> -->
<template>
  <div id="container">
    <div class="profile-img">
      <img
        class="profile-img"
        :src="profilePicSrc"
        @click="goToProfile(userName)"
        alt="Test profile iamge"
      />
    </div>
    <div class="profile-options">
      <span class="username"
        ><strong>{{ userName }}</strong></span
      >
      <button
        v-if="userName !== authState.idToken.claims.name"
        class="followBtn"
      >
        Follow
      </button>
      <button
        v-if="userName == authState.idToken.claims.name"
        @click="openSettings"
        class="optionsBtn"
      >
        Edit Profile
      </button>
    </div>
    <div class="profile-bio">
      <strong class="goes-by">{{ displayName }}</strong>
      <p>
        {{ bio }}
      </p>
    </div>
    <div v-if="!exploreCard" class="profile-stats">
      <span class="postsCount"><strong>Posts:</strong> {{ counts.posts }}</span>
      <span>|</span>
      <span class="followingCount"
        ><strong>Following:</strong> {{ counts.following }}</span
      >
      <span>|</span>
      <span class="followersCount"
        ><strong>Followers:</strong> {{ counts.followers }}</span
      >
    </div>
  </div>
</template>

<script>
//dev default
import defaultPic from "../../testImages/question-mark.png";
export default {
  name: "UserCard",
  emits: ["toggle-settings"],
  props: {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    displayName: {
      type: String,
      default: "...",
    },
    userName: {
      type: String,
      default: "...",
    },
    bio: {
      type: String,
      default: "Loading...",
    },
    profilePicSrc: {
      type: String,
      default: defaultPic,
    },
    counts: {
      type: Object,
      default: Object.create({ posts: 0, following: 0, followers: 0 }),
    },
    exploreCard: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    async sendFollowReq() {
      //send follow req to shmedia api with auth token.  Get userId using okta id from okta (inside mongodb user store)
    },
    goToProfile(username) {
      if (this.exploreCard) {
        return this.$router.push({
          name: "Profile",
          params: { username },
        });
      }
    },
    openSettings() {
      this.$emit("toggle-settings");
    },
  },
};
</script>

<style scoped>
img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
}

#container {
  /* border: 1px solid black; */
  max-width: 100%;
  display: grid;
  grid-template-columns: max-content auto auto;
  grid-template-rows: auto auto auto;
}

.profile-img {
  /* border-top: 1px solid black; */
  /* border-right: 1px solid black; */
  grid-row-start: 1;
  grid-row-end: 3;
}

@media only screen and (max-width: 425px) {
  .profile-img {
    width: 125px;
    height: 125px;
    margin: auto;
  }
}

.profile-options {
  /* border-top: 1px solid black; */
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  /* align-self: center; */
  grid-column-start: 2;
  grid-column-end: 4;
}
.username {
  display: block;
  text-align: center;
}

.profile-bio {
  text-align: left;
  word-break: break-word;
  border-right: 1px solid black;
  grid-column-start: 2;
  grid-column-end: 4;
}

.profile-stats {
  display: flex;
  justify-content: space-evenly;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  grid-column-start: 1;
  grid-column-end: 4;
}
</style>
