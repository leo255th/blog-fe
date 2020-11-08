<template>
  <div class="comments">
     <div class="tit">最近留言 </div>
  <commentforauthor></commentforauthor>
   <commentforauthor></commentforauthor>
    <commentforauthor></commentforauthor>
    <comment></comment>

  </div>
</template>
<script>
import commentforauthor from"./comment/CommentForAuthor"
import comment from "./comment/Comment"
export default {
  name: "comments-home",
  data() {
    return {
      comment: "这里是用户评论区",
    };
  },
  components:{
    commentforauthor,
    comment
  }
};
</script>
<style lang="less" scoped>
.comments {
  background: white;

  width: 1000px;
}
.tit{
  font-size: 16px;
  color: #a2c71c; 
  // text-align: left;
  padding:3px 0px 0px 20px;
  background: #2f6b58a1;
}
</style>