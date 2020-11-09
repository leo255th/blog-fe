<template>
  <div class="articles">
    {{ article }}
  </div>
</template>
<script>
import storage from "store2";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { ArticleList, ByPwdInput } from "../../store/gql/types";

export default {
  name: "articles-home",
  data() {
    return {
      article: "这里是近期文章列表",
    };
  },
  methods: {
    ...mapActions("user", {}),
  },
};
</script>
<style lang="less" scoped>
.articles {
  background: white;
  height: 400px;
  width: 1000px;
}
</style>