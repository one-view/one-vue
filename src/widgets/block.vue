<style lang="scss" scoped>
.one-block{
    display: block;
    position: relative;
    *{
        box-sizing: border-box;
    }
    $h: 38px;
    padding: 8px 0;
    transition: background .2s ease;
    .one-part,
    .one-block-title{
        float: left;
        padding: 0 12px;
        line-height: $h;
        .l-title{
            font-weight: 500;
            height: $h;
            color: #666;
        }
        .com-err-font{
            font-weight: 500;
            height: $h;
        }
    }
    &:hover{
        background-color: #fcfcfc;
    }
    input{
        height: $h;
        padding: 0 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        outline: none;
        transition: border .2s ease;
        &:focus{
            border-color: #488EF1;
        }
    }
}
</style>

<template>
<div class="one-block cf">
    <div class="one-block-title" v-if="title"
        :style="{width: width}">
        <span class="l-title">{{ title }}</span>
        <span v-if="isRequire" class="com-err-font">*</span>
    </div>
    <div class="one-part">
        <slot></slot>
    </div>
</div>

</template>

<script>
  import awesome from '../common/util/awesome'

  export default{
    name: 'one-block',
    props: {
      name: {
        type: String,
        default: ''
      },
      require: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: 'auto'
      }
    },
    computed: {
      isRequire () {
        return this.REQUIRE || (this.require && this.title)
      }
    },
    data () {
      return {
        TYPE: 'block',
        REQUIRE: false
      }
    },
    methods: {
      setREQUIRE (val) {
        this.REQUIRE = !!val
      }
    },
    mounted () {
      if (this.name) {
        // 判断自己是否有名称, 并添加在验证器的block中
        awesome.dispatch(this, 'one-validator', 'blockItemAdd', {name: this.name, el: this})
      }
    }
  }
</script>
