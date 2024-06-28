<template>
    
    <div class="form">
        <h2>{{ msg }}</h2>
     <form @submit.prevent="handleSubmit">
        <div class="form-group">
            <label for="formGroupExampleInput"> Username </label>
            <input type="text" v-model="username" class="form-control" id="formGroupExampleInput" placeholder="Username">
        </div>
        <div class="form-group">
            <label for="formGroupExampleInput2"> Password </label>
            <input type="password"  v-model="password" class="form-control" id="formGroupExampleInput2" placeholder="Password">
        </div>

        <div class="form-group">
            <button type="submit" class="btn btn-success">Login</button>
        </div>
        </form>

    </div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginForm',
  props: {
    msg: String
  },

  data(){
    return{
        username: '',
        password: ''
    }
  },

  methods: {
    handleSubmit(){
        const data = {
            username: this.username,
            password: this.password
        }

     const vm = this;
        axios.post("api/token", data).then(function (response) {
          localStorage.setItem('access',  response.data.access)

            
     axios.get('/api/user').then(function(response) {
       
       if (response.status == 200) {
        localStorage.setItem('authorization', true)
        vm.$router.push('/')
      }
    })})
        .catch(function (error) {
          console.log(error);
            alert("Invalid username or password")
        });
    }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

form {
  width: 500px;
  margin: 50px auto;
  padding: 30px;
 border-radius: 10px;
 box-shadow: 0px 0px 10px #000; 
  border: 1px solid #000;  
}

.form-block {
  margin: 20px 0;
}

.btn{
    padding: 10px 15px;
    border-radius: 3px;
    background: #42b983;
    color: aliceblue;
    font-size: 20px;
    border: none;
}
.form-block input{
    width: 100%;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
