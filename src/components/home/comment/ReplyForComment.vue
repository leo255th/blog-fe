<template>
  <div class="commentforauthor">
    <div class="commentitem">
      <li v-for="item in comments">
    <div class="commit_con">
    <div class="name">{{item.sendname}}<span class="time">{{item.time}}</span></div>
			<div class="text">{{item.content}}</div>
  </div>
      </li>
    </div>
  </div>

</template>
<script>
export default {
  name: "commentforauthor",
  data() {
    return {
      comments:[
        { id:1,
          type:"",
          usrid:1,
          aticleid:1,
          commentid:1,
          sendid:1,
          sendname:"用户一",
          replayname:"",
          content:"test111111111111",
          time:"2020.10.12 15:12:00",
          isdelete:false
        },
      ],
    };
  },

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
//   padding:2px 0px 0px 10px ;
}
.commentitem li{
  list-style: none;
// padding: 0 0 0 10px;
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
  float: right;
}
.text{
  padding-top: 10px;
  padding-left: 20px;
font-size: 10px;
  font-size: 14px;
  margin: 3px 0;
  color: black;
}

</style>