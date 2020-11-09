<template>
  <div class="articles">
    {{ article }}
    <button @click="test()">测试登陆</button>

    <el-button :plain="true" @click="open">打开消息提示</el-button>
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
      loginInput: {
        userName: "用户1号",
        pwd: "abc123",
      },
    };
  },
  methods: {
    ...mapActions("user", {
      login: "login",
    }),
    test() {
      var vm = this;
      this.login(this.loginInput).then(() => {
        console.log("你好1");
        vm.$message("你好");
      });
    },
    open() {
        this.$message('这是一条消息提示');
      },
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