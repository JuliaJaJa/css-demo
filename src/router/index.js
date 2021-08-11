/*
 * @Descripttion: 
 * @Author: huyi2
 * @Date: 2021-08-09 16:12:12
 * @LastEditors: huyi2
 * @LastEditTime: 2021-08-11 21:18:09
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
    },
    {
      path: '/css7',
      name: 'css7',
      component: () => import('@/views/css7')
    },
    {
      path: '/css8',
      name: 'css8',
      component: () => import('@/views/css8')
    },
    {
      path: '/css9',
      name: 'css9',
      component: () => import('@/views/css9')
    },
    {
      path: '/css10',
      name: 'css10',
      component: () => import('@/views/css10')
    },
    {
      path: '/css11',
      name: 'css11',
      component: () => import('@/views/css11')
    },
    {
      path: '/css12',
      name: 'css12',
      component: () => import('@/views/css12')
    },
    {
      path: '/css13',
      name: 'css13',
      component: () => import('@/views/css13')
    },
    {
      path: '/css14',
      name: 'css14',
      component: () => import('@/views/css14')
    },
    {
      path: '/css15',
      name: 'css15',
      component: () => import('@/views/css15')
    },
    {
      path: '/css16',
      name: 'css16',
      component: () => import('@/views/css16')
    }
  ]
})
