<style lang="scss">
.one-alert {
  .one-modal-control {
      .one-btn-ok {
          width: 100%;
          color: #3b62c7;
      }
  }
}

</style>

<template>
<Modal class="one-alert" width="400px" :visible="show" :center="true" :is-bg-clickable="true" @toggle="value => this.show = value">
  <template slot="body">
    <div class="one-modal-utility">
        <div class="one-modal-wrap">
          <div class="one-modal-wrap-cont" v-html="txt">
          </div>
        </div>
        <div class="one-modal-control cf">
            <a class="one-btn one-btn-ok" @click="ok">{{ textOK }}</a>
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
    textOK: {
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
    ok () {
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
