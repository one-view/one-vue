<template>
    <div class="one-validator-item">
        <div class="com-err-font">
            {{ERR}}
        </div>
    </div>
</template>

<script>
  import awesome from '../common/util/awesome'

  export default {
    name: 'one-validator-item',
    props: {
      name: {
        type: String
      }
    },
    data () {
      return {
        TYPE: 'validator-item',
        ERR: ''
      }
    },
    watch: {
    },
    methods: {
      // 提供外部使用修改错误信息
      changeERR (val) {
        if (val) {
          this.ERR = val
        } else {
          this.ERR = ''
        }
      }
    },
    mounted () {
      if (this.name) {
        // 判断自己是否有名称, 并添加在验证器的form中
        awesome.dispatch(this, 'one-validator', 'validatorItemAdd', {name: this.name, el: this})
      } else {
        // 判断父元素中是否有block，并且block是否有名称
        let parent = this.$parent || this.$root
        let type = parent.TYPE
        while (parent && (!type || type !== 'block')) {
          parent = parent.$parent
          if (parent) {
            type = parent.TYPE
          }
        }
        if (parent) {
          awesome.dispatch(this, 'one-validator', 'validatorItemAdd', {name: parent.name, el: this})
        }
      }
    }
  }
</script>

<style scoped lang="scss">
    .one-validator-item{
    }
</style>
