<template>
  <div class="login">
    <h1>登录</h1>
    <div class="input-control">
      <input type="text" name="username" v-model="usrname" placeholder="用户名" />
    </div>
    <div class="input-control">
      <input type="password" name="userpass" v-model="userpass" placeholder="密码" />
    </div>
    <div class="button-control">
     <input type="button" name="submit" value="登录" v-on:click="submit"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      userpass: '',
      url: 'http://localhost:3000/doLogin'
    }
  },
  methods: {
    submit: function (){
      this.$http.post(this.url,
      {
        username: this.username, 
        userpass: this.userpass
      },
       { 
        withCredentials: true
       }).then( res => {
        if (res.body.result == 'ok'){
          this.$router.push({path: '/list'});
        }
      }).catch( error => {
        console.log(error);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.login{
  padding:  10px 2% 60px 2%;
  width: 20%;
  margin:  auto;
  text-align: center;
}

.input-control{
  margin: 10px auto;
  width: 80%;
  height: 50px;
}

.input-control input{
  width: 98%;
  padding: 1%;
  outline:none;
  border:2px #f4f4f4 solid;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
   color: black;
   height: 30px;
   border-radius: 5px;
   background: white;
   background-color: transparent;
} 

.input-control input:focus{
  border:2px #58E481 solid;
  border-radius: 5px;
}

input:-webkit-autofill{
  -webkit-box-shadow : 0 0 0px 1000px white inset ;
}

.button-control{
  margin: 0 auto;
  width: 80%;
  height: 50px;
}

.button-control input{
  height: 30px;
  width: 100%;
  outline:none;
  border:0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   color: #fff;
   background-color: #58E481;
   border-radius: 5px;
   height: 40px;
}
.button-control :active{
    border-color:#a2c71c;
  color:#a2c71c; 
}

h1{
  color: #58E481;
}

</style>
