<!-- <button class="followbtn">Follow</button>
    <button class="morebtn"><i class="fas fa-caret-down"></i></button> -->
<template>
  <div id="container">
    <img
      class="profile-img"
      src="../../testImages/best-portrait-photographers-in-detroit-1080x600.jpg"
      alt="Test profile iamge"
    />
    <div class="user-info">
      <div class="stats">
        <strong>Billy M</strong>
        <button>FOLLOW</button>
      </div>
      <span class="bio"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugiat
        officia provident deleniti laudantium. Odit ratione ducimus dicta earum,
        cumque ipsa nam aliquid, quia quo nisi, sit distinctio dolores
        officia?</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
};
</script>

<style scoped>
img {
  width: 150px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
}
</style>
