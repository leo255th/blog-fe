<template>
    <div class="card">
      <h2 class="title">标签</h2>
            <ul class="tags">
                 <li v-for="item in tags" :key="item.id">
                    <router-link class="btn tag" :to="'/tag/'+item.name">{{item.name}}({{item.number}})</router-link>
                </li>
            </ul>
        </div>

</template>
<script>
export default {
  name: "card-keywords-home",
  data() {
    return {
      card: "我的关键字",
      tags:[
                {
                    id:1,
                    name:"前端",
                    number:3
                },{
                    id:2,
                    name:"CSS",
                    number:3
                },{
                    id:3,
                    name:"Nodejs",
                    number:3
                },{
                    id:4,
                    name:"UI",
                    number:3
                },{
                    id:5,
                    name:"数据库",
                    number:3
                },{
                    id:6,
                    name:"爬虫",
                    number:3
                },{
                    id:7,
                    name:"Java",
                    number:3
                }
            ]
    };
  },
};
</script>
<style lang="less" scoped>
.card {
  width: 300px;
}
.tags{
margin: 0;
padding: 0;
}
.tags li{
    background:dimgrey;
    border-width:1px;
    border-style:solid ;
    border-color:   white white  black white;	
    list-style: none;
}
.tags li:hover
{
    background:crimson;
}
.tags a{
    color: #000;
}
</style>