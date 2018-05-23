import awesome from '../util/awesome'

export default {
  mounted () {
    if (this.name) {
      // 判断自己是否有名称, 并添加在验证器的form中
      awesome.dispatch(this, 'one-validator', 'formItemAdd', {name: this.name, el: this})
    } else {
      // 判断父元素中是否有block，并且block是否有名称
      let parent = this.$parent || this.$root
      let type = parent.TYPE
      while (parent && (!type || type !== 'block')) {
        parent = parent.$parent
        if (parent) {
          type = parent.TYPE
        }
      }
      if (parent && parent.name) {
        awesome.dispatch(this, 'one-validator', 'formItemAdd', {name: parent.name, el: this})
      }
    }
  }
}
