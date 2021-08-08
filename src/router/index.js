import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/css1',
      name: 'css1',
      component: () => import('@/views/css1')
    },
    {
      path: '/css2',
      name: 'css2',
      component: () => import('@/views/css2')
    }
  ]
})
