<template>
  <div id="imageViewerContainer" v-show="showImageViewer">
    <div class="imgButtons">
      <span title="Delete">&#128465;</span>
      <span title="Edit Caption">&#9998;</span>
      <span @click="toggleViewer" title="Close">x</span>
    </div>
    <MediaContainer
      :media_url="viewerSrc"
      :mediaType="'Image'"
      :postedBy="username"
      :caption="caption"
    />
  </div>
  <div v-show="!showImageViewer" id="profileContainer">
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
    <ProfilePosts
      v-show="!settingsOpen"
      :imgArr="imgArr"
      @image-clicked="toggleViewer"
    />
  </div>
</template>

<script>
import UserCard from "../components/UserCard.vue";
import ProfilePosts from "../components/ProfilePosts.vue";
import UserSettings from "../components/UserSettings.vue";
import MediaContainer from "../components/mediaContainer.vue";
import * as ENV from "../../env";

export default {
  name: "Profile",
  components: {
    UserCard,
    ProfilePosts,
    UserSettings,
    MediaContainer,
  },
  data() {
    return {
      profile: undefined,
      imgArr: undefined,
      settingsOpen: false,
      showImageViewer: false,
      viewerSrc: undefined,
      caption: undefined,
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
      const response = await fetch(
        `http://${ENV.resourceURL}/users/find/name/${username}`,
        {
          headers: {
            Authorization: `Bearer ${this.$auth.getAccessToken()}`,
          },
        }
      )
        .then((res) => {
          return res.json();
        })
        .catch((err) => err);
      const result = response.result;
      result ? this.getPosts(result.okta_uid) : null;
      return (this.profile = result);
    },
    async getPosts(okta_uid) {
      const response = await fetch(`http://${ENV.resourceURL}/posts/byUsers`, {
        method: "POST",
        mode: "cors",
        // credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$auth.getAccessToken}`,
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
    toggleViewer(image) {
      this.showImageViewer = !this.showImageViewer;

      if (this.showImageViewer) {
        this.viewerSrc = image.media_url;
        this.caption = image.caption;
      }
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

span {
  border: 1px solid black;
  /* float: right; */
  background: black;
  color: white;
  border-radius: 50px;
  padding: 10px;
  opacity: 50%;
  display: inline-block;
}

span:hover {
  opacity: 100%;
  cursor: pointer;
}
.imgButtons {
  text-align: right;
}
#imageViewerContainer {
  padding: 1px;
  max-width: 1000px;
  margin: auto;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  border-bottom-right-radius: 30px;
}
</style>
