import Vue from 'vue'
import App from './App.vue'
import router from './router'
import demo from './common/demo.js'
import './style/app.scss'

import one from './widget'
// import * as oneVue from '../dist/build.js'
// import CodeSnippet from '@portal/one-code-snippet'
import infoTable from './common/table'

import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
window.hljs = hljs

Vue.use(one)
console.log(demo)
console.log(one)
Vue.use(infoTable)
Vue.config.productionTip = false

// /* eslint-disable no-new */
const app = new Vue({
  router,
  render: h => h(App)
})
app.$mount('#app')
