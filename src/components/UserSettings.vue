<template>
  <div id="UserSettingsContainer">
    <h1>Edit Profile</h1>
    <div id="userSettingsForm" name="userSettingsForm">
      <div id="profileImgUpload">
        <img
          v-if="!previewMediaUrl"
          :src="currentProfileImg"
          alt="Current profile picture"
        />
        <img
          v-if="previewMediaUrl"
          :src="previewMediaUrl"
          alt="profile picture to upload"
        />
        <input
          type="file"
          name="profilePic"
          id="profilePicInput"
          @change="onFileChange"
          accept=".jpeg, .jpg, .png"
        />
      </div>
      <div id="profileSettings">
        <label for="first_name"
          >First name:
          <input
            type="text"
            :placeholder="currentFname"
            name="first_name"
            id="firstNameInput"
            v-model="first_name"
          />
        </label>
        <label for="last_name"
          >Last name:
          <input
            type="text"
            :placeholder="currentLname"
            name="last_name"
            id="lastNameInput"
            v-model="last_name"
          />
        </label>
        <label for="username"
          >Username:
          <input
            type="text"
            :placeholder="currentUsername"
            name="username"
            id="usernameInput"
            v-model="username"
          />
        </label>
        <label for="bio">Bio:</label>
        <textarea
          type="text"
          rows="5"
          :placeholder="currentBio"
          name="bio"
          id="bioInput"
          v-model="bio"
        />
      </div>
      <div id="formButtons">
        <button @click="closeSettings">Cancel</button>
        <button @click="onSubmit">Save Changes</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserSettings",
  props: {
    currentProfileImg: String,
    currentBio: String,
    currentFname: String,
    currentLname: String,
    currentUsername: String,
  },
  data() {
    return {
      previewMediaUrl: null,
      image: null,
      bio: null,
      first_name: null,
      last_name: null,
      username: null,
    };
  },
  methods: {
    onFileChange(e) {
      if (e.target.files.length == 0) {
        this.$data.image = null;
        return (this.previewMediaUrl = null);
      }
      this.$data.image = e.target.files[0];
      this.previewMediaUrl = URL.createObjectURL(this.$data.image);
    },
    async upload(fieldData) {
      const formData = new FormData();
      formData.append("profilePic", fieldData.profilePic);
      formData.append("first_name", fieldData.first_name);
      formData.append("last_name", fieldData.last_name);
      formData.append("username", fieldData.username);
      formData.append("bio", fieldData.bio);

      const response = await fetch(
        `http://localhost:3000/users/edit/${this.authState.idToken.claims.sub}`,
        {
          method: "POST",
          body: formData,
        }
      ).catch((err) => {
        console.log(err);
        return err;
      });

      return response;
    },
    async onSubmit() {
      await this.upload({
        profilePic: this.image,
        bio: this.bio,
        first_name: this.first_name,
        last_name: this.last_name,
        username: this.username,
      })
        .then((res) => {
          this.clearSettings();
          this.closeSettings();
          this.refreshInfo();
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
    clearSettings() {
      //if key is authState then skip, otherwise, change value to null
      Object.keys(this.$data).forEach((k) => {
        k == "authState" ? null : (this.$data[k] = null);
      });
    },
    refreshInfo() {
      this.$emit("refresh-info", this.username || this.currentUsername);
    },
    closeSettings() {
      this.$emit("toggle-settings");
    },
  },
  emits: ["toggle-settings", "refresh-info"],
};
</script>

<style scoped>
/* #userSettingsContainer {
  width: 100%;
  height: 100;
  position: fixed;
  background-color: black;
} */

#userSettingsForm {
  outline: auto;
  background: white;
  display: inline-block;
  padding: 25px;
}
/* input {
  display: block;
  margin: 2em auto;
} */

h1 {
  background: rgba(255, 255, 255, 0.747);
  margin: 0 0 15px 0;
}

label {
  font-size: 14px;
}

img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid black;
  margin: auto;
}

form textarea {
  resize: none;
  border-radius: 5px;
  border-color: rgba(0, 0, 0, 0.363);
}

input {
  background: white;
  padding: 5px;
  margin: 2px;
  border-radius: 5px;
  border-color: rgba(0, 0, 0, 0.363);
}
#profileImgUpload {
  display: flex;
  flex-direction: column;
}
#profileSettings {
  display: flex;
  flex-direction: column;
}

#formButtons {
  display: flex;
  justify-content: space-around;
}
</style>
