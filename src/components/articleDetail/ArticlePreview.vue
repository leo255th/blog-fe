<template>
  <div class="article-preview">
    {{ article.title }}
    <div class="ql-editor-preview">
      <div v-html="article.content"></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
// import { quillEditor } from "vue-quill-editor";
export default {
  created() {
    const articleId = +this.$route.params.articleId;
    this.getArticleDetail(articleId).then((res) => {
      if (res) {
        this.article = res;
        console.log("获取到的文章内容是");
      }
    });
  },
  props: {
    // article: {
    //   id: Number,
    //   userId: Number,
    //   titile: String,
    //   description: String,
    //   content: String,
    //   field: String,
    //   tags: [String],
    //   createdAt: Date,
    // },
  },
  data() {
    return {
      article: {},
    };
  },
  computed: {},
  components: {},
  methods: {
    ...mapActions("articles", {
      getArticleDetail: "getArticleDetail",
    }),
  },
};
</script>

<style lang="less" scoped>
</style>