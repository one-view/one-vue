import Vue from 'vue'
import Router from 'vue-router'

import Main from '../pages/main'
import menu from './menu'

Vue.use(Router)

const router = {
  routes: [
    { path: '/', component: Main }
  ]
}

/**
 *  和 menu 公用一个数据，统一处理路由格式
 * @param  {[type]} let [description]
 * @return {[type]}     [description]
 */
menu.forEach(item => {
  item.children && item.children.forEach(it => {
    router.routes.push({
      path: it.value,
      component: () => import(`../pages${item.value}/${it.label}`)
    })
  })
})

export default new Router(router)
