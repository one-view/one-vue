
<script>
export default {
  name: 'one-row',
  functional: true,
  render (h, context) {
    return h(
      'div',
      {
        class: [
          'one-row'
        ]
      },
      context.children
    )
  }
}
</script>

<style lang="less">
.one-row{
  display: flex;
  flex-wrap: wrap;
  width: 100%
}
</style>
