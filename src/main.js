import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style/common/base.css'
// import './style/common/layout.less'
// import './style/common/base.css'
// import demo from './common/demo.js'

import one from './widget'
// import one from '../dist/build.js'
import infoTable from './common/table'

// import hljs from 'highlight.js'
// import 'highlight.js/styles/atom-one-dark.css'
// window.hljs = hljs

Vue.use(one)
Vue.use(infoTable)
Vue.config.productionTip = false

// /* eslint-disable no-new */
const app = new Vue({
  router,
  render: h => h(App)
})
app.$mount('#app')
