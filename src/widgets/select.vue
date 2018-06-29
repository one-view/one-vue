<style lang="scss" scoped>
    $h: 32px;
    $blue: #3b62c7;
    $font-size: 14px;
    .one-select{
        position: relative;
        display: inline-block;
        line-height: 1;
        .one-select-content{
            position: relative;
        }
        /* 滚动设置 */
        ::-webkit-scrollbar {
            width: 2px;
            background-color: #f2f2f2;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #bbb;
        }
        /* 滚动设置-END */
        .open{
          z-index: 2;
          .one-selected{
              background-color: #f8f8f8;
              i{
                  top: 12px;
                  transform: rotate(135deg);
              }
          }
          .one-options{
              display: block;
          }
      }
      .one-select-disable{
          .one-selected{
              border: 1px solid transparent !important;
              background-color: #eee;
              padding: 8px 16px;
              i {
                display: none;
              }
              &:hover{
                cursor: default;
                box-shadow: none;
              }
          }
      }
    }
    .one-selected{
        height: $h;
        padding: 8px 30px 8px 10px;
        background-color: #fff;
        border-radius: 3px;
        border: 1px solid #ddd;
        outline: none;
        font-size: $font-size;
        color: $blue;
        position: relative;
        cursor: pointer;
        transition: border-color .2s ease;
        line-height: 1;
        &:hover{
          border-color: $blue;
          box-shadow: 0 0 5px rgba(59, 98, 199, 0.2);
        }
        &:focus{
          border: 1px solid $blue !important;
          box-shadow: none !important;
        }
        i{
            $c: #ccc;
            $size: 6px;
            position: absolute;
            right: 10px;
            top: ($h - $size * 2) / 2 + 1;
            width: $size;
            height: $size;
            border-bottom: 1px solid $c;
            border-left: 1px solid $c;
            transition: transform .3s ease;
            transform: rotate(-45deg);
        }
    }
    .one-options{
        display: none;
        position: absolute;
        top: $h + 1px;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 3px;
        li{
            height: $h;
            line-height: $h;
            font-size: 15px;
            &:hover{
                background-color: #f8f8f8;
            }
            a{
                display: block;
                padding: 0 30px;
                white-space: nowrap;
                color: $blue;
            }
        }
    }
</style>

<template>
    <div class="one-select">
        <template>
            <div class="one-select-content" :class="{'open': show, 'one-select-disable': disable}" :style="zIndex">
                <button class="one-selected" type="button" name="button" @click="toggle" @blur="hide">
                    <span>{{ selected[proxyName.label] }}</span>
                    <i aria-hidden="true"></i>
                </button>
                <div class="one-options" :style="optionsStyle">
                    <ul>
                        <li v-for="opt in option">
                            <a href="javascript:;" @mousedown.prevent="select(opt)">
                                <span>{{ opt[proxyName.label] }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
  export default {
    name: 'one-select',
    data () {
      return {
        show: false,
        val: this.value
      }
    },
    props: {
      value: {
        type: [Number, String],
        default: ''
      },
      option: {
        type: Array,
        default: () => []
      },
      placeholder: {
        type: String,
        default: '请选择'
      },
      disable: {
        type: Boolean,
        default: false
      },
      max: {
        type: Number,
        default: 8
      },
      proxyName: {
        type: Object,
        default () {
          return {
            label: 'label',
            value: 'value'
          }
        }
      },
      position: {
        type: String,
        default: 'left'
      }
    },
    watch: {
      value (val) {
        this.val = val
      },
      val (val) {
        this.$emit('input', val)
        this.$emit('modify', val)
      }
    },
    computed: {
      optionsStyle () {
        let length = this.option.length
        let isLeft = this.position === 'left'
        let cls = length >= this.max ? {
          'overflow-y': 'scroll',
          'height': 40 * this.max + 'px'
        } : {}
        cls[isLeft ? 'left' : 'right'] = 0
        return cls
      },
      selected () {
        let {label, value} = this.proxyName
        let matchOptions = this.option.filter((elem, index) => {
          return elem[value] === this.val
        })
        return matchOptions.length ? matchOptions[0] : {[value]: 0, [label]: this.placeholder}
      },
      zIndex () {
        return this.show ? {zIndex: 99} : {zIndex: 0}
      }
    },
    methods: {
      toggle () {
        if (this.disable) return
        this.show = !this.show
      },
      hide () {
        this.show = false
      },
      select (option) {
        this.val = option[this.proxyName.value]
        this.show = false
        this.$nextTick(() => {
          this.$emit('select', option)
        })
      }
    },
    install (Vue) {
      Vue.component(this.name, this)
    }
  }
</script>
