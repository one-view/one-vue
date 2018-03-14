import Vue from 'vue'
import Router from 'vue-router'

import Main from '../pages/main'
import menu from '../pages/menu/data'

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
for (let key in menu) {
  menu[key].links.forEach(item => {
    let name = item.toLowerCase()
    router.routes.push({
      path: `/${item}`,
      component: () => import(`../pages/${key}/${name}`)
    })
  })
}

export default new Router(router)
