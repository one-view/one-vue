<style lang="less">
.text-danger{
  display: inline-block;
  padding: 0 5px;
  &.invalid {
    color:#e45353;
    background-color: #fae9e9;
  }
  &.valid {
    color:#2e9b46;
    background-color: #e9faed;
  }
}
</style>

<template>
    <div class="one-form">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
// import {FormValidator} from '@portal/validator'

export default {
  data () {
      return {
          validator: {},
          warning: {}
      }
  },
  name: 'one-form-validator',
  props: {
    form: {
        type: Object,
        default: () => {}
    },
    rule: {
        type: Object,
        default: () => {}
    }
  },
  computed: {
      isValid () {
          let isValid = this.validator.isValid(this.form)
          // 更新所有验证信息
          for (let name in this.rule) {
              this.warning[name].status = this.validator.status[name]
          }
          return isValid
      }
  },
  methods: {
      // 创建验证提示占位
      createWarning () {
          let status = this.validator.status
          for (let name in this.rule) {
              let $validatorinfo = new Vue({
                  data () {
                    return {
                      status: status[name]
                    }
                  },
                  name: 'one-validator-info',
                  template: `<span class="text-danger" :class="[status.isValid ? 'valid' : 'invalid']">{{ status.isValid ? '正确' : status.warning }}</span>`
              }).$mount()
              this.warning[name] = $validatorinfo
              let $target = this.$el.querySelector(`[validname="${name}"]`)
              $target && $target.parentNode.appendChild($validatorinfo.$el)
          }
      },
      // 验证单个字段
      validate (name) {
          let value = this.form[name]
          this.validator.validate(name, value)
          this.warning[name].status = this.validator.status[name]
      }
  },
  mounted () {
    // this.validator = new FormValidator(this.rule)
    // this.createWarning()
    console.log(this)
  }
}
</script>
