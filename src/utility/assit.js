'use strict'

export default {
  typeOf (obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
  },

  camelcaseToHyphen (str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  },

  debounce (fn, delay) {
    let timer
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, delay)
    }
  },

  throttle (fn, threshhold, scope) {
    threshhold || (threshhold = 250)
    let last
    let deferTimer
    return (...args) => {
      const context = scope || this
      const now = Date.now()
      if (last && now < last + threshhold) {
        clearTimeout(deferTimer)
        deferTimer = setTimeout(() => {
          last = now
          fn.apply(context, args)
        }, threshhold)
      } else {
        last = now
        fn.apply(context, args)
      }
    }
  },

  getNumFromRange (val, min, max) {
    if (typeof val === 'number') {
      return val < min ? min : val > max ? max : val
    } else {
      return min
    }
  }
}
