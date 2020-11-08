<template>
    <div class="content">
      <div class="addBlog-title">
        <span >标题:</span>
        <input  type="text" v-model="title" required="required" />
        <span class="save">
          <el-button type="primary" v-on:click="save">保存</el-button>
          <el-button type="primary" v-on:click="publish">发布文章</el-button>
        </span>
      </div>   
      <div class="label">
        <taginput :max="5" class="tag"> </taginput>
      </div>
      <div class="filed">选择领域：
        <el-select v-model="value" placeholder="请选择">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </div>
        <div calss="markdown">
          <Markdown @on-save="save"></Markdown>
        </div>
    </div>    
</template>
<script>
    import Markdown from 'vue-meditors';
    import taginput from '../components/newedit/TagInputer'
    export default {
        name: "markdown",
          data(){
          return {
            previewBlog:false,
            dialogVisible:false,
            dialogEvent:'发布',
            popup:0,
            title:'',
            options: [{
          value: '选项1',
          label: '前端'
        }, {
          value: '选项2',
          label: '后端'
        }, {
          value: '选项3',
          label: '全栈'
        }, {
          value: '选项4',
          label: '其他'
        }],
           value: ''  
          }
      },

      components: {
       Markdown,
       taginput,
        },
      methods: {
        commitArtcile(content){
          console.log(content)
        },
    },
    save(content){
	      	console.log("原始内容："+content.value);
	      	console.log("转义后的内容："+content.html);
	      	console.log("主题theme："+content.theme);
	      }
        
    },
    mounted() {
 
    }
    }
  
</script>
<style scoped>
  .addBlog-title
  {
  padding: 10px ;
  }
   .addBlog-title span
  {
  padding: 10px ;
  } 
.addBlog-title input {
    width: 70%;
    height: 40px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    padding: 0 10px;
 
    border:#CB554D 1px solid;
  }
.addBlog-category{
    text-align: left;
    padding: 10px;
    }
.tag{
  padding-left: 20px;
  font-size: 14px;
}
.filed{
  padding: 20px;
   font-size: 14px;
}
</style>