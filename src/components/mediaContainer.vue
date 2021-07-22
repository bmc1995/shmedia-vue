<template>
  <div id="container">
    <div id="mediaContainer">
      <MediaBig
        :media_url="media_url"
        :postedBy="postedBy"
        :mediaType="mediaType"
        :caption="caption"
      />
    </div>
    <div id="commentsContainer">
      <Comment
        v-for="comment in comments"
        :key="comment._id"
        :postedBy="comment.user"
        :message="comment.message"
        :postedDate="comment.date"
      />
    </div>
  </div>
</template>
<script>
import MediaBig from "./MediaBig.vue";
import Comment from "./comment.vue";

export default {
  name: "MediaContainer",
  props: {
    media_url: {
      type: String,
    },
    mediaType: {
      type: String,
    },
    postedBy: {
      type: String,
    },
    comments: {
      type: Array,
      default: () => {
        return [
          {
            _id: "12312jgh1yhbli",
            message: "this is a default comment",
            postedDate: "1/27/21",
          },
          {
            _id: "12312jgh1yhbli",
            message: "this is a default comment",
            postedDate: "1/27/21",
          },
          {
            _id: "12312jgh1yhbli",
            message: "this is a default comment",
            postedDate: "1/27/21",
          },
          {
            _id: "12312jgh1yhbli",
            message: "this is a default comment",
            postedDate: "1/27/21",
          },
          {
            _id: "12312jgh1yhbli",
            message: "this is a default comment",
            postedDate: "1/27/21",
          },
        ];
      },
    },
    caption: {
      type: String,
    },
  },
  components: { MediaBig, Comment },
};
</script>
<style scoped></style>
