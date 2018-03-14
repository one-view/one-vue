<template>
<div class="one-collapse" :class="[activeCls]">
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
    }
  },
  props: {
    name: {
      type: [String, Number],
      default () {
        return this._uid
      }
    },
    idx: {
      type: Number,
      default: 0
    }
  },
  methods: {
    toggle () {
      let currentShow = this.show
      let {closeAll, accordion} = this.$parent
      if (accordion) {
        closeAll && closeAll()
      }
      this.show = !currentShow
      let idx = this.childIndex
      this.$emit('collapse', idx, this)
      this.$parent.$emit('collapse', idx)
    }
  }
}

</script>

<style lang="scss" scoped>

.one-collapse{
  &-head{
    padding: 12px;
    position: relative;
  }
  &-body{
    & > .one-collapse {
      // padding-left: 20px;
    }
  }
  &-active{
    & > .one-collapse-head {
      .one-collapse-icon-arrow{
        transform: rotate(135deg);
      }
    }
  }
}
.one-collapse-icon-arrow{
  $w: 8px;
  width: $w;
  height: $w;
  position: absolute;
  transform: rotate(45deg);
  transition: transform .3s ease;
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
  right: 16px;
  top: 16px;
}

</style>
