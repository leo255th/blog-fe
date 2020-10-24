<template>
  <div class="card">
    {{ card }}
  </div>
</template>
<script>
export default {
  name: "card-keywords-home",
  data() {
    return {
      card: "这里是显示关键字的卡片",
    };
  },
};
</script>
<style lang="less" scoped>
.card {
  background: white;
  height: 200px;
  width: 300px;
}
</style>