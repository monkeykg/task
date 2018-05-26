import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/page/home.vue'
import redpackage from '@/components/page/redpackage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/redpackage',
      component:redpackage
    }
  ]
})
