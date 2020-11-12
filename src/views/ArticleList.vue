<template>
  <div class="article-list">
    <div class="card" v-for="item in articles" :key="item.id">
      <article-card :article="item"></article-card>
      <!-- {{item.title}} -->
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ArticleCard from '../components/articleList/Article'
export default {
  created() {
    const userId=+this.$route.params.userId
    const input = {
      equal_userId: userId,
      num:100
    };
    this.getArticles(input).then((res) => {
      if (res) {
        console.log("获取文章列表成功！");
        console.log(res);
        this.articles = res.list;
      } else {
        this.$message.error("服务器错误，获取文章失败！");
      }
    });
  },
  data() {
    return {
      articles: [],
    };
  },
    components: {
    ArticleCard,
  },
  methods: {
    ...mapActions("articles", {
      getArticles: "getArticles",
    }),
  },
};
</script>

<style lang="less" scoped>
.articles {
  // background: white;
  // border: 2px solid black;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  .card {
    width: 90%; // 控制卡片的宽度
    // height: 300px; // 控制卡片的大小
    margin: 10px;
  }
}
</style>