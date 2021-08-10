/*
 * @Descripttion: 
 * @Author: huyi2
 * @Date: 2021-08-09 16:12:12
 * @LastEditors: huyi2
 * @LastEditTime: 2021-08-10 19:52:14
 */
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
    },
    {
      path: '/css3',
      name: 'css3',
      component: () => import('@/views/css3')
    },
    {
      path: '/css4',
      name: 'css4',
      component: () => import('@/views/css4')
    },
    {
      path: '/css5',
      name: 'css5',
      component: () => import('@/views/css5')
    },
    {
      path: '/css6',
      name: 'css6',
      component: () => import('@/views/css6')
    }
  ]
})
