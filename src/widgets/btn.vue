<template>
    <button class="one-btn" :class="{disable: disable || loading}" @click="event => $emit('click', event)">
        <i v-if="loading" title="refresh animate-spin" class="loading icon icon-refresh animate-spin"></i>
        <slot></slot>
    </button>
</template>

<script>
  export default {
    name: 'one-btn',
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      disable: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
    .one-btn{
        $green: #49c970;
        $yellow: #ffbf00;
        $blue: #3e7cf4;
        $red: #eb6a51;
        height: auto;
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #c4c4c4;
        color: #1f2d3d;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        /*margin: 0;*/
        user-select: none;
        font-size: 14px;
        padding: 11px 20px;
        border-radius: 2px;
        &:hover{
            color: #409eff;
        }
        // 尺寸
        &.btn-tiny{
            padding: 4px 6px;
            font-size: 12px;
        }
        &.btn-small{
            padding: 9px 15px;
            font-size: 12px;
        }
        &.btn-large{
            padding: 16px 24px;
            font-size: 18px;
        }
        @mixin btnBlockColor($color){
            background-color: $color;
            border-color: $color;
            color: #fff;
            transition: background .2s ease;
            &:hover{
                background-color: $color + #111;
                border-color: $color - #080808;
                color: #fff;
            }
            &:active{
                background-color: $color - #080808;
            }
        }
        @mixin btnLineColor($color){
            background-color: #fff;
            border-color: $color;
            color: $color;
            transition: background .2s ease, color .2s ease;
            &:hover{
                background-color: #f8f8f8;
                color: $color - #222;
            }
            &:active{
                background-color: $color;
                color: #fff;
            }
        }
        &.btn-success{
            @include btnBlockColor($green);
        }
        &.btn-danger{
            @include btnBlockColor($red);
        }
        &.btn-warn{
            @include btnBlockColor($yellow);
        }
        &.btn-info{
            @include btnBlockColor($blue);
        }
        &.btn-line.btn-success{
            @include btnLineColor($green);
        }
        &.btn-line.btn-danger{
            @include btnLineColor($red);
        }
        &.btn-line.btn-warn{
            @include btnLineColor($yellow);
        }
        &.btn-line.btn-info{
            @include btnLineColor($blue);
        }
        &.btn.disable{
            color: #c0c4cc;
            cursor: not-allowed;
            background-color: #fff;
            border-color: #ebeef5;
        }
        &.btn-success.disable{
            color: #fff;
            background-color: #b9ef9f;
            border-color: #b9ef9f;
        }
        &.btn-info.disable{
            color: #fff;
            background-color: #b1d6fb;
            border-color: #b1d6fb;
        }
        &.btn-warn.disable{
            color: #fff;
            background-color: #d7f78b;
            border-color: #d7f78b;
        }
        &.btn-danger.disable{
            color: #fff;
            background-color: #f5bcbc;
            border-color: #f5bcbc;
        }
        &.btn-line.disable{
            color: #c0c4cc;
            cursor: not-allowed;
            background-color: #fff;
            border-color: #ebeef5;
            &:hover{
                color: #c0c4cc;
                cursor: not-allowed;
                background-color: #fff;
                border-color: #ebeef5;
            }
        }
        &.loading{
            margin-left: -8px;
        }
    }
</style>
