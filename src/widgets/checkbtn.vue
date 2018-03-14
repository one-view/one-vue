<template>
    <div class="one-checkbtn">
        <div class="option" ref="option">
            <ul class="cf">
                <template v-for="(item, index) in option">
                    <li class='cf' @click="(e) => {optionItemClick(e, getValue(item))}">
                        <div class="item" :class="[{active: getValue(item) === val}]">
                            <span>{{getLabel(item)}}</span>
                        </div>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'one-checkbtn',
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
      valueName: {
        type: String,
        default: ''
      },
      labelName: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        TYPE: 'form',
        val: ''
      }
    },
    computed: {
    },
    watch: {
      value (val) {
        this.val = val
      },
      val (val) {
        this.$emit('modify', val)
      }
    },
    methods: {
      getValue (item) {
        if (this.valueName) {
          return item[this.valueName]
        }
        return item.value
      },
      getLabel (item) {
        if (this.labelName) {
          return item[this.labelName]
        }
        return item.label
      },
      optionItemClick (e, value) {
        this.val = value
        this.showOption = false
        this.$emit('input', this.val)
        this.$emit('change', this.val)
        this.$emit('itemCheck', this.val)
      }
    },
    mounted () {
      // 初始化prop复制
      this.val = this.value
    }
  }
</script>

<style scoped lang="scss">
    .one-checkbtn{
        $h: 38px;
        display: block;
        position: relative;
        * {
            box-sizing: border-box;
        }
        .option{
            li {
                display: block;
                cursor: pointer;
                float: left;
                height: $h;
                line-height: $h;
                margin: 0 6px;
                color: #495060;
                list-style: none;
                transition: background .2s ease-in-out;
                .item{
                    span {
                        padding: 4px 6px;
                    }
                    &:hover{
                        span {
                            background: #f3f3f3;
                        }
                    }
                    &.active{
                        span {
                            color: #fff;
                            border-radius: 2px;
                            background-color: #3e7cf4;
                        }
                    }
                }

            }
        }
    }
</style>
