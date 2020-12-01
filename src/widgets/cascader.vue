<template lang="html">
  <div class="one-cascader">
    <one-select :option="option" v-model="parent" :disable="disable" @select="select" :placeholder="placeholder" :proxy-name="proxyName"></one-select>
    <one-select :option="childOption" v-model="child" :disable="disable" @select="select" :proxy-name="proxyName"></one-select>
  </div>
</template>

<script>
/** TODO: set second value if default */
export default {
  name: 'one-cascader',
  data () {
    return {
      parent: this.value[0],
      child: this.value[1]
    }
  },
  props: {
    value: {
      type: Array,
      default: () => [0,0]
    },
    option: {
      type: Array,
      default: () => []
    },
    disable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    proxyName: {
      type: Object,
      default () {
        return {
          label: 'label',
          value: 'value',
          children: 'children'
        }
      }
    }
  },
  watch: {
    value (newValue) {
      this.parent = newValue[0]
      this.child = newValue[1]
    },
  },
  computed: {
    childOption () {
      let {value, children} = this.proxyName
      let opts = this.option.find(item => {
        return item[value] === this.parent
      })
      opts = opts && opts[children] || []
      this.child = opts.length && opts[0][value] || 0
      return opts
    }
  },
  methods: {
    select () {
      this.$emit('input', [this.parent, this.child])
      this.$emit('select', [this.parent, this.child])
    }
  },
  install (Vue) {
    Vue.component(this.name, this)
  }
}
</script>

<style lang="less">
</style>
