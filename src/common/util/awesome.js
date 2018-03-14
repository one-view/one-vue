export default {
  dispatch (vdom, componentName, eventName, params) {
    let parent = vdom.$parent || vdom.$root
    let name = parent.$options.name

    while (parent && (!name || name !== componentName)) {
      parent = parent.$parent

      if (parent) {
        name = parent.$options.name
      }
    }
    if (parent) {
      parent.$emit.apply(parent, [eventName].concat(params))
    }
  }
}