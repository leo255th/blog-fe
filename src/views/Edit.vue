<template>
  <div class="article-eidt">
    <el-tabs class="container" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane class="pane" label="编辑" name="edit">
        <div class="input-row">
          <span class="label">文章名</span>
          <el-input
            class="input"
            v-model="title"
            placeholder="请输入文章名"
          ></el-input>
          <span class="label">领域</span>
          <el-select
            class="select"
            v-model="field"
            filterable
            placeholder="请选择"
          >
            <el-option
              v-for="item in fields"
              :key="item.id"
              :label="item.field"
              :value="item.field"
            >
            </el-option>
          </el-select>
        </div>
        <div class="input-row">
          <span class="label-textarea">简介</span>
          <el-input
            class="textarea"
            type="textarea"
            :rows="4"
            placeholder="请输入文章简介"
            v-model="description"
          >
          </el-input>
        </div>
        <div class="input-row">
          <span class="label">关键词</span>
          <el-select
            class="multi-select"
            v-model="tags"
            multiple
            filterable
            allow-create
            default-first-option
            placeholder="请输入文章关键词"
          >
          </el-select>
        </div>
        <!-- <el-button class="cancel" @click="onCancel">重置</el-button> -->
        <quillEditor class="myeditor" v-model="content"></quillEditor>
        <el-button class="submit" type="primary" @click="onSubmit"
          >确认</el-button
        >
      </el-tab-pane>
      <el-tab-pane class="pane" label="预览" name="preview">
        <!-- <p class="preview" v-html="content"></p> -->
        <!-- <div class="ql-container ql-snow">   -->
        <!-- 这是一个线框容器 -->
        <div class="ql-editor">
          <div v-html="content"></div>
        </div>
        <!-- </div> -->
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
import { mapActions, mapState } from "vuex";
export default {
  created() {
    this.getFields().then(() => {
      console.log("获取到的fields是:", this.fields);
    });
  },
  data() {
    return {
      content: "",
      activeName: "edit",
      title: "",
      field: "",
      description: "",
      tags: [],
    };
  },
  computed: {
    ...mapState("articles", {
      fields: (state) => state.fields,
    }),
    ...mapState("user", {
      myUserInfo: (state) => state.myUserInfo,
    }),
  },
  components: {
    quillEditor,
  },
  methods: {
    onSubmit() {
      const input = {
        userId: this.myUserInfo.userId,
        title: this.title,
        description: this.description,
        content: this.content,
        field: this.field,
        tags: this.tags,
      };
      console.log("将发送给后端的input是", input);
      this.addArticle(input).then((res) => {
        if (res) {
          this.$message.success("文章发布成功！");
          // 这里加路由跳转逻辑
          console.log(res);
        } else {
          this.$message.error("服务器错误，文章发布失败！");
        }
      });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    ...mapActions("articles", {
      getFields: "getFields",
      addArticle: "addArticle",
    }),
  },
};
</script>

<style lang="less" scoped>
div.article-eidt {
  // 外部容器，撑开content
  height: 800px;
  width: 90%;
  margin-left: 5%;
  margin-top: 5%;
  margin-bottom: 5%;
  background: white;
  // 内部容器居中
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .container {
    // 内部容器，放置组件
    height: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 20%;
    align-items: flex-start; // 左
    .input-row {
      //input容器
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 10px;
      .label {
        width: 60px;
        font-size: 16px;
      }
      .label-textarea {
        width: 60px;
        font-size: 16px;
        position: relative;
        top: -34px;
      }
      .input {
        width: 200px;
        height: 40px;
        margin-right: 40px;
      }
      .select {
        width: 210px;
        height: 40px;
      }
      .textarea {
        width: 510px;
      }
      .multi-select {
        width: 510px;
      }
    }
    .myeditor {
      height: 200px;
      width: 80%;
    }
    .submit {
      width: 100px;
      margin-top: 100px;
    }
    .preview {
      display: inline-block;
      height: 600px;
      width: 80%;
    }
  }
}
</style>