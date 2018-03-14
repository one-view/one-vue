<script>
export default {
  name: 'row',
  functional: true,
  render (createElement, context) {
    let {children} = context
    return createElement('div', {
      attrs: {
        class: 'row'
      }
    }, children)
  }
}
</script>

<style lang="scss">

</style>
