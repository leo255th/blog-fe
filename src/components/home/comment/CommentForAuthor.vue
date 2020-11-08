<template>
  <div class="commentforauthor">
    <div class="commentitem">
      <li v-for="item in comments">
    <div class="commit_con">
      <div class="name">{{item.name}}<span class="time">{{item.time}}</span></div>
			<div class="text">{{item.content}}</div>
      <div class="reply">
        <el-button type="info" icon="el-icon-s-comment" circle v-on:c=""></el-button>

    </div>
    
    </div>
          </li>
      </div>
      <div class='show_wrap' v-show="show">
      <comment2></comment2>
    </div>
  </div>

</template>
<script>
import comment2 from "./Comment2";
export default {
  name: "commentforauthor",
  data() {
    return {
      
      comments:[
          {
            name:"用户一",
			content:"test111111111111",
            time:"2020.10.12 15:12:00",
            like:4
          },
      ],
      show: false,
    };
  },
  methods:{
change(){
  this.show=!this.show
  
},
      },
      components:{
        comment2
      }
}
</script>
<style lang="less" scoped>
.commentforauthor{
  background: white;
  width: 100%;
  border-width:1px;
  border-style:solid ;
  border-color:   white white  black white;	
}
.commentitem{
  text-align: left;
  padding:2px 0px 0px 10px ;
}
.commentitem li{
  list-style: none;
padding: 0 0 0 10px;
};
.commit_con{

}
.name{
  color:forestgreen;
  font-size: 10px;
  padding-left: 20px;
  } 
.time{
  color:darkgray;
  font-size: 10px; 
  float:right;
  padding-right: 10px;
}
.text{
  padding-top: 10px;
font-size: 10px;
  font-size: 14px;
  margin: 3px 0;
  color: black;
}
.reply{
padding-left: 70%;
// border-width:1px;
//   border-style:solid ;
//   border-color:   white white  black white;	
}

.say_icon{
   background-image: url("~@/assets/icon/eye.png");  
}
.like{
  border: 1px solid #ea6f5a;
		border-radius: 20px;
		line-height: 20px;
		width: 40px;
		color: #ea6f5a
}
.show_wrap{
  
  width: 800px;

  margin-left: 60px;
  border: 1px solid; 
   border-color:   black black  white black;
}

</style>