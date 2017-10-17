import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Solicitud from '@/components/Solicitud/Solicitud'
import Notifica from '@/components/Notifica/Notifica'
import Desembolso from '@/components/Desembolso/Desembolso'
import Liquida from '@/components/Liquida/Liquida'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/solicitud',
      name: 'Solicitud',
      component: Solicitud
    },
    {
      path: '/notifica',
      name: 'Notifica',
      component: Notifica
    },
    {
      path: '/desembolso',
      name: 'Desembolso',
      component: Desembolso
    },
    {
      path: '/liquida',
      name: 'Liquida',
      component: Liquida
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  }
})
