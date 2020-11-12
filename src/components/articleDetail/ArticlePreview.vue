<template>
  <div class="article-preview">
    <div class="my-header">
      <div class="title my-row">
        <div class="label">标题：</div>
        <div class="my-content">
          {{ article.title }}
        </div>
      </div>
      <div class="field my-row">
        <div class="label">分类：</div>
        <div class="my-content">
          {{ article.field }}
        </div>
      </div>
      <div class="tags my-row">
        <div class="label">关键词:</div>
        <div class="my-content">
          {{ tags }}
        </div>
      </div>
      <div class="description my-row">
        <div class="label">描述：</div>
        <div class="my-content">
          {{ article.description }}
        </div>
      </div>
      <div class="author my-row">
        <div class="label author">作者：</div>
        <div class="my-content author">
          {{ article.userName }}
        </div>
        <div class="label time">创建时间：</div>
        <div class="my-content time">
          {{ time }}
        </div>
      </div>
    </div>
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
  computed: {
    time() {
      return new Date(this.article.createdAt).toLocaleString();
    },
    tags() {
      return this.article.tags.toString();
    },
  },
  components: {},
  methods: {
    ...mapActions("articles", {
      getArticleDetail: "getArticleDetail",
    }),
  },
};
</script>

<style lang="less" scoped>
.article-preview {
  .my-header {
    font-size: 14px;
    color: #909399;
    border-top: 2px solid #dcdfe6;
    border-bottom: 2px solid #dcdfe6;
    padding: 10px 0px 10px 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    .my-row {
      display: flex;
      flex-direction: row;
      width: 100%;
      .label {
        width: 7%;
      }
      .my-content {
        width: 95%;
      }
      .label.author {
        width: 7%;
      }
      .label.time {
        width: 8%;
      }
      .my-content.author {
        width: 15%;
      }
      .my-content.time {
        width: 40%;
      }
    }
  }
}
</style>