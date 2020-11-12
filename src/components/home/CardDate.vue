<template>
  <div class="container">
    <el-card class="date-card" :body-style="{ padding: '0px',width:'100%' }">
      <div class="header">
        <span class="label"> 文章日期归档</span>
      </div>
      <div class="body">
        <div class="date" v-for="(item, index) in dateCount" :key="index">
          {{ item.year+"年"+item.month+"月" + " (" + item.num + ")" }}
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "card-date-home",
  data() {
    return {
      dateCount: [],
    };
  },
  created() {
    const userId = +this.$route.params.userId;
    this.getUsetTimeSet(userId).then((res) => {
      this.dateCount = res;
    });
  },
  methods: {
    ...mapActions("user", {
      getUsetTimeSet: "getUsetTimeSet",
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
  .date-card {
    background: white;
    width: 100%;
    border-radius: 7px;
    display: flex;
    margin:0px;
    padding: 0px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    .header {
      background: #545c64;
      color: white;
      // min-width: 200px;
      width:100%;
      height: 50px;
      margin: 0px;
      padding: 0px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .label{
      }
    }
    .body {
      min-height: 50px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      .date {
        margin-left: 10px;
      }
    }
  }
}
</style>