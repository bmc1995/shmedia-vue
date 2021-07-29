<template>
  <div v-if="mediaType == 'Image'" class="imageContainer">
    <img
      draggable="false"
      :src="media_url"
      alt="an image posted by: {{postedBy}}"
    />
  </div>
  <div class="captionContainer">
    <span>{{ caption }}</span>
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
    caption: {
      type: String,
      default: "",
    },
  },
};
</script>
<style scoped>
img {
  max-width: 500px;
  max-height: 500px;
  margin: auto;
  user-select: none;
  padding: 10px;
}
video {
  max-width: 250px;
  max-height: 250px;
  margin: auto;
  user-select: none;
}
.captionContainer {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-radius: 20px;
  padding: 5px;
  text-align: left;
}
.imageContainer {
  margin: 0 auto;
  max-width: 525px;
  max-height: 525px;
  outline: auto;
}

@media only screen and (max-width: 500px) {
  img {
    max-width: 100%;
    max-height: 100%;
    padding: 10px 0px;
  }
  video {
    max-width: 90vw;
    max-height: 90vh;
  }

  .imageContainer {
    /* margin: 2rem auto; */
    /* max-width: 90vw; */
    /* max-height: 90vh; */
    width: auto;
    height: auto;
  }
}
</style>
