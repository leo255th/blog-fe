<template>
  <div class="comments">
    <div class="comment-send" v-if="isLogin">
      <el-input
        class="input"
        type="textarea"
        :rows="2"
        placeholder="请输入评论内容"
        v-model="comment2Article"
      >
      </el-input>
      <el-button class="btn" type="info" plain @click="sendComment"
        >提交评论</el-button
      >
    </div>
    <span class="card-border-top"></span>
    <div class="card" v-for="item in comments" :key="item.id">
      <comment-card :comment="item"></comment-card>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import CommentCard from "./comments/CommentCard";

export default {
  name: "comments-article",
  data() {
    return {
      comments: [],
      comment2Article: "",
    };
  },
  computed: {
    ...mapState("user", {
      isLogin: (state) => state.isLogin,
      isMyHome: (state) => state.isMyHome,
      // isEmpty: (state) => state.isEmpty,
      myUserInfo: (state) => state.myUserInfo,
      // otherUserInfo: (state) => state.otherUserInfo,
    }),
  },
  components: {
    CommentCard,
  },
  methods: {
    getComments() {
      const articleId=+this.$route.params.articleId;
      this.getComments2Article(articleId).then((res) => {
        if (res) {
          console.log("获取评论成功:");
          console.log(res);
          this.comments = res.list;
        }
      });
    },
    ...mapActions("comment", {
      getComments2Article: "getComments2Article",
      sendComment2Article: "sendComment2Article",
    }),
    sendComment() {
      const vm = this;
      const input = {
        userId: this.myUserInfo.userId,
        userName: this.myUserInfo.userName,
        commentedArticleId: +vm.$route.params.articleId,
        content: this.comment2Article,
      };
      this.sendComment2Article(input).then((res) => {
        if (res) {
          console.log("发送评论成功");
          this.getComments(); // 发送评论成功后，刷新评论区
          this.$message.success("评论发送成功！");
          this.comment2Article = "";
        }
      });
    },
  },
  created() {
    this.getComments();
  },
};
</script>
<style lang="less" scoped>
.comments {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  // border-top: 2px solid #dcdfe6;
  .comment-send {
    border-top: 2px solid #dcdfe6;
    // border-bottom: 2px solid #dcdfe6;
    padding: 20px 0px 3px 0px;
    // border: 1px solid black;
    width: 100%;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    .input {
    }
    .btn {
      margin-top: 5px;
    }
  }
  .card-border-top {
    width: 100%;
    height: 1px;
    margin-left: 10px;
    border-top: 2px solid #dcdfe6;
  }
  .card {
    width: 100%; // 控制卡片的宽度
    // height: 300px; // 控制卡片的大小
    margin: 10px;
  }
}
</style>