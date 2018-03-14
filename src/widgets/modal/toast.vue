<style lang="scss" scoped>

.v-toast{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  <div class="v-toast" v-show="show">
    <div class="v-toast-content" :style="sizeStyle">
      <div v-html="context"></div>
    </div>
    <div class="v-bg">
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
