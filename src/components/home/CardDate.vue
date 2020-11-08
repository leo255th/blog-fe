<template>
  <div class="card">
    <h2 class="title">文章归档</h2>
        <ul class="data">
            <li v-for="item in archives" :key="item.time">
                <router-link class="btn" :to="'/time/'+item.time">{{getTimeString(item.time)+" ("+item.nums+")"}}</router-link>
            </li>
        </ul>
    
  </div>
</template>
<script>
export default {
  name: "card-date-home",
  data() {
    return {
      archives:[
                {
                    time:"2017-6",
                    nums:10
                },{
                    time:"2017-5",
                    nums:13
                },{
                    time:"2017-4",
                    nums:6
                }
            ],
    };
  },
  methods:{
    getTimeString(time){
            var timeArray=time.split("-");
            return timeArray[0]+"年"+timeArray[1]+"月"
        }
  }
};
</script>
<style lang="less" scoped>
.card {
  width: 300px;
}
.data {
  padding: 0;
  margin: 0;
}
.data li{
    background:dimgrey;
      border-width:1px;
    border-style:solid ;
    border-color:   white white  black white;	
    list-style: none;
}
.data li:hover
{
    background:crimson;
}
.data a{
  color: #000;
}

</style>