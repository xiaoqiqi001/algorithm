import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import maze from '@/components/maze'
import mazeSmall from '@/components/maze_small'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'maze',
      component: maze
    },
    {
      path: '/mazeSmall',
      name: 'mazeSmall',
      component: mazeSmall
    }
  ]
})
