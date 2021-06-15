<template>
  <div id="postsContainer">
    <img
      v-for="image in imgArr"
      :key="image.src"
      :src="image.src"
      alt="image"
    />
  </div>
</template>

<script>
export default {
  name: "ProfilePosts",

  data() {
    return {
      imgArr: [
        {
          src: "https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666__480.jpg",
        },
        {
          src: "https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666__480.jpg",
        },
        {
          src: "https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666__480.jpg",
        },
        {
          src: "https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666__480.jpg",
        },
        {
          src: "https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666__480.jpg",
        },
        {
          src: "https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666__480.jpg",
        },
        {
          src: "https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666__480.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
#postsContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  row-gap: 20px;
  justify-items: center;
  max-width: 1000px;
  margin: auto;
}

img {
  max-width: 300px;
  max-height: 300px;
  /* padding-bottom: 1rem; */
}
</style>
