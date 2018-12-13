import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'/Register'
    },{
      path:'/Login',
      component:()=>import('./views/Login/Login.vue')
    },{
      path:'/Register',
      component:()=>import('./views/Register/Register.vue')
    },{
      path:'*',
      component:()=>import('./views/404Notfound/Notfound.vue')
    },{
      path:'/Notfound',
      component:()=>import('./views/404Notfound/Notfound.vue')
    },{
      path:'/Animal',
      component:()=>import('./views/Animal/Animal.vue')
    },{
      path:'/Star',
      component:()=>import('./views/Star/Star.vue')
    },{
      path:'/Share',
      component:()=>import('./views/Share/Share.vue')
    },{
      path:'/Protocle',
      component:()=>import('./views/Register/Protocle.vue')
    }
  ]
})
