import modals from './widgets/modal'
// import {msg, toast} from './widgets/notify'

import codeSnippet from './widgets/codeSnippet'
import collapse from './widgets/collapse'
import collapseGroup from './widgets/collapseGroup'
import transitionCollapse from './widgets/transitionCollapse'
import block from './widgets/block'
import btn from './widgets/btn'
import radio from './widgets/radio'
import {checkbox, checkboxs} from './widgets/checkbox'
import calendar from './widgets/calendar'
import datePicker from './widgets/datePicker'
import textarea from './widgets/textarea'
import select from './widgets/select'
import cascader from './widgets/cascader'
import slider from './widgets/slider'
import pagination from './widgets/pagination'
import input from './widgets/input'

// 注册 Vue.use 调用方法
const install = Vue => {
  Vue.component(collapse.name, collapse)
  Vue.component(collapseGroup.name, collapseGroup)
  Vue.component(transitionCollapse.name, transitionCollapse)
  Vue.component(codeSnippet.name, codeSnippet)
  Vue.component(block.name, block)
  Vue.component(btn.name, btn)
  Vue.component(radio.name, radio)
  Vue.component(checkbox.name, checkbox)
  Vue.component(checkboxs.name, checkboxs)
  Vue.component(datePicker.name, datePicker)
  Vue.component(calendar.name, calendar)
  Vue.component(textarea.name, textarea)
  Vue.component(select.name, select)
  Vue.component(cascader.name, cascader)
  Vue.component(slider.name, slider)
  Vue.component(pagination.name, pagination)
  Vue.component(modals.modal.name, modals.modal)
  Vue.component(input.name, input)

  // 挂载实例到dom
  const globalModal = ['confirm', 'tip', 'alert', 'toast']
  globalModal.forEach(item => {
    console.log(item)
    let instance = Vue.prototype[`$${item}`] = new Vue(modals[item]).$mount()
    document.body.appendChild(instance.$el)
  })
}

export default {
  install
}
