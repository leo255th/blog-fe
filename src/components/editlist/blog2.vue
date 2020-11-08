<template>
	<div class="wrap_w left">
		<div class="content">
			<div class="navkind">
				<span class="search"> <search></search></span>
			</div>
	
					<div class="sort">排序方式：
					<ul class="clearfix">
						<li >
							<input name="way" type="checkbox" id="time" v-model="checkedways" value="time" @click="getVal">
							<label for="time">按时间排序</label>
						</li>
						<li >
							<input name="hot" type="checkbox" id="hot" v-model="checkedways" value="hot" @click="getVal">
							<label for="hot">热度</label>
						</li>
					</ul>
				</div>
				<!-- {{checkedways}} -->
			</div>
			<div class="article_con">
				<ul >
					<li v-for="item in article" class="medium">
					<!-- <router-link :to="{name:'detials'}"> -->
                        	<router-link to="detials">
							<div class="img_con">
							</div>
							<div class="tit">{{item.name}}</div>		
							<div class="des">{{item.des}}...</div>
							<div class="look clearfix">
									<p>{{item.chart}}</p>	<span class="say_icon"></span>
										<p>{{item.see}}</p><span class="see_icon"></span>
						
							</div>
					
					</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import {mapState ,mapMutations ,mapActions} from 'vuex'
    import $ from 'jquery'
    import search from "../components/editlist/Search"
	export default{
		data:function(){
			return {
				count:20,
				start:0,
				search:false,
                searchwhat:"",
				loading:false,
				article:[ 
						{
							name:"vue开发 学习笔记",
							id:1,
							des:"Vue (读音 /vjuː/，类似于view是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架.......",
							see:65,
							chart:5
						},
						{
							name:"vue开发 学习笔记",
							id:1,
							des:"Vue (读音 /vjuː/，类似于view是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架.......",
							see:65,
							chart:5
						},{
							name:"vue开发 学习笔记",
							id:1,
							des:"Vue (读音 /vjuː/，类似于view是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架.......",
							see:65,
							chart:5
						},{
							name:"vue开发 学习笔记",
							id:1,
							des:"Vue (读音 /vjuː/，类似于view是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架.......",
							see:65,
							chart:5
						},{
							name:"vue开发 学习笔记",
							id:1,
							des:"Vue (读音 /vjuː/，类似于view是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架.......",
							see:65,
							chart:5
						},{
							name:"vue开发 学习笔记",
							id:1,
							des:"Vue (读音 /vjuː/，类似于view是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架.......",
							see:65,
							chart:5
						},{
							name:"vue开发 学习笔记",
							id:1,
							des:"Vue (读音 /vjuː/，类似于view是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架.......",
							see:65,
							chart:5
						},
				]
			}
		},
components:{
    search
}
	}
</script>
<style type="text/css" scoped>
.wrap_w{
	width: 1200px;
	  display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.search{
	height: 10px;
}
.article_con{
	margin: 20px 0 0;
	padding-bottom: 20px;
	border:1px ;
}
.article_con ul li{
	width: 100%;
	padding: 20px;
	box-sizing: border-box;
	transition: all 500ms;
	text-align: left;
	font-size: 16px;
	background-color: #fff;
	list-style: none;
}
.article_con ul li a{	
	color: #000;
}
.article_con ul li .tit{
	font-size: 30px;	
	font-weight: 30;
	text-align: left;
	padding: 5px 0
}
.article_con ul li .look{
	font-size: 12px
}
.article_con ul li .look span{
	float: left;
	width: 16px;
	height: 16px;
	background-size: cover;
	float: right;
	margin-right: 10px;
}
.article_con ul li .look p{
	float: right;
	margin-right: 3px;
}
.article_con ul li .look span.see_icon{
	background-image: url("~@/assets/icon/eye.png");
}
.article_con ul li .look span.say_icon{
	background-image: url("~@/assets/icon/chart.png");
}
.article_con ul li:hover{
	box-shadow: 0 0 10px #ccc;
	transform: translateY(-2px);
}
.article_con ul li .img_con{
	height: 0px;
	overflow: hidden;
}
.article_con ul li .des{
	font-size: 16px;
	color: #333
}
.sort{
	padding: 20px 0 0 20px ;
	font-size: 17px;
}
</style>