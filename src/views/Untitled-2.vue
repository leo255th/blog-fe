<template>
  <div class="articles">
     <div class="tit">最新文章 <router-link to="/editlist">查看更多</router-link></div>

 <ui class="blog">
     <li v-for="item in articles" :key="item.id">
       <div class="title"><router-link :to="'/article/'+item.id">{{item.name}}</router-link>
       </div>
     	<div class="des">{{item.des}}</div>
       <div class="look">
            <p>{{item.time}}</p>
		<span class="say_icon"></span>	<p>{{item.chart}}</p>
	    <span class="see_icon"></span>		<p>{{item.see}}</p>
		</div>
     </li>
 </ui>
      </div>
</template>
<script>
export default {
  name: "articles-home",
  data() {
    return {
         articles:[
          {
            name:"vue开发 学习笔记1",
            id:1,
            des:"Vue (读音 /vjuː/，类似于view是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架.......",
            see:65,
            time:"2020-10-28",
            chart:5
          },
          {
            name:"vue开发 学习笔记2",
            id:1,
            des:"Vue (读音 /vjuː/，类似于view是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架.......",
            see:65,
            time:"2020-10-28",
            chart:5
          },
          {
            name:"vue开发 学习笔记3",
            id:1,
            des:"Vue (读音 /vjuː/，类似于view是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架.......",
            see:65,
            time:"2020-10-28",
            chart:5
          },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.articles {
    background: white;

  width: 1000px;
}
.tit{
  font-size: 16px;
  color: #a2c71c; 
  // text-align: left;
  padding:3px 0px 0px 20px;
  
}
.tit a{
  float:right;
  text-decoration: none;
  margin-right:20px ;
  color: #000;
  
  
}
.tit a:hover{
  color: brown;
}
.blog{
  padding: 10px;
}
.blog li{
    width: 100%;
    list-style: none;
    padding: 0 10px 30px 20px ;
     border-width:1px;
  border-style:solid ;
  border-color:   white white  black white;	
}
.title{
   line-height: 30px;
  font-size: 20px;
  text-align: left;
  }
  .title:hover{
    	transform: translateY(-2px);
  }
  .title a{
        color:black;
  }
  .look{
  font-size:10px;  
}
.look span{
	float: left;
	width: 16px;
	height: 16px;
	background-size: cover;
	margin-right: 10px;
  	color: #999
}
.look p{
	float: left;
	margin-right: 20px;
      color: #999;
      margin-top: 0px;
}
.look span.see_icon{
    background-image: url("~@/assets/icon/eye.png");  
}
 .look span.say_icon{
    background-image: url("~@/assets/icon//chart.png");
 }

</style>