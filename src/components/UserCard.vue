<!-- <button class="followbtn">Follow</button>
    <button class="morebtn"><i class="fas fa-caret-down"></i></button> -->
<template>
  <div id="container">
    <div class="profile-img">
      <img class="profile-img" :src="profilePicSrc" alt="Test profile iamge" />
    </div>
    <div class="profile-options">
      <span class="username"
        ><strong>{{ userName }}</strong></span
      >
      <button class="followBtn">Follow</button>
      <button class="optionsBtn">...</button>
    </div>
    <div class="profile-bio">
      <strong class="goes-by">{{ displayName }}</strong>
      <p>
        {{ bio }}
      </p>
    </div>
    <div class="profile-stats">
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
import defaultPic from "../../testImages/best-portrait-photographers-in-detroit-1080x600.jpg";
export default {
  name: "UserCard",
  props: {
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
  },
  methods: {
    async sendFollowReq() {
      //send follow req to shmedia api with auth token.  Get userId using okta id from okta (inside mongodb user store)
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
