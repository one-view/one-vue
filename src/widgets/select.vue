<style lang="scss" scoped>
    $h: 38px;
    $blue: #3b62c7;
    .one-select{
        position: relative;
        display: inline-block;
        .one-select-content{
            position: relative;
        }
    }
    .one-selected{
        height: $h;
        padding: 8px 30px 8px 10px;
        background-color: #fff;
        border-radius: 3px;
        border: 1px solid #ddd;
        outline: none;
        font-size: 16px;
        color: #3b62c7;
        position: relative;
        cursor: pointer;
        transition: border-color .2s ease;
        &:hover{
          border-color: $blue;
          box-shadow: 0 0 5px rgba(59, 98, 199, 0.2);
        }
        i{
            $c: #ccc;
            position: absolute;
            right: 10px;
            top: 12px;
            width: 6px;
            height: 6px;
            border-bottom: 1px solid $c;
            border-left: 1px solid $c;
            transition: transform .3s ease;
            transform: rotate(-45deg);
        }
    }
    .one-options{
        display: none;
        position: absolute;
        left: 0;
        top: $h + 1px;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 3px;
        li{
            height: $h;
            line-height: $h;
            &:hover{
                background-color: #f8f8f8;
            }
            a{
                display: block;
                padding: 0 30px;
                white-space: nowrap;
            }
        }
    }
    .open{
        z-index: 2;
        .one-selected{
            background-color: #f8f8f8;
            i{
                transform: rotate(135deg);
            }
        }
        .one-options{
            display: block;
        }
    }
    .one-select-disable{
        .one-selected{
            border: 1px solid #ddd;
            background-color: #f4f4f4;
            &:hover{
                border: 1px solid #ddd;
                background-color: #f4f4f4;
                box-shadow: none;
            }
        }
    }
</style>

<template>
    <div class="one-select">
        <div v-if="!editable" class="view">
            {{selected.label}}
        </div>
        <template v-else>
            <div class="one-select-content" :class="{'open': show, 'one-select-disable': disable}" :style="zIndex">
                <button class="one-selected" type="button" name="button" @click="toggle" @blur="hide">
                    <span>{{ selected.label }}</span>
                    <i aria-hidden="true"></i>
                </button>
                <div class="one-options" :style="optionsStyle">
                    <ul>
                        <li v-for="opt in option">
                            <a href="javascript:;" @mousedown.prevent="select(opt)">
                                <span>{{ opt.label }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
  import formItemValidate from '../common/mixin/formItemValidate'

  export default {
    name: 'one-select',
    mixins: [
      formItemValidate
    ],
    data () {
      return {
        TYPE: 'form',
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
        default () {
          return []
        }
      },
      disable: {
        type: Boolean,
        default: false
      },
      editable: {
        type: Boolean,
        default: true
      },
      ignoreStrNum: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      value (val) {
        this.val = val
      },
      val (val) {
        this.$emit('modify', val)
      }
    },
    computed: {
      optionsStyle () {
        let length = this.option.length
        let cls = length >= 8 ? {
          'overflow-y': 'scroll',
          'height': 40 * 8 + 'px'
        } : {}
        return cls
      },
      selected () {
        let matchOptions = this.option.filter((elem, index) => {
          if (this.ignoreStrNum) {
            return `${elem.value}` === `${this.val}`
          }
          return elem.value === this.val
        })
        return matchOptions.length ? matchOptions[0] : {value: 0, label: '请选择'}
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
        this.val = option.value
        this.show = false
        // emit after nextTick
        this.$emit('input', this.val)
        this.$emit('change', this.val)
        this.$emit('select', option)
      }
    }
  }
</script>
