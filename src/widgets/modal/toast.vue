<style lang="less" scoped>

.one-toast{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  &-content{
    // transform: translateX(-50%) translateY(-50%);
    min-width: 200px;
    min-height: 120px;
    font-size: 18px;
    padding: 30px;
    background-color: rgba(20,20,20,.8);
    color: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>

<template>

<transition name="fade">
  <div class="one-toast" v-show="show">
    <div class="one-toast-content" :style="sizeStyle">
      <div v-html="context"></div>
    </div>
  </div>
</transition>

</template>

<script>

export default {
  name: 'one-toast',
  data () {
    return {
      show: false,
      context: '',
      width: ''
    }
  },
  computed: {
    sizeStyle () {
      return {
        width: this.width
      }
    }
  },
  methods: {
    open ({text, time = 1500, width = 'auto', callback}) {
      this.show = true
      this.context = text
      this.width = width
      setTimeout(() => {
        this.show = false
        callback && callback()
      }, time)
    }
  }
}

</script>
