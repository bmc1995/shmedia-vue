<template>
  <div id="container">
    <span class="username">{{ postedBy }}</span>
    <div class="message">
      <p>{{ message }}</p>
    </div>
    <span class="date">{{ postedDate }}</span>
  </div>
</template>
<script>
export default {
  name: "Comment",
  props: {
    postedBy: {
      type: String,
    },
    postedDate: {
      type: String,
    },
    message: {
      type: String,
    },
  },
};
</script>
<style scoped></style>
