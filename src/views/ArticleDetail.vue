<template>
  <div class="article-detail">
    <div class="container left">
      <div>
        <article-preview></article-preview>
      </div>
      <div>
        <comments></comments>
      </div>
    </div>
    <div class="container right">
      <!-- <div>
        <card-keywords></card-keywords>
      </div> -->
    </div>
  </div>
</template>

<script>
import Comments from "../components/articleDetail/Comments";
import CardKeywords from "../components/articleDetail/CardKeywords";
import ArticlePreview from"../components/articleDetail/ArticlePreview"
export default {
  created() {},
  data() {
    return {};
  },
  computed: {},
  components: {ArticlePreview,Comments,CardKeywords},
  methods: {},
};
</script>

<style lang="less" scoped>
.article-detail {
  // 外部容器撑开空间，分左右两个部分
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around; 
  .container {
    // 左右两个容器内部都是垂直向下排列
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    div {
      margin: 10px;
    }
  }
  .left{
    // 左容器的宽度
    width: 95%;
  }
  .right{
    // 右容器的宽度
    width: 5%;
  }
}
</style>