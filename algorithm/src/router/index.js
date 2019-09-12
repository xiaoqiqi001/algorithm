import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import maze from '@/components/maze'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'maze',
      component: maze
    }
  ]
})
