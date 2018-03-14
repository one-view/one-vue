export default {
  functional: true,
  props: {
    row: Object,
    render: Function,
    index: Number,
    head: {
      type: Object,
      default: null
    }
  },
  render: (h, ctx) => {
    return ctx.props.render(
      h,
      { index: ctx.props.index, row: ctx.props.row, column: ctx.props.head }
    )
  }
}
