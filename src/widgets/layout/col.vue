
<script>
export default {
  name: 'one-col',

  functional: true,

  props: {
    grid: {
      type: [Number, String],
      default: 12
    }
  },

  render (h, context) {
    const {grid} = context.props
    return h(
      'div',
      {
        ...context.data,
        class: [
          'one-col',
          `one-col-${grid}`
        ]
      },
      context.children
    )
  }
}
</script>

<style lang="less">
.one-col{
  display: flex;
  flex-wrap: wrap;
}
.generate-columns(@n, @i: 1) when (@i =< @n) {
  .one-col-@{i} {
    width: 100% * @i / (@n - 1);
  }
  .generate-columns(@n, (@i + 1));
}
@num: 25;
.generate-columns(@num);
</style>
