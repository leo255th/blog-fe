<template>
  <el-row class="nav" :gutter="24" type="flex" justify="space-around">
    <el-col class="left-nav" :span="20">
      <router-link
        class="nav-item"
        v-for="item in leftItems"
        :key="item.index"
        :to="item.to"
      >
        {{ item.label }}
      </router-link>
    </el-col>
    <el-col class="right-nav" :span="4">
      <router-link
        class="nav-item"
        v-for="item in rightItems"
        :key="item.index"
        :to="item.to"
      >
        {{ item.label }}
      </router-link>
    </el-col>
  </el-row>
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
        { index: "0", label: "注册", to: "/" },
        { index: "1", label: "登陆", to: "/" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.nav {
  background: #545c64;
  width: 100%;
  height: 80px;
  margin-left: 0;
  margin-right: 0;
  .left-nav,
  .right-nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    .nav-item {
      text-align: center;
      line-height: 80px;
      width: 100px;
      height: 80px;
      cursor: pointer;
      text-decoration: none;
      color: #fff;
      &:hover {
        background: #434a50;
        // text-decoration: none;
        color: #ffd04b;
      }
      &:focus {
        outline: none;
      }
    }
    .nav-item.selected{
      
    }
  }
}
</style>
