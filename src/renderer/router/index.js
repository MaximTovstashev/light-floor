import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'workspace',
      component: require('@/components/Workspace').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
