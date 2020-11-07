<template>
  <div class="articles">
    {{ article }}
    <button @click="test()">测试graphql</button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "articles-home",
  data() {
    return {
      article: "这里是近期文章列表",
    };
  },
  methods:{
    ...mapActions('user',{
      test:'sendGraphql'
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