<template>
	<div class="wrap">
		<div class="read">
			<div class="tit">vue开发，学习笔记</div>
			<div class="des">
					<span>时间{{time}}</span>
					<span>字数{{atriclenum}}</span>
					<span>阅读{{readr}}</span>
					<span>评论{{comments_l}}</span>
					<span>喜欢{{likenum}}</span>
			</div>
			<div class="con">
			Vue (读音 /vjuː/，类似于view是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。<br/>Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。<br/>
			如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。<br/>
			如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架。<br/>
			尝试 Vue.js 最简单的方法是使用 Hello World 例子。你可以在浏览器新标签页中打开它，跟着例子学习一些基础用法。或者你也可以创建一个 .html 文件，然后通过如下方式引入 Vue：<br/>
			<!-- <img src="../assets/images/vue.png"> -->
			我们已经成功创建了第一个 Vue 应用！看起来这跟渲染一个字符串模板非常类似，但是 Vue 在背后做了大量工作。现在数据和 DOM 已经被建立了关联，所有东西都是响应式的。我们要怎么确认呢？<br/>打开你的浏览器的 JavaScript 控制台 (就在这个页面打开)，并修改 app.message 的值，你将看到上例相应地更新。

注意我们不再和 HTML 直接交互了。一个 Vue 应用会将其挂载到一个 DOM 元素上 (对于这个例子是 #app) 然后对其进行完全控制。那个 HTML 是我们的入口，但其余都会发生在新创建的 Vue 实例内部。

除了文本插值，我们还可以像这样来绑定元素 attribute：<br/>
<!-- <img src="../assets/images/vue2.png"> -->
			</div>
		</div>
		<!-- 点赞，分享 -->
		<div class="share">
		<share></share>
		</div>
		
		<!-- 评论框 -->
		<div class="content">
		<commentforauthor></commentforauthor>
		<commentforauthor></commentforauthor>
		<comment></comment>	
		</div>
	</div>
</template>
<script>
import commentforauthor from"../components/home/comment/CommentForAuthor"
import comment from "../components/home/comment/Comment"
import share from "../components/detials/share"
	export default{
		name:"detials",
		data(){
			return{	
				like:false,	
				time: 20201012,
				atriclenum:400,
				readr:65,	
				likenum:5,
				islogin:true,
				comments_l:"",		
			}
		},
		components:{
			commentforauthor,
			comment,
			share
		},
	}
</script>
<style scoped>
.wrap{
	width:1000px
}
	.tit{
		font-size: 36px;
		color: #000;
		font-weight: 700;
		margin-bottom: 10px;
		padding-top: 20px
	}
	.read{
		text-align: left;
	}
	.des{
		font-size: 12px;
	}
	.des span{
		padding-right: 5px;
	}
	.con{
		font-size: 14px;
		line-height: 22px;
		padding: 20px 0
	}
	.con img{
		display: block;
		margin: 10px 0
	}
 /* 分享 */
	/* .share_con{
		width: 600px;
		margin: 0 auto;
		padding: 20px 0;
		border-top: 1px solid #f8f8f8;		
	}
	.like{
		border: 1px solid #ea6f5a;
		float: left;
		border-radius: 20px;
		line-height: 10px;
		width: 70px;
		color: #ea6f5a
	}
	.share_way{
		float: right;
		width: 180px;
		line-height: 40px;
	}
	.share_way a{
		width: 32px;
		height: 32px;
		overflow: hidden;
		float: left;
		margin-right: 10px;
	}
	.share_way .img_con{
		position: relative;
		top:0;
		transition: all 200ms;
	}
	.share_way a:hover .img_con{
		top:-32px;
	}
	.share_way a img{
		display: block;
	} */
	/* 评论框 */
	.comments{
		text-align: left;
	}
	
</style>