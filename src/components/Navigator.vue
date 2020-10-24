<template>
  <div class="nav">
    <div class="left-nav">
      <div class="nav-item" v-for="item in leftItems" :key="item.index">
        <router-link :to="item.to">{{ item.label }}</router-link>
      </div>
    </div>
    <div class="right-nav">
      <div class="nav-item" v-for="item in rightItems" :key="item.index">
        <router-link :to="item.to">{{ item.label }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 这是导航栏组件
  name: "navigator",
  data() {
    return {
      leftItems: [
        { index: "0", label: "首页", to: "/" },
        { index: "1", label: "文章管理", to: "/edit" },
        { index: "2", label: "文章列表", to: "/" },
        { index: "3", label: "新文章", to: "/" },
      ],
      rightItems: [
        { index: "0", value: "注册" },
        { index: "1", value: "登陆" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
div.nav {
  background: white;
  width: 100%;
  height: 80px;
  display: flex;
  color: black;
  flex-direction: row;
  justify-content: space-between;

  .left-nav,
  .right-nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    .nav-item {
      text-align: center;
      line-height: 80px;
      width: 150px;
      height: 80px;
      cursor: pointer;
      a {
        text-decoration: none;
        color: black;
      }
      &:hover {
        background: black;
        a {
          text-decoration: none;
          color: white;
        }
      }
    }
  }
}
</style>
