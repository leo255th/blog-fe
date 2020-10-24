<template>
  <div id="nav">
    <div class="nav-item" v-for="item in navItems" :key="item.index">
      {{ item.value }}
    </div>
  </div>
</template>

<script>
export default {
  // 这是导航栏组件
  name: "navigator",
  data() {
    return {
      navItems: [
        { index: "0", value: "首页" },
        { index: "1", value: "文章管理" },
        { index: "2", value: "文章列表" },
        { index: "3", value: "新文章" },
        { index: "4", value: "注册" },
        { index: "5", value: "登陆" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
</style>
