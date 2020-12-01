<style lang="less">
.one-form{
  display: flex;
  flex-wrap: wrap;
  &.one-form-row {
    flex-direction: row;
  }
  &.one-form-col {
    flex-direction: column;
  }
  .one-block {
    margin: 10px 0;
  }
}

</style>

<template>
<div class="one-form" :class="classNames">
  <slot></slot>
</div>

</template>

<script>

  export default {
    name: 'one-form',
    props: {
      inline: {
        type: Boolean,
        default: false
      },
      data: {
        type: Object
      }
    },
    computed: {
      classNames () {
        const names = []
        names.push(`one-form-${this.inline ? 'row' : 'col'}`)
        return names
      }
    },
    install (Vue) {
      Vue.component(this.name, this)
    }
  }
</script>
