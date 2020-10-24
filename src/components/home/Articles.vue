<template>
  <div class="articles">
    {{ article }}
  </div>
</template>
<script>
export default {
  name: "articles-home",
  data() {
    return {
      article: "这里是近期文章列表",
    };
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