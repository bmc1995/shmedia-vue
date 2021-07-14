<template>
  <h1>Explore profiles</h1>
  <div id="profilesContainer">
    <UserCard
      id="userCard"
      v-for="(profile, index) in profiles"
      :key="index"
      :bio="profile.bio || '...'"
      :displayName="`${profile.first_name} ${profile.last_name}`"
      :userName="profile.username"
      :profilePicSrc="profile.profilePic_url"
      :exploreCard="true"
    />
  </div>
</template>
<script>
import UserCard from "./UserCard.vue";

export default {
  name: "ExploreProfiles",
  components: {
    UserCard,
  },
  props: {
    profiles: {
      type: Array,
      default: new Array(),
    },
  },
};
</script>
<style scoped>
#profilesContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  row-gap: 5px;
  justify-items: center;
  max-width: 1200px;
  margin: auto;
  padding: 2rem 0rem;
}

#userCard {
  min-width: 200px;
  margin: 2rem auto;
  outline: auto;
}
</style>
