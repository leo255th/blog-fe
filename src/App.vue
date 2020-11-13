s<template>
  <div id="app">
    <!-- <el-container>
      <el-header>
        <navigator></navigator>
      </el-header>
      <el-main>
        <div class="content">
          <router-view />
        </div>
      </el-main>
      <el-footer>
        <my-footer></my-footer>
      </el-footer>
    </el-container> -->
    <h1>通知</h1>
    <div>本站今天闭站，感谢长久以来的支持</div>
    <div>2020/11/12 - 2020/11/13</div>
    
    
  </div>
</template>

<script>
import Navigator from "./components/Navigator";
import MyFooter from "./components/Footer";
import { mapActions, mapMutations } from "vuex";
export default {
  components: {
    Navigator,
    MyFooter,
  },
  created: function () {
    // 通过url或者刷新页面进入网站后，会且仅会调用一次这个钩子函数
    // 此时检测storage里的数据与url里的参数，初始化nav栏状态
    console.log(this.$route);
    if (this.$route.params.userId) {
      console.log("检测到url中带有userId，准备初始化用户信息");
      this.initNavInfo({
        hasUserId: true,
        userId: +this.$route.params.userId,
      }).then((res) => {
        console.log("查询到的用户信息是:", res);
      });
    } else {
      this.initNavInfo({ hasUserId: false }).then((res) => {
        if (!res) {
          // 如果storage没有信息
          if (this.$route.path !== "/login") this.$router.push("/login");
        } else {
          // 如果storage有信息
          // do nothing
        }
      });
    }
    console.log("根组件生成完毕");
  },
  methods: {
    ...mapActions("user", {
      initNavInfo: "initNavInfo",
    }),
  },
};
</script>
<style lang="less">
#app {
  background: #ebebeb;
  .content {
    margin: 20px 20px 20px 20px;
    min-height: 600px;
  }
  .el-header {
    padding: 0;
  }
  .el-main {
    padding: 0;
  }
  .el-footer {
    padding: 0;
  }
}
</style>
