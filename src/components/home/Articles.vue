<template>
  <div class="articles">
    <div class="card" v-for="item in articles" :key="item.id">
      <article-card :article="item"></article-card>
      <!-- {{item.title}} -->
    </div>
  </div>
</template>
<script>
import storage from "store2";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { ArticleList, ByPwdInput } from "../../store/gql/types";
import ArticleCard from "./articles/ArticleCard";
export default {
  name: "articles-home",
  data() {
    return {
      articles: [],
    };
  },
  components: {
    ArticleCard,
  },
  methods: {
    ...mapActions("user", {}),
    ...mapActions("articles", {
      getArticles: "getArticles",
    }),
  },
  created() {
    const input = {
      equal_userId: 1,
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
    width: 45%; // 控制卡片的宽度
    // height: 300px; // 控制卡片的大小
    margin: 10px;
  }
}
</style>