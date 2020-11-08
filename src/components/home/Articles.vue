<template>
  <div class="articles">
    {{ article }}
    <button @click="login(loginRes)">测试登陆</button>
  </div>
</template>
<script lang='ts'>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { ArticleList, ByPwdInput } from "../../store/gql/types";

// 用TS类型约束组件参数类型
type dataType = {
  article: string;
  loginInput: ByPwdInput;
};
export default {
  name: "articles-home",
  data() {
    return {
      article: "这里是近期文章列表",
      loginInput: {
        userName: "用户1号",
        pwd: "abc123",
      },
    } as dataType;
  },
  methods: {
    ...mapActions("user", {
      login: "login",
    }),
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