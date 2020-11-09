<template>
  <div class="home">
    <div class="container left">
      <!-- 这里的div包括组件是为了使用样式，让组件四周多一个margin -->
      <div>
        <articles></articles>
      </div>
      <div>
        <comments></comments>
      </div>
    </div>
    <div class="container right">
      <div>
        <card-keywords></card-keywords>
      </div>
      <div>
        <card-Date></card-Date>
      </div>
    </div>
  </div>
</template>

<script>
// 模板中的组件名就是下面导入的模组的名字
// 因为导出的时候没取名，所以这里是什么，组件名就是什么，和文件名无关，和组件内部定义的name也无关
// 组件内部定义的name另有他用（比如VUE的虚拟dom）
// html中的标签名不能是驼峰命名法，所以使用的时候用分隔符法
import Articles from "../components/home/Articles";
import Comments from "../components/home/Comments";
import CardKeywords from "../components/home/CardKeywords";
import CardDate from "../components/home/CardDate";
export default {
  name: "home",
  components: {
    Articles,
    Comments,
    CardKeywords,
    CardDate,
  },
  created: function(){
    console.log(this.$route.params)
  }
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    div {
      margin: 10px;
    }
  }
}
</style>
