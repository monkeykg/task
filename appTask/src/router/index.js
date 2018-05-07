import Vue from 'vue'
import Router from 'vue-router'
import takeTask from '@/components/page/takeTask.vue'
import gofinish from '@/components/page/gofinish.vue'
import redpacket from '@/components/page/redpacket.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'takeTask',
      component: takeTask
    },
    {
      path: '/gofinish',
      name: 'gofinish',
      component: gofinish,
    },
    {
      path:'/gofinish/redpacket',
      component:redpacket
    }
  ]
})
