
<script>
export default {
  name: 'col',
  functional: true,
  render (createElement, context) {
    let {children, props} = context
    return createElement('div', {
      attrs: {
        class: 'col col-' + props.grid
      }
    }, children)
  },
  props: {
    grid: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
</style>
