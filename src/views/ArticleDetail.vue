<template>
  <div class="article-detail">
    <div class="container left">
      <div>
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
import Comments from "../components/home/Comments";
import CardKeywords from "../components/home/CardKeywords";
import CardDate from "../components/home/CardDate";
export default {
  created() {},
  data() {
    return {};
  },
  computed: {},
  components: {},
  methods: {},
};
</script>

<style lang="less" scoped>
</style>