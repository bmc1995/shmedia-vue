<template>
  <h1>Explore page</h1>

  <div id="exploreContainer">
    <ExploreProfiles v-if="profileFilterOn" />
    <ExploreMedia v-if="!profileFilterOn" />
  </div>
  <!-- <pre>data.profiles = {{ profiles }}</pre>
  <pre>data.media = {{ media }}</pre>
  <pre>data.profileFilter = {{ profileFilterOn }}</pre> -->
</template>

<script>
// TODO add filter toggle. maybe menu instead? media, profiles, following, followers
import ExploreMedia from "../components/ExploreMedia.vue";
import ExploreProfiles from "../components/ExploreProfiles.vue";
export default {
  name: "Explore",
  components: { ExploreProfiles, ExploreMedia },
  data() {
    return {
      profiles: [],
      media: [],
      profileFilterOn: false,
    };
  },
  created() {
    this.profileFilterOn ? this.getProfiles() : this.getMedia();
  },
  methods: {
    async getProfiles() {
      //gets all profiles
      console.log("getProfiles called");
    },

    async getMedia() {
      //gets all media
      console.log("getMedia called");
      const response = await fetch("http://localhost:3000/posts/explore").catch(
        (err) => {
          console.log(err);
        }
      );
      return await response.json();
    },
  },
};
</script>

<style scoped>
#exploreContainer {
  border: 1px solid black;
}

#toggleFilter {
}
</style>
