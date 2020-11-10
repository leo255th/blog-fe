<template>
  <el-row
    id="nav"
    class="nav"
    :gutter="24"
    type="flex"
    justify="space-around"
    style="margin-left: 0px"
  >
    <el-col class="left-nav" :span="17">
      <router-link
        class="nav-item"
        key="0"
        :to="'/' + otherUserInfo.userId"
        v-if="!isMyHome&!isEmpty"
        >{{ otherUserInfo.userName + "的首页" }}</router-link
      >
      <router-link class="nav-item" key="1" to="/" v-if="isMyHome&!isEmpty"
        >我的首页</router-link
      >
      <router-link class="nav-item" key="2" to="/edit" v-if="isMyHome&!isEmpty"
        >文章管理</router-link
      >
      <router-link class="nav-item" key="3" to="/" v-if="!isEmpty">文章列表</router-link>
      <router-link class="nav-item" key="4" to="/" v-if="isMyHome&!isEmpty"
        >新文章</router-link
      >
    </el-col>
    <el-col class="right-nav" :span="7">
      <router-link class="nav-item" key="10" to="/login" v-if="!isLogin"
        >登陆</router-link
      >
      <router-link class="nav-item" key="11" to="/register" v-if="!isLogin"
        >注册</router-link
      >
      <el-dropdown v-if="isLogin" @command="handleCommand">
        <span class="el-dropdown-link">
          {{ myUserInfo.userName }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="toUserinfo">个人信息</el-dropdown-item>
          <el-dropdown-item command="logout">登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  // 这是导航栏组件
  name: "navigator",
  data() {
    return {};
  },
  computed: {
    ...mapState("user", {
      isLogin: (state) => state.isLogin,
      isMyHome: (state) => state.isMyHome,
      isEmpty:(state)=>state.isEmpty,
      myUserInfo: (state) => state.myUserInfo,
      otherUserInfo: (state) => state.otherUserInfo,
    }),
  },
  created(){
    console.log('导航组件创建完成,isEmpty:',this.isEmpty)
  },
  methods: {
    handleCommand(command) {
      switch (command) {
        case "toUserinfo":
          this.toUserinfo();
          break;
        case "logout":
          this.logout();
          this.$message.success("退出登录成功!");
          break;
        default:
          break;
      }
    },
    toUserinfo() {
      // 跳转到个人信息页面
    },
    ...mapMutations("user", {
      logout: "logout",
    }),
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
    .nav-item {
      text-align: center;
      line-height: 80px;
      min-width: 100px;
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
    .el-dropdown-link {
      color: #fff;
      text-align: center;
      line-height: 80px;
      width: 100px;
      height: 80px;
    }
  }
  .left-nav {
    justify-content: flex-start;
  }
  .right-nav {
    justify-content: flex-end;
  }
}
</style>
