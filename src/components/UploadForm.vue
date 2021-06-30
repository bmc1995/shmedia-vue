<template>
  <div id="formContainer">
    <form id="uploadForm">
      <input
        type="file"
        name="uploadField"
        id="uploadField"
        @change="onFileChange"
        accept=".jpeg, .jpg, .png, .gif, .mp4"
      />
      <img
        v-if="previewMediaUrl"
        :src="previewMediaUrl"
        alt="Preview of your upload"
      />
      <textarea
        name="caption"
        id="caption"
        maxlength="200"
        v-model="caption"
        placeholder="We take captions here too!"
      ></textarea>
      <button @click="onSubmit">Upload</button>
    </form>
    <div id="preview"></div>
  </div>
</template>

<script>
export default {
  name: "UploadForm",
  data() {
    return {
      previewMediaUrl: null,
      file: null,
      caption: null,
    };
  },
  methods: {
    onFileChange(e) {
      this.$data.file = e.target.files[0];
      this.previewMediaUrl = URL.createObjectURL(this.$data.file);
    },
    onSubmit(e) {
      e.preventDefault();
      console.log({ file: this.file, caption: this.caption });
    },
  },
};
</script>

<style scoped>
textarea {
  resize: none;
  width: 75vw;
  max-width: 500px;
}

#formContainer {
  /* max-width: 1440px; */
  border: 1px solid black;
}
#uploadForm {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}

#uploadForm * {
  margin: 1rem 0;
}
img {
  border: 1px solid black;
  max-width: 25rem;
  max-height: 25rem;
}
</style>
