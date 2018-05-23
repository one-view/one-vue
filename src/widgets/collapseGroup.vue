<template lang="html">
  <div class="one-collapse-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'one-collapse-group',
  data () {
    return {
      idx: 0
    }
  },
  props: {
    accordion: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeAll () {
      this.$children.forEach(child => {
        child.show = false
      })
    }
  },
  mounted () {
  },
  install (Vue) {
    Vue.component(this.name, this)
  }
}
</script>

<style lang="scss">
</style>
