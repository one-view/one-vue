<style lang="less">
  .transition-collapse {
    transition: opacity 0.2s ease, height 0.25s ease, padding-top 0.25s ease, padding-bottom 0.25s ease;
  }
</style>

<script>
import {addClass, removeClass} from '../utility/dom'

const className = 'transition-collapse'

const setStyle = (el, opt) => {
  Object.assign(el, opt)
}

const listeners = {
  beforeEnter (el) {
    addClass(el, className)
    let {paddingTop, paddingBottom, overflow} = getComputedStyle(el)
    Object.assign(el.dataset, {
      paddingTop,
      paddingBottom,
      overflow
    })
    setStyle(el.style, {
      height: '0',
      opacity: 0,
      paddingTop: 0,
      paddingBottom: 0
    })
  },
  enter (el) {
    /**
     * - force to redraw/repaint for css3 transition
     * - box-sizing: border-box, height need add padding
     */
    let {paddingTop, paddingBottom} = el.dataset
    let paddingVertical = parseInt(paddingTop, 10) + parseInt(paddingBottom, 10)
    setStyle(el.style, {
      paddingTop,
      paddingBottom,
      height: el.scrollHeight + paddingVertical + 'px',
      opacity: 1,
      overflow: 'hidden'
    })
  },
  afterEnter (el) {
    removeClass(el, className)
    let {overflow} = el.dataset
    setStyle(el.style, {
      overflow,
      height: '',
      opacity: '',
      paddingTop: '',
      paddingBottom: ''
    })
  },
  beforeLeave (el) {
    addClass(el, className)
    let {paddingTop, paddingBottom, overflow} = getComputedStyle(el)
    Object.assign(el.dataset, {
      overflow
    })
    let paddingVertical = parseInt(paddingTop, 10) + parseInt(paddingBottom, 10)
    setStyle(el.style, {
      paddingTop,
      paddingBottom,
      height: el.scrollHeight + paddingVertical + 'px',
      opacity: 1,
      overflow: 'hidden'
    })
  },
  leave (el) {
    // force to redraw/repaint for css3 transition
    console.log(el.scrollHeight)
    setStyle(el.style, {
      height: 0,
      opacity: 0,
      paddingTop: 0,
      paddingBottom: 0
    })
  },
  afterLeave (el) {
    removeClass(el, className)
    let {overflow} = el.dataset
    setStyle(el.style, {
      overflow,
      height: '',
      opacity: '',
      paddingTop: '',
      paddingBottom: ''
    })
  }
}

export default {
  name: 'transitionCollapse',
  functional: true,
  render (createElement, context) {
    let {children} = context
    return createElement('transition', {
      on: listeners
    }, children)
  },
  install (Vue) {
    Vue.component(this.name, this)
  }
}
</script>
