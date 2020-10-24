<template>
  <div class="comments">
    {{ comment }}
  </div>
</template>
<script>
export default {
  name: "comments-home",
  data() {
    return {
      comment: "这里是用户评论区",
    };
  },
};
</script>
<style lang="less" scoped>
.comments {
  background: white;
  height: 1000px;
  width: 1000px;
}
</style>