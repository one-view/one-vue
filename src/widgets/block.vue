<style lang="less">
@h: 32px;
.one-block{
    display: flex;
    position: relative;
    *{
        box-sizing: border-box;
    }
    transition: background .2s ease;
    .one-block-title,
    .one-part{
        float: left;
        padding: 0 12px;
    }
    .one-block-title{
        span{
            height: @h;
            line-height: @h;
            font-weight: 500;
            color: #666;
            font-size: 14px;
        }
    }
    .one-part{
        line-height: @h;
    }
    input{
        height: @h;
        padding: 0 10px;
        border: 1px solid #ddd;
        border-radius: 3px;
        outline: none;
        transition: border .2s ease;
        font-size: 14px;
        &:focus{
            border:1px solid #488EF1 !important;
            box-shadow: none !important;
        }
    }
}
</style>

<template>
<div class="one-block">
    <div class="one-block-title" :style="{width: width}" v-if="title">
        <span>{{ title }}</span>
    </div>
    <div class="one-part" :style="marginStyle">
        <slot></slot>
    </div>
</div>

</template>

<script>

  export default {
    name: 'one-block',
    props: {
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
        marginStyle () {
            if (!this.title && this.width !== 'auto') {
                return {
                    marginLeft: this.width
                }
            }
        }
    },
    install (Vue) {
      Vue.component(this.name, this)
    }
  }
</script>
