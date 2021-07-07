<template>
  <h1>User Settings</h1>
  <form name="userSettingsForm">
    <input type="file" name="profilePic" id="profilePicInput" />
    <input
      type="text"
      placeholder="first_name..."
      name="first_name"
      id="firstNameInput"
    />
    <input
      type="text"
      placeholder="last name..."
      name="last_name"
      id="lastNameInput"
    />
    <input
      type="text"
      placeholder="username..."
      name="username"
      id="usernameInput"
    />
    <textarea
      type="text"
      rows="5"
      placeholder="Bio.."
      name="bio"
      id="bioInput"
    />
  </form>
</template>
<script>
export default {
  name: "UserSettings",
  props: {
    profilePic: String,
    bio: String,
    first_name: String,
    last_name: String,
    username: String,
  },
};
</script>

<style scoped>
form {
  outline: auto;
  display: inline-block;
}
input {
  display: block;
  margin: 2em auto;
}

form textarea {
  resize: none;
}
</style>
