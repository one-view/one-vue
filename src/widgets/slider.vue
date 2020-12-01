<template lang="html">
  <div ref="oneslider" :class="['one-slider',sliderClass]" @mousedown="onDragStart" :style="sizeStyle">
    <div class="one-slider-slot one-slider-slot-base"></div>
    <div class="one-slider-slot one-slider-slot-acitve" :style="slotActiveStyle"></div>
    <div class="one-slider-pointer" :style="pointStyle"></div>
  </div>
</template>

<script>

const getElSizePosition = el => {
  return {
    width: el.clientWidth,
    height: el.clientHeight,
    left: el.getBoundingClientRect().left + window.pageXOffset,
    top: el.getBoundingClientRect().top + window.pageYOffset
  }
}
// 返回一个在范围中的数值
const getNumFromRange = (val, min, max) => {
  if (typeof val === 'number') {
    return val < min ? min : val > max ? max : val
  } else {
    return min
  }
}

export default {
  name: 'one-slider',
  data () {
    return {
      val: getNumFromRange(this.value, 0, this.max),
      elSizePostion: {}
    }
  },
  props: {
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: [Number, String],
      default: 0
    },
    mode: {
      type: String,
      default: 'horizontal'
    },
    max: {
      type: Number,
      default: 100
    },
    size: {
      type: [String],
      default: '200px'
    }
  },
  // props 传入变化后监听
  watch: {
    value (val) {
      this.val = getNumFromRange(val, 0, this.max)
    }
  },
  computed: {
    vertical () {
      return this.mode === 'vertical'
    },
    pointStyle () {
      let key = this.vertical ? 'bottom' : 'left'
      return {
        [key]: `${this.val / this.max * 100}%`
      }
    },
    sizeStyle () {
      let key = this.vertical ? 'height' : 'width'
      return {
        [key]: this.size
      }
    },
    slotActiveStyle () {
      let key = this.vertical ? 'height' : 'width'
      return {
        [key]: `${this.val / this.max * 100}%`
      }
    },
    sliderClass () {
      return this.vertical ? 'one-slider-vertical' : 'one-slider-horizontal'
    }
  },
  methods: {
    resetOffset () {
      let $el = this.$refs.oneslider
      let {width, height, left, top} = getElSizePosition($el)
      this.elSizePostion = {
        width,
        height,
        left,
        top
      }
    },
    onDragStart (e) {
      this.isDragging = true
      this.resetOffset()
      this.onDragging(e)
      this.bindGlobalEvent()
    },
    onDragging (e) {
      let {pageX, pageY} = e
      let {width, height, left, top} = this.elSizePostion

      left = pageX - left
      top = pageY - top

      let percent = this.vertical ? (1 - top / height) * this.max : left / width * this.max
      percent = percent < 0 ? 0 : percent > this.max ? this.max : parseFloat(percent.toFixed(4))
      console.log(left, width, percent, this.max)
      percent = this.handleStep(percent)

      this.val = percent
      this.$emit('change', percent)
      this.$emit('input', percent)
    },
    handleStep (percent) {
      let value = percent
      let step = this.step
      if (step) {
        // * 100 / 100 控制精度
        value = Math.floor(percent / step) * 100 * step / 100
      }
      return value
    },
    onDragEnd () {
      this.isDragging = false
      this.unbindGlobalEvent()
    },
    bindGlobalEvent () {
      window.addEventListener('mousemove', this.onDragging)
      window.addEventListener('mouseup', this.onDragEnd)
      window.addEventListener('contextmenu', this.onDragEnd)
    },
    unbindGlobalEvent () {
      window.removeEventListener('mousemove', this.onDragging)
      window.removeEventListener('mouseup', this.onDragEnd)
      window.removeEventListener('contextmenu', this.onDragEnd)
    }
  },
  mounted () {
  },
  install (Vue) {
    Vue.component(this.name, this)
  }
}
</script>

<style lang="less">
@h: 3px;
@pointSize: 16px;
@color: #3449d7;
.one-slider{
  position: relative;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  &-slot{
    background-color: #eee;
    position: absolute;
  }
  &-slot-acitve{
    background-color: @color;
  }
  &-pointer{
    position: absolute;
    width: @pointSize;
    height: @pointSize;
    background-color: @color;
    border-radius: @pointSize;
    &:hover{
      box-shadow: 0 0 5px @color;
    }
  }
  &-horizontal{
    // height: 100%;
    .one-slider{
      &-slot{
        height: @h;
        width: 100%;
        top: -@h / 2
      }
      &-pointer{
        left: 0;
        top: -@pointSize / 2;
        transform: translateX(-@pointSize / 2);
      }
    }
  }
  &-vertical{
    width: 100%;
    height: 256px;
    .one-slider{
      &-slot{
        width: @h;
        height: 100%;
        bottom: 0;
      }
      &-pointer{
        left: (@h - @pointSize) / 2;
        bottom: 0;
        transform: translateY(@pointSize/2);
      }
    }
  }
}
</style>
