<template>
  <div class="container">
    <el-card class="box-card" :body-style="{ padding: '0px' }">
      <!-- header部分 -->
      <div class="header">
        <div class="iconfont icon-wenzhang"></div>
        <div class="btns">
          <el-button class="btn detail" type="text" @click="toDetail"
            >查看详情</el-button
          >
          <el-button
            class="btn reedit"
            type="text"
            @click="toReEdit"
            v-if="isMyHome"
            >编辑</el-button
          >
        </div>
      </div>
      <!--body部分放标题，简介，领域，标签-->
      <div class="body">
        <div class="row">
          <span class="label">标题：</span>
          <div class="title">{{ title }}</div>
        </div>
        <div class="row">
          <span class="label"> 简介： </span>
          <div class="description">
            {{ description }}
          </div>
        </div>
        <div class="row">
          <span class="label"> 分类： </span>
          <div class="field">
            {{ article.field }}
          </div>
          <span class="label tags">关键字：</span>
          <div class="tags">
            {{ tags }}
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { cutString } from "../../utils/cutString";
import "../../../public/iconfont/iconfont.css";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  props: {
    article: {
      id: Number,
      userId: Number,
      title: String,
      description: String,
      field: String,
      tags: [String],
    },
  },
  computed: {
    title: function () {
      return cutString(this.article.title, 200);
    },
    description: function () {
      return cutString(this.article.description, 1000);
    },
    tags: function () {
      return cutString(this.article.tags.toString(), 100);
    },
    ...mapState("user", {
      isLogin: (state) => state.isLogin,
      isMyHome: (state) => state.isMyHome,
      // isEmpty: (state) => state.isEmpty,
      myUserInfo: (state) => state.myUserInfo,
      // otherUserInfo: (state) => state.otherUserInfo,
    }),
  },
  methods: {
    toDetail() {
      this.$router.push("/article/" + this.article.id);
    },
    toReEdit() {
      this.$router.push("/re-edit/" + this.article.id);
    },
  },
};
</script>

<style lang="less" scoped>
div.container {
  // 外部容器
  display: flex;
  flex-direction: row;
  justify-content: center; // 水平居中
  align-items: center; // 垂直居中
  .box-card {
    // 内部容器
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    // 上下分为两部分，header和body
    .header {
      background: #545c64;
      color: white;
      width: 100%;
      height: 50px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .icon-wenzhang {
        height: 30px;
        width: 30px;
        font-size: 30px;
        font-weight: 550;
        color: white;
        position: relative;
        left: 15px;
      }
      .btn {
        color: white;
        margin-right: 20px;
        &:hover {
          color: #409eff;
        }
      }
    }
    .body {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;
      .row {
        display: flex;
        flex-direction: row;
        margin-left: 15px;
        margin-top: 5px;
        margin-bottom: 5px;
        width: 100%;
        color: #606266;
        .label {
          width: 7%;
          height: 30px;
          // border: 1px solid black;
        }
        .label.tags {
          width: 8%;
        }
        .title {
          width: 80%;
          // border: 1px solid black;
        }
        .description {
          width: 80%;
          // border: 1px solid black;
        }
        .field {
          width: 10%;
          // border: 1px solid black;
        }
        .tags {
          width: 60%;
          // border: 1px solid black;
        }
      }
    }
  }
}
</style>