<template>
    <div class="share_con">
			<div class="like" @click.once="like_handle"><img :src="like?require('../../assets/icon/heart_r.png'):require('../../assets/icon/heart.png')" width="20">喜欢 | {{likenum}}</div>
			<div class="share_way">
				<a href="item.url" v-for="item in sharelink">
					<div class="img_con">
						<img :src="item.img_g">
						<img :src="item.img_r">
					</div>
				</a>
			</div>
	</div>
</template>
<script>
export default {
    name:"share",
    data(){
			return{	
				like:false,	
				time: 20201012,
				atriclenum:400,
				readr:65,	
				likenum:5,
				islogin:true,
				comments_l:"",
				sharelink:[
	    {
        name:"QQ",img:require("../../assets/icon/qq_b.png"),img_g:require("../../assets/icon/qq_g.png"),img_r:require("../../assets/icon/qq_r.png"),url:"https://cpo.qq.com"
	    },
	    {
	      name:"空间",img:require("../../assets/icon/zone_b.png"),img_g:require("../../assets/icon/zone_g.png"),img_r:require("../../assets/icon/zone_r.png"),url:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+window.location.href+"&title="+document.title+"&site="+document.title+"&fromurl="+window.location.href
	    },
	    {
	      name:"微博",img:require("../../assets/icon/wb_b.png"),img_g:require("../../assets/icon/wb_g.png"),img_r:require("../../assets/icon/wb_r.png"),url:"http://open.weibo.com/sharebutton"
	    },
	    {
	      name:"贴吧",img:require("../../assets/icon/tie_b.png"),img_g:require("../../assets/icon/tie_g.png"),img_r:require("../../assets/icon/tie_r.png"),url:"http://tieba.baidu.com/f/commit/share/openShareApi?url="+window.location.href+"&title="+document.title
	    },
	  ],
				
			}
		},
	    methods:{
	    	like_handle:function(){
	    		if(!this.like){
	    			this.like=!this.like;
	    		}
	    	}
		},
    
}
</script>
<style lang="less" scoped>
.share_con{
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
	}
</style>