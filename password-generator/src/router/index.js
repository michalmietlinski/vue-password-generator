import Vue from 'vue'
import Router from 'vue-router'
import Formcontainer from '@/components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Formcontainer',
      component: Formcontainer
    }
  ]
})
