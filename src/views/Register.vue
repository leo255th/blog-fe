<template>
  <div class="register">
    <div class="container">
      <el-form
        ref="form"
        status-icon
        :model="form"
        :rules="rules"
        label-width="100px"
      >
        <el-form-item class="username" label="用户名: " prop="userName">
          <el-input v-model="form.userName" clearable></el-input>
        </el-form-item>
        <el-form-item class="pwd" label="密码: " prop="pwd">
          <el-input type="password" v-model="form.pwd"></el-input>
        </el-form-item>
        <el-form-item class="pwd" label="确认密码: " prop="pwdRepeat">
          <el-input
            type="password"
            v-model="form.pwdRepeat"
            clearable
          ></el-input>
        </el-form-item>
        <el-button class="submit" type="primary" @click="onSubmit('form')"
          >注册</el-button
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
    // 定义密码验证函数,这里只验证非空，正则验证后续加入
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.form.pwdRepeat !== "") {
          this.$refs.form.validateField("pwdRepeat");
        }
        callback();
      }
    };
    // 定义确认密码验证函数
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.pwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      form: {
        userName: "",
        pwd: "",
        pwdRepeat: "",
      },
      rules: {
        pwd: [{ validator: validatePass, trigger: "blur" }],
        pwdRepeat: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    onSubmit(formName) {
      const vn = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 如果通过验证
          const input = {
            userName: this.form.userName,
            pwd: this.form.pwd,
          };
          console.log("注册的输入是:", input);
          this.register(input).then((res) => {
            console.log(res);
            if (checkErros(vn, res, "register")) {
              this.$message.success("欢迎使用个人博客!");
              this.$router.push("/user/" + res.data.register.user.userId);
            }
          });
        } else {
          this.$message.error("未通过验证");
          return false;
        }
      });
    },
    onCancel() {
      (this.form.userName = ""),
        (this.form.pwd = ""),
        (this.form.pwdRepeat = "");
    },
    ...mapActions("user", {
      register: "register",
    }),
  },
};
</script>

<style lang="less" scoped>
div.register {
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