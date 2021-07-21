<template>
  <select id="selectFilter" v-model="selected">
    <option
      id="profilesOption"
      :key="filter"
      v-for="filter in filters"
      :value="filter"
    >
      {{ filter }}
    </option>
  </select>
  <div id="exploreContainer">
    <ExploreProfiles v-if="selected == 'Profiles'" :profiles="profiles" />
    <ExploreMedia v-if="selected == 'Media'" :mediaArr="media" />
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
      selected: "Profiles",
      filters: ["Profiles", "Media"],
    };
  },
  created() {
    this.selected == "Profiles" ? this.getProfiles() : this.getMedia();
  },
  watch: {
    selected: function (newSelection) {
      if (newSelection == "Profiles" && this.profiles.length < 1) {
        this.getProfiles();
      }

      if (newSelection == "Media" && this.media.length < 1) {
        this.getMedia();
      }
    },
  },
  methods: {
    async getProfiles() {
      //gets all profiles
      console.log("getProfiles called");
      const response = await fetch(
        "http://localhost:3000/users/explore/profiles"
      ).catch((err) => {
        console.log(err);
      });
      let result = await response.json();
      this.profiles = result.result;
    },

    async getMedia() {
      //gets all media
      console.log("getMedia called");
      const response = await fetch("http://localhost:3000/posts/explore").catch(
        (err) => {
          console.log(err);
        }
      );
      this.media = await response.json();
    },
  },
};
</script>

<style scoped>
#exploreContainer {
  border: 1px solid black;
}
</style>
