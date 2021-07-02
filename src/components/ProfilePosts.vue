<template>
  <div id="postsContainer">
    <div class="imgContainer" v-for="(image, index) in imgArr" :key="index">
      <img
        draggable="false"
        :key="image.media_url"
        :src="image.media_url"
        alt="image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePosts",

  data() {
    return {
      imgArr: [],
    };
  },
  created() {
    this.getImages(this.authState.idToken.claims.sub);
  },
  methods: {
    async getImages(okta_uid) {
      const response = await fetch("http://localhost:3000/posts/byUsers", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userIdArr: [okta_uid] }),
      });
      let a = await response.json();
      return (this.$data.imgArr = a);
    },
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
  padding: 2rem 0rem;
}

img {
  max-width: 100%;
  max-height: 100%;
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
