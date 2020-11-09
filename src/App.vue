<template>
  <div id="app">
    <el-container>
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
    </el-container>
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
    console.log(this.$route);
    if (this.$route.params.userId) {
      console.log("检测到url中带有userId，准备初始化用户信息");
      this.initNavUserInfo(+this.$route.params.userId).then(res=>{
        console.log('查询到的用户信息是:',res)
      });
    }
    console.log("根组件生成完毕");
  },
  methods: {
    // ...mapMutations('user',{
    //   initUserInfo:'initUserInfo'
    // }),
    ...mapActions("user", {
      initNavUserInfo: "initNavUserInfo",
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
