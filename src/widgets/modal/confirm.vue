<style lang="scss" scoped>
.one-confirm {
  .one-modal-control {
    .one-btn{
      width: 50%;
    }
    .one-btn-ok {
      color: #3b62c7;
    }
    .one-btn-cancel {
      color: #bbb;
    }
  }
}
</style>

<template>

<Modal class="one-confirm" width="400px" :visible="show" :center="true" :is-bg-clickable="isBgClickable" :bg-color="bgColor" @toggle="value => this.show = value">
    <template slot="body">
      <div class="one-modal-utility">
          <div class="one-modal-wrap">
              <div class="one-modal-wrap-cont">
                  <p v-if="txt" v-html="txt"></p>
                  <slot v-else></slot>
              </div>
          </div>
          <div class="one-modal-control cf">
              <a class="one-btn one-btn-ok" @click="ok">{{ textConfirm }}</a>
              <a class="one-btn one-btn-cancel" @click="cancel">{{ textCancel }}</a>
          </div>
      </div>
    </template>
</Modal>

</template>

<script>

import Basic from './basic'
import Modal from './modal'

export default {
  name: 'one-confirm',
  data () {
    return {
      confirmCallback: this.confirm,
      txt: this.text
    }
  },
  mixins: [Basic],

  props: {
    textConfirm: {
      type: String,
      default: 'OK'
    },
    textCancel: {
      type: String,
      default: 'Cancel'
    },
    text: {
      type: String,
      default: ''
    },
    confirm: {
      type: Function,
      default: () => {}
    }
  },

  methods: {
    ok () {
      this.show = false
      this.confirmCallback(true)
    },
    cancel () {
      this.show = false
      this.confirmCallback(false)
    },
    open ({text, callback}) {
      if (text) {
        this.txt = text
      }
      this.show = true
      if (callback) {
        this.confirmCallback = callback
      }
    }
  },
  components: {
    Modal
  }
}
</script>
