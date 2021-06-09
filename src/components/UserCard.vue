<!-- <button class="followbtn">Follow</button>
    <button class="morebtn"><i class="fas fa-caret-down"></i></button> -->
<template>
  <div id="container">
    <div class="profile-img">
      <img
        class="profile-img"
        src="../../testImages/best-portrait-photographers-in-detroit-1080x600.jpg"
        alt="Test profile iamge"
      />
    </div>
    <div class="profile-options">
      <span class="username"><strong>@billymccrackin</strong></span>
      <button class="followBtn">Follow</button>
      <button class="optionsBtn">...</button>
    </div>
    <div class="profile-bio">
      <strong class="goes-by">Billy McCrackin</strong>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloremque
        itaque, nam veritatis, error velit necessitatib
      </p>
    </div>
    <div class="profile-stats">
      <span class="postsCount"><strong>Posts: </strong>22</span>
      <span>|</span>
      <span class="followingCount"><strong>Following: </strong>56</span>
      <span>|</span>
      <span class="followersCount"><strong>Followers: </strong>10</span>
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
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
}

#container {
  /* border: 1px solid black; */
  max-width: 100%;
  display: grid;
  grid-template-columns: max-content auto auto;
  grid-template-rows: auto auto auto;
}

.profile-img {
  /* border-top: 1px solid black; */
  border-right: 1px solid black;
  grid-row-start: 1;
  grid-row-end: 3;
}

.profile-options {
  /* border-top: 1px solid black; */
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  /* align-self: center; */
}
.username {
  display: block;
  text-align: center;
}

.profile-bio {
  text-align: left;
  border-right: 1px solid black;
  grid-column-start: 2;
}

.profile-stats {
  display: flex;
  justify-content: space-evenly;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  grid-column-start: 1;
  grid-column-end: 3;
}
</style>
