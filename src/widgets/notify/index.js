import Vue from 'vue'
import msg from './msg'
import toast from './toast'

const createMsg = (config) => {
  const theConfig = {msg: '', time: 2000, closed: function () {}}
  if (typeof config === 'string') {
    config = {msg: config}
  }
  Object.assign(theConfig, config)
  // 创建一个相关的vue实例
  const Msg = Vue.extend(msg)
  const instance = new Msg({data: theConfig})
  // 挂载实例到dom
  const component = instance.$mount()
  document.body.appendChild(component.$el)
  return component
}

const createToast = () => {
  // 创建一个相关的vue实例
  const Toast = Vue.extend(toast)
  const instance = new Toast()
  // 挂载实例到dom
  const component = instance.$mount()
  document.body.appendChild(component.$el)
  return component
}

export default {
  msg: createMsg,
  toast: createToast
}
