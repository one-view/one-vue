<style lang="less" scoped>
.one-tip{
  .one-modal-title {
      text-align: center;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #eee;
      width: 100%;
  }
}
</style>

<template>
    <Modal class="one-tip" width="400px" :visible="show" :center="true" :is-bg-clickable="false">
      <template slot="body">
        <div class="one-modal-utility">
            <div class="one-modal-title">提示</div>
            <div class="one-modal-wrap">
              <div class="one-modal-wrap-cont">
                <p v-if="txt" v-html="txt"></p>
              </div>
            </div>
        </div>
      </template>
    </Modal>
</template>

<script>

import Basic from './basic'
import Modal from './modal'

let timer = null
export default {
  name: 'one-tip',
  mixins: [Basic],
  data () {
    return {
      txt: this.text
    }
  },
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  components: {
    Modal
  },
  methods: {
    open ({text = '', time = 2000, callback}) {
      this.show = true
      this.txt = text
      timer = setTimeout(() => {
        timer = null
        callback && callback()
        this.show = false
      }, time)
    }
  }
}

</script>
