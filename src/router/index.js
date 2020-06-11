import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/Index.vue'
import bowen from '../components/nav/Bowen.vue'
import suibi from '../components/nav/Suibi.vue'
import zuopin from '../components/nav/Zuopin.vue'
import liuyan from '../components/nav/Liuyan.vue'
import sousuo from '../components/nav/Sousuo.vue'
import denglu from '../components/nav/Denglu.vue'
import bowenContent from '../components/content/bowenContent.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/bowen',
      name:'bowen',
      component:bowen
    },
    {
      path:'/suibi',
      name:'suibi',
      component:suibi
    },
    {
      path:'/zuopin',
      name:'zuopin',
      component:zuopin
    },
    {
      path:'/liuyan',
      name:'liuyan',
      component:liuyan
    },
    {
      path:'/sousuo',
      name:'sousuo',
      component:sousuo
    },
    {
      path:'/denglu',
      name:'denglu',
      component:denglu
    },
    {
      path:'/bowenContent',
      name:'bowenContent',
      component:bowenContent
    },

  ]
})
