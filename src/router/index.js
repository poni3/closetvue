import Vue from 'vue'
import Router from 'vue-router'
import helloVue from '@/components/helloVue'
import helloWorld from '@/components/helloWorld'
import dashBord from '@/components/dashBord'
import sideBar from '@/components/sideBar'
import imgback from '@/components/imgBack'
import samBord from '@/components/samBord'

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
    },
    {
      path: '/dashBord',
      name: 'dashBord',
      component: sideBar,
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /user/:id is matched
        { path: '', component: dashBord }
      ]
    },
    {
      path: '/img',
      name: 'img',
      component: sideBar,
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /user/:id is matched
        { path: '', component: imgback }
      ]
    },
    {
      path: '/samBord',
      name: 'samBord',
      component: sideBar,
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /user/:id is matched
        { path: '', component: samBord }
      ]
    }
  ]
})
