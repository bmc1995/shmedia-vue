<template>
  <h1>Explore Media</h1>
  <div id="mediaGrid">
    <div class="imgContainer" v-for="(media, index) in mediaArr" :key="index">
      <img
        draggable="false"
        :key="media.media_url"
        :src="media.media_url"
        alt="image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ExploreMedia",
  props: {
    mediaArr: {
      type: Array,
      default: new Array(),
    },
  },
  // components: {

  // },
};
</script>

<style scoped>
#mediaGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  row-gap: 20px;
  justify-items: center;
  max-width: 1000px;
  margin: auto;
  padding: 2rem 0rem;
}
img {
  max-width: 250px;
  max-height: 250px;
  margin: auto;
  user-select: none;
}
video {
  max-width: 250px;
  max-height: 250px;
  margin: auto;
  user-select: none;
}
.imgContainer {
  margin: auto;
  width: 250px;
  height: 250px;
  display: flex;
  outline: auto;
}
.imgContainer:hover {
  box-shadow: 2px 2px 15px 7px black;
}
</style>
