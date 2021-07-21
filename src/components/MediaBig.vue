<template>
  <div v-if="mediaType == 'Image'" class="imageContainer">
    <img
      draggable="false"
      :src="media_url"
      alt="an image posted by: {{postedBy}}"
    />
  </div>
  <div v-if="mediaType == 'Video'" class="VideoContainer">
    <video
      draggable="false"
      :src="media_url"
      alt="a video posted by: {{postedBy}}"
    />
  </div>
</template>
<script>
export default {
  name: "MediaBig",
  props: {
    media_url: {
      type: String,
      default: "../testImages/question-mark.png",
    },
    mediaType: {
      type: String,
      default: "Image",
    },
    postedBy: {
      type: String,
      default: "a user",
    },
  },
};
</script>
<style scoped>
img {
  max-width: 50vw;
  max-height: 50vh;
  margin: auto;
  user-select: none;
}
video {
  max-width: 250px;
  max-height: 250px;
  margin: auto;
  user-select: none;
}
.imageContainer {
  margin: 2rem auto;
  width: 75vw;
  height: 75vh;
  display: flex;
  outline: auto;
}
</style>
