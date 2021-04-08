<style lang="less">
.one-modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: 99999;
    overflow-y: auto;
    overflow-x: hidden;
    .one-modal-bg {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(55,55,55,.6);
        height: 100%;
    }
    .one-modal-container {
      position: relative;
      margin: 100px auto;
      min-width: 400px;
      height: auto;
      background: #fff;
      border-radius: 5px;
      .modal-head {
        border-bottom: 1px solid #eee;
        padding: 20px;
        line-height: 1;
        color: #333;
      }
      .modal-body {
        padding: 15px;
        text-align: initial;
      }
      .modal-foot{
        border-top: 1px solid #eee;
        padding: 20px;
        text-align: center;
      }
    }
}
.one-modal-center{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<template>
    <transition :name="transitionName">
        <div class="one-modal" v-show="show" :class="{'one-modal-center': center}">
            <div class="one-modal-bg" @click.stop="closeBg" :style="{backgroundColor: bgColor}"></div>
            <div class="one-modal-container" :style="{width: styleWidth}">
                <div class="modal-head" v-if="showHead">
                    <span v-if="title">{{title}}</span>
                    <slot v-else name="head"></slot>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div class="modal-foot" v-if="showFoot">
                    <slot name="foot"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import Basic from './basic'

export default {
  name: 'one-modal',
  props: {
    title: {
      type: String
    },
    width: {
      type: [Number, String],
      default: '70%'
    },
    center: {
      type: Boolean,
      default: false
    }
  },
  mixins: [Basic],
  data () {
    return {
      showHead: false,
      showFoot: false
    }
  },
  computed: {
    styleWidth () {
      return Number(this.width) ? `${this.width}px` : this.width
    }
  },
  mounted () {
    this.showHead = this.$slots.head || this.title
    this.showFoot = this.$slots.foot
  }
}
</script>
