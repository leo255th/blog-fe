<template>
  <div class="container">
    <el-card
      class="tags-card"
      :body-style="{ padding: '0px', width: '100%' }"
    >
      <div class="header">
        <span class="label"> 文章关键字 </span>
      </div>
      <div class="body">
        <div class="tag" v-for="(item, index) in fields" :key="index">
          {{ item.field + " (" + item.num + ")" }}
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "card-tags-article",
  data() {
    return {};
  },
  props: {
    tags: [String],
  },
  created() {
    const userId = +this.$route.params.userId;
    this.getUserFields(userId).then((res) => {
      this.fields = res;
    });
  },
  methods: {
    ...mapActions("user", {
      getUserFields: "getUserFields",
    }),
  },
};
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  flex-direction: row;
  justify-content: center; // 水平居中
  align-items: center; // 垂直居中
  .tags-card {
    background: white;
    width: 100%;
    border-radius: 7px;
    display: flex;
    margin: 0px;
    padding: 0px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    .header {
      background: #545c64;
      color: white;
      // min-width: 200px;
      width: 100%;
      height: 50px;
      margin: 0px;
      padding: 0px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .label {
      }
    }
    .body {
      min-height: 50px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      .tag {
        margin-left: 10px;
      }
    }
  }
}
</style>