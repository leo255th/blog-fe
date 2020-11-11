<template>
  <div class="container">
    <div class="left">
      <div class="iconfont icon-yonghu"></div>
    </div>
    <div class="right">
      <div class="username">
        {{ comment.userName }}
      </div>
      <div class="comment-content">
        {{ comment.content }}
      </div>
      <div class="time">
        {{ time }}
      </div>
    </div>
  </div>
</template>

<script>
import "../../../../public/iconfont/iconfont.css";
export default {
  data() {
    return {};
  },
  props: {
    comment: {
      id: Number,
      userId: Number,
      userName: String,
      content: String,
      createdAt: Date,
    },
  },
  computed: {
    time: function () {
      return new Date(this.comment.createdAt).toLocaleString();
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  // border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 2px solid #DCDFE6;
  .left {
    width: 5%;
    // border: 1px solid black;
    .icon-yonghu {
      // height: 30px;
      // width: 30px;
      font-size: 50px;
      font-weight: 550;
      color: #545c64;
      // position: relative;
      // left: 15px;
    }
  }
  .right {
    width: 85%;
    // border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    .username {
      font-size: 14px;
      color: #909399;
      margin: 10px 0px 10px 0px;
    }
    .comment-content {
      font-size: 14px;
      color: #303133;
      margin: 10px 0px 10px 0px;
    }
    .time {
      font-size: 14px;
      color: #909399;
      margin: 10px 0px 10px 0px;
    }
  }
}
</style>