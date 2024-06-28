// import { createApp } from 'vue'
// import Vue from 'vue';
// import App from './App.vue'
// import router from './router'

// Vue.config.productionTip = false

// new Vue({
//     router,
//     render: h => h(App)
// }).mount('#app')

// createApp(App).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import Login from './components/Login.vue';
import {createRouter, createWebHistory} from 'vue-router'  
import HomeApp from './components/Home.vue';
import './axios'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login, 
   
  },
  {
    path: '/',
    name: 'Home',
    component: HomeApp, 
   
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

createApp(App).use(router).mount('#app')