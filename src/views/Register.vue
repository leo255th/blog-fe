<template>
  <div class="register">
    <h1>注册</h1>
    <div class="input-control">
      <input type="text" name="username" v-model="username" placeholder="用户名" />
    </div>
    <div class="input-control">
      <input type="password" name="userpass" v-model="userpass" placeholder="密码" />
    </div>
    <div class="input-control">
      <input type="password" name="userpass" v-model="reuserpass" placeholder="确认密码" />
    </div>
    <div class="button-control">
      <input type="button" name="submit" value="注册" v-on:click="submit"/>
    </div>
    <div>{{error}}</div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      userpass: '',
      reuserpass: '',
      error: '',
      url: ''
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
          this.$router.push({path: '/'});
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
.register{
  padding: 10px 2% 0 2%;
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
   color: #2c3e50;
   height: 30px;
   border-radius: 5px;
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
   color: black;
   background-color: #58E481;
   border-radius: 5px;
   height: 40px;
}

h1{
  color: #58E481;
}


</style>
