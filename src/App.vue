<template>
  <div id="app">
    <navigator></navigator>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigator from "./components/Navigator";
export default {
  components: {
    Navigator,
  },
};
</script>
<style lang="less" >
#app {
  background: #ebebeb;
  .content {
    margin: 20px 20px 0px 20px;
  }
}
</style>
