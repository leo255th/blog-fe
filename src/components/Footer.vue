<template>
  <div class="container">
    <!-- <div class="line"></div> -->
    <span>个人博客，记录点滴</span>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
div.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #545c64;
  color: white;
  height: 100px;
  div.line {
    width: 90%;
    height: 4px;
    border-top: solid #c3c5c9 1px;
  }
}
</style>