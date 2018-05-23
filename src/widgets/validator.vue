<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
  // import Schema from 'async-validator'

  export default {
    name: 'one-validator',
    props: {
      data: {
        type: Object,
        default: () => {}
      },
      rule: {
        type: Object,
        default: () => {}
      },
      validate: {
        type: String,
        default: 'modify'
      }
    },
    data () {
      return {
        err: {},
        validator: {},
        blockItems: [],
        validatorItems: [],
        formItems: []
      }
    },
    watch: {
    },
    methods: {
      // 是否通过验证
      isPass () {
        this.emitAllValidate()
        return !(this.err && Object.keys(this.err).length > 0)
      },
      // 重置
      reset () {
        // 清空错误
        this.err = {}
        // 清空错误痕迹
        this.dispatchAllErr()
      },
      // 创建验证器
      createValidator () {
        // 初始化验证文档
        this.validator = new Schema(this.rule)
      },
      // 触发单个验证
      emitValidate (name) {
        this.validator.validate(this.data, (error, fields) => {
          this.err = JSON.parse(JSON.stringify(fields))
          // 分发错误
          this.dispatchErr(name)
        })
      },
      // 触发全部验证
      emitAllValidate () {
        this.validator.validate(this.data, (error, fields) => {
          this.err = JSON.parse(JSON.stringify(fields))
          // 分发错误
          this.dispatchAllErr()
        })
      },
      // 分发单个错误信息
      dispatchErr (name) {
        for (let i = 0; i < this.validatorItems.length; i++) {
          const item = this.validatorItems[i]
          if (item.name === name) {
            if (this.err && this.err[item.name] && this.err[item.name][0]) {
              const errInfo = this.err[item.name][0].message
              item.el.changeERR && item.el.changeERR(errInfo)
            } else {
              item.el.changeERR && item.el.changeERR()
            }
          }
        }
      },
      // 分发所有错误信息
      dispatchAllErr () {
        this.validatorItems.forEach((item) => {
          if (this.err && this.err[item.name] && this.err[item.name][0]) {
            const errInfo = this.err[item.name][0].message
            item.el.changeERR && item.el.changeERR(errInfo)
          } else {
            item.el.changeERR && item.el.changeERR()
          }
        })
      },
      // 给input绑定事件
      bindForm (name, el) {
        el.$on(this.validate, () => this.emitValidate(name))
      },
      // 给block设置require
      setBlockRequire (name, el) {
        if (this.rule[name] && this.rule[name].required) {
          el.setREQUIRE && el.setREQUIRE(true)
        }
      }
    },
    created () {
      // 添加block
      this.$on('blockItemAdd', ({name, el}) => {
        this.blockItems.push({name, el})
        this.setBlockRequire(name, el)
      })
      // 添加表单元素
      this.$on('formItemAdd', ({name, el}) => {
        this.formItems.push({name, el})
        this.bindForm(name, el)
      })
      // 添加验证器元素
      this.$on('validatorItemAdd', ({name, el}) => {
        this.validatorItems.push({name, el})
      })
    },
    mounted () {
      // 创建验证器
      this.createValidator()
    },
    beforeDestroy () {
      this.formItems.forEach((item) => {
      })
    }
  }
</script>

<style scoped>

</style>
