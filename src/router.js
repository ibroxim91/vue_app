import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/Login.vue';
import HomeApp from './components/Home.vue';

Vue.use(Router);

export default  Router({ 
    routes: [
        {"path": "/home", component : HomeApp},
        {"path": "/login", component : Login},
    ]
});    