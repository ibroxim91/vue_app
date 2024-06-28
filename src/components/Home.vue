<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <table class="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>UserName</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(user, index) in users" :key="index">
                        <th scope="row" v-text="index+1"></th>
                        <td v-text="user.username"></td>
                        <td v-text="user.first_name"></td>
                        <td v-text="user.last_name"></td>
                        <td v-text="user.position"></td>
                        
                      </tr>
                    
                    </tbody>
                  </table>

            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'HomeApp',
  props: {
    msg: String
  },
  data(){
    return{
      users : []
        }
    },

  created(){
    if(! localStorage.getItem('authorization')){
      alert("Please enter authorization username and password")
      this.$router.push('/login')
    }
  },

  methods:{
      getUsers(){
        axios.get('/api/users').then( response => {
          console.log(response.data); 
        this.users = response.data;
      })
      }
  },

  mounted(){
    this.getUsers()
  }

}
</script>
