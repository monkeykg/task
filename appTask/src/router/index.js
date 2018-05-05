import Vue from 'vue'
import Router from 'vue-router'
import takeTask from '@/components/page/takeTask.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'takeTask',
      component: takeTask
    }
  ]
})
