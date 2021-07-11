<template>
  <h1>Explore profiles</h1>
  <div id="profilesContainer">
    <exploreProfileCard />
  </div>
</template>
<script>
import ExploreProfileCard from "./ExploreProfileCard.vue";

export default {
  name: "ExploreProfiles",
  components: {
    ExploreProfileCard,
  },
  props: {
    profiles: {
      type: Array,
      required: true,
    },
  },
};
</script>
