import Vue from 'vue'
import msg from './msg'

const createInstance = () => {
  // 创建一个相关的vue实例
  const instance = new Vue({
    render (h) {
      return h(msg, {
      })
    }
  })
  // 挂载实例到dom
  const component = instance().$mount()
  document.body.appendChild(component.$el)
}

const components = [
  'modal',
  'confirm',
  'alert',
  'tip'
]

const comps = {}

components.forEach(name => {
  const Component = require(`./${name}`)
  Component.install = Vue => {
    Vue.component(Component.name, Component)
  }
  comps[name] = Component
})

export default {
  comps,
  $msg: (config) => {
    createInstance()
  }
}
