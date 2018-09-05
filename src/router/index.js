import Vue from 'vue'
import Router from 'vue-router'
import helloVue from '@/components/helloVue'
import helloWorld from '@/components/helloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'helloVue',
      component: helloVue
    },
    {
      path: '/helloWorld',
      name: 'helloWorld',
      component: helloWorld
    }
  ]
})
