<template>
    <transition name="one-msg-fade">
        <div class="one-msg">
            <div class="content">
                {{msg}}
            </div>
        </div>
    </transition>
</template>

<script>
  export default {
    name: 'one-msg',
    data () {
      return {
        timer: -1
      }
    },
    methods: {
      destroy () {
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
      }
    },
    mounted () {
      this.timer = window.setTimeout(this.destroy, this.time)
    },
    beforeDestroy () {
      window.clearTimeout(this.timer)
    }
  }
</script>

<style scoped lang="scss">
    .one-msg{
        display: block;
        position: fixed;
        top: 10px;
        left: 0;
        width: 100%;
        z-index: 19920904;
        .content{
            max-width: 400px;
            margin: 0 auto;
            background-color: #3e7cf4;
            line-height: 38px;
            border-radius: 2px;
        }
    }
    .one-msg-fade-enter,
    .one-msg-fade-leave-active {
        opacity: 0;
        transform: translate(-50%, -100%);
    }
</style>
