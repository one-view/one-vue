'use strict'

  /**
   * 节点是是否包含
   * @param  {[type]} el    [description]
   * @param  {[type]} child [description]
   * @return {[type]}       [description]
   */
export function includes (el, child) {
  if (el) {
    return el === child || el.contains(child)
  } else {
    return false
  }
}

export function contains (el, child) {
  return el !== child && el.contains(child)
}

export function hasClass (el, className) {
  if (el.classList) {
    el.classList.contains(className)
  } else {
    new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className)
  }
}

export function addClass (el, className) {
  if (el.classList) {
    el.classList.add(className)
  } else {
    el.className += ' ' + className
  }
}

export function removeClass (el, className) {
  if (el.classList) {
    el.classList.remove(className)
  } else {
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
  }
}

export function scrollTop (el, from = 0, to, duration = 500) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
              return window.setTimeout(callback, 1000 / 60)
            }
        )
  }
  const difference = Math.abs(from - to)
  const step = Math.ceil(difference / duration * 50)

  function scroll (start, end, step) {
    if (start === end) return

    let d = (start + step > end) ? end : start + step
    if (start > end) {
      d = (start - step < end) ? end : start - step
    }

    if (el === window) {
      window.scrollTo(d, d)
    } else {
      el.scrollTop = d
    }
    window.requestAnimationFrame(() => scroll(d, end, step))
  }
  scroll(from, to, step)
}
