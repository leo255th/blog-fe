<template>
  <div class="articles">
    {{ article }}
    <button @click="login(loginRes)">测试登陆</button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "articles-home",
  data() {
    return {
      article: "这里是近期文章列表",
      loginRes:{
        userName:'用户1号',
        pwd:'abc123'
      }
    };
  },
  methods:{
    ...mapActions('user',{
      login:'login'
    })
  }
};
</script>
<style lang="less" scoped>
.articles {
    background: white;
  height: 400px;
  width: 1000px;
}
</style>