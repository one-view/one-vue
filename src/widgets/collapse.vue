<style lang="scss" scoped>

.one-collapse{
  &-head{
    padding: 10px;
    position: relative;
    font-size: 15px;
  }
  &-body{
    // & > .one-collapse {}
  }
  &-active{
    & > .one-collapse-head {
      .one-collapse-icon-arrow{
        transform: rotate(135deg);
      }
    }
  }
  &.ui-dark{
    background-color: #31394a;
    color: #fff;
    .one-collapse-body{
      background-color: #202839;
    }
    .one-collapse-icon-arrow{
      border-color: #fff;
    }
  }
  &.ui-light{
    .one-collapse-head{
      border: 1px solid #ddd;
    }
    .one-collapse-body{
      border: 1px solid #ddd;
      border-top: none;
    }
    .one-collapse-icon-arrow{
      border-color: #ccc;
    }
  }
}
.one-collapse-icon-arrow{
  $d: 8px;
  width: $d;
  height: $d;
  position: absolute;
  transform: rotate(45deg);
  transition: transform .3s ease;
  border-top: 1px solid #eee;
  border-right: 1px solid #eee;
  right: 16px;
  top: 16px;
}

</style>

<template>
<div class="one-collapse" :class="[activeCls, uiCls]">
  <div class="one-collapse-head" @click="toggle">
    <span>{{ name }}</span>
    <i class="one-collapse-icon-arrow"></i>
  </div>
  <transition-collapse>
    <div class="one-collapse-body" v-show="active">
      <slot></slot>
    </div>
  </transition-collapse>
</div>
</template>

<script>
const className = 'one-collapse'
export default {
  name: className,
  data () {
    return {
      show: false
    }
  },
  computed: {
    active () {
      return this.show
    },
    activeCls () {
      return this.active ? className + '-active' : className + '-inactive'
    },
    childIndex () {
      return this.$parent.$children.indexOf(this)
    },
    uiCls () {
      return 'ui-' + (this.ui || 'default')
    }
  },
  props: {
    name: {
      type: [String, Number],
      default () {
        return this._uid
      }
    },
    ui: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    toggle () {
      let currentShow = this.show
      let {accordion, closeAll} = this.$parent
      if (accordion) {
        closeAll && closeAll()
      }
      this.show = !currentShow
      let idx = this.childIndex
      this.$emit('collapse', idx, this)
      this.$parent.$emit('collapse', idx)
    }
  },
  install (Vue) {
    Vue.component(this.name, this)
  }
}

</script>
