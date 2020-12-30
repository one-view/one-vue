<style lang="less">
.one-alert {
  .one-modal-control {
      .one-btn-confirm {
          width: 100%;
          color: #3b62c7;
      }
  }
}

</style>

<template>
<Modal class="one-alert" width="400px" v-model="show" :center="true" :is-bg-clickable="true">
  <template slot="body">
    <div class="one-modal-utility">
        <div class="one-modal-wrap">
          <div class="one-modal-wrap-cont" v-html="txt">
          </div>
        </div>
        <div class="one-modal-control cf">
            <a class="one-btn one-btn-confirm" @click="confirm">{{ confirmText }}</a>
        </div>
    </div>
  </template>
</Modal>
</template>

<script>
import Basic from './basic'
import Modal from './modal'

export default {
  name: 'one-alert',
  mixins: [Basic],
  data () {
    return {
      txt: this.content
    }
  },
  props: {
    confirmText: {
      type: String,
      default: 'OK'
    },
    content: {
      type: String,
      default: ''
    },
    callback: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    confirm () {
      this.close()
      this.callback()
    },
    open ({text, callback}) {
      this.txt = text
      this.show = true
      if (callback) {
        this.callback = callback
      }
    }
  },
  components: {
    Modal
  }
}
</script>
