<template>
  <div class="login">
    <div class="container">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item class="username" label="用户名: ">
          <el-input v-model="form.userName" clearable></el-input>
        </el-form-item>
        <el-form-item class="pwd" label="密码: ">
          <el-input type="password" v-model="form.pwd" clearable></el-input>
        </el-form-item>
        <el-button class="submit" type="primary" @click="onSubmit"
          >登陆</el-button
        >
        <!-- <el-button class="cancel" @click="onCancel">重置</el-button> -->
      </el-form>
    </div>
  </div>
</template>
<script>
import storage from "store2";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { checkErros } from "../utils/checkErros";
export default {
  data() {
    return {
      form: {
        userName: "",
        pwd: "",
      },
    };
  },
  computed: {
    ...mapState("user", {
      isLogin: (state) => state.isLogin,
      isMyHome: (state) => state.isMyHome,
      // isEmpty: (state) => state.isEmpty,
      myUserInfo: (state) => state.myUserInfo,
      // otherUserInfo: (state) => state.otherUserInfo,
      otherUserInfo: (state) => state.otherUserInfo,
    }),
  },
  methods: {
    onSubmit() {
      const input = {
        userName: this.form.userName,
        pwd: this.form.pwd,
      };
      this.login(input).then((res) => {
        console.log(res);
        const vn = this;
        if (checkErros(vn, res, "login")) {
          this.$message.success("登陆成功!");
          // 登陆成功后运行下面的代码
          if (this.isMyHome) {
            this.$router.push("/user/" + res.data.login.user.userId);
          } else {
            this.$router.push("/user/" + this.otherUserInfo.userId);
          }
        }
      });
    },
    onCancel() {
      (this.form.userName = ""), (this.form.pwd = "");
    },
    ...mapActions("user", {
      login: "login",
    }),
  },
};
</script>

<style lang="less" scoped>
div.login {
  // 外部容器，撑开content
  height: 500px;
  width: 100%;
  // 内部容器居中
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div.container {
    // 内部容器，放置Input
    // width: 500px;
    // height: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start; // 水平居中
    .el-form {
      display: flex;
      flex-direction: column;
      .username {
        position: relative;
        left: -50px;
      }
      .pwd {
        position: relative;
        left: -50px;
      }
      .submit {
        position: relative;
        left: 50px;
        width: 300px;
      }
      .cancel {
        position: relative;
        left: 40px;
        width: 300px;
        top: 10px;
      }
      .el-input {
        width: 300px;
      }
    }
  }
}
</style>