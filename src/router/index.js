import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import home from '../components/home/home'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:App,//顶层路由，对应index.html
      children:[
        {
          path:'',
          redirect:'/home'
        },
        {
          path:'/home',
          component:home
        }
      ]
    }
  ]
})
