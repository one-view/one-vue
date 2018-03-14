<template>
    <div class="one-input" :class="{'one-textarea': type === 'textarea'}" ref="oneInput">
        <div v-if="!editable" class="view-item" :class="[{input: type !== 'textarea'}, {textarea: type === 'textarea'}]">
            <template v-if="val !== ''">
                {{val}}
            </template>
            <div v-else class="com-sp-font">
                {{viewholder}}
            </div>
        </div>
        <template v-else>
            <textarea v-if="type === 'textarea'" ref="textArea" class="textarea-item"
                   :class="[{disable: disable}]"
                   :style="[textAreaHeightStyle]"
                   :placeholder="placeholder"
                   :disabled="disable"
                   :readonly="readonly"
                   :name="name"
                   :value="val"
                   @input="handleInput">
            </textarea>
            <input v-else class="input-item" ref="input" :class="[{disable: disable}]"
                   :type="type"
                   :placeholder="placeholder"
                   :disabled="disable"
                   :readonly="readonly"
                   :name="name"
                   :value="val"
                   @input="handleInput">
        </template>
    </div>
</template>

<script>
  import propToData from '../common/mixin/propToData'
  import formItemValidate from '../common/mixin/formItemValidate'

  export default {
    name: 'one-input',
    mixins: [
      propToData({prop: 'value', data: 'val'}),
      formItemValidate
    ],
    props: {
      type: {
        validator (value) {
          return ~['text', 'textarea', 'password'].indexOf(value)
        },
        default: 'text'
      },
      value: {
        type: [String, Number],
        default: ''
      },
      name: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      disable: {
        type: Boolean,
        default: false
      },
      editable: {
        type: Boolean,
        default: true
      },
      icon: String,
      readonly: {
        type: Boolean,
        default: false
      },
      viewholder: {
        type: String,
        default: '暂无数据！'
      }
    },
    data () {
      return {
        TYPE: 'form',
        val: '',
        textAreaHeight: 0,
        textAreaHeightStyle: {
          height: '100%'
        }
      }
    },
    watch: {
      val (val) {
        this.$emit('modify', val)
      }
    },
    methods: {
      handleInput (event) {
        let value = event.target.value
        this.val = value
        this.$emit('input', value)
        this.$emit('change', value)
      }
    },
    mounted () {
      // 初始化prop复制
      this.val = this.value
    }
  }
</script>

<style scoped lang="scss">
    .one-input{
        *{
            box-sizing: border-box;
        }
        display: block;
        position: relative;
        .view-item{
            &.input{
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            &.textarea{
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
            }
        }
        .input-item {
            height: 38px;
            width: 100%;
            padding: 8px 10px 8px 10px;
            background-color: #fff;
            border-radius: 2px;
            border: 1px solid #ddd;
            outline: none;
            position: relative;
            cursor: pointer;
            transition: border-color .2s ease;
            color: #333;
            &:hover{
                border-color: #3b62c7;
                box-shadow: 0 0 5px rgba(59, 98, 199, 0.2);
            }
            &.disable{
                border: 1px solid #ddd;
                background-color: #f4f4f4;
                &:hover{
                    border: 1px solid #ddd;
                    background-color: #f4f4f4;
                    box-shadow: none;
                }
            }
        }
        .textarea-item{
            min-height: 76px;
            width: 100%;
            height: 100%;
            padding: 8px 10px 8px 10px;
            background-color: #fff;
            border-radius: 2px;
            border: 1px solid #ddd;
            outline: none;
            font-size: 16px;
            position: relative;
            cursor: pointer;
            transition: border-color .2s ease;
            color: #333;
            resize: none;
            &:hover{
                border-color: #3b62c7;
                box-shadow: 0 0 5px rgba(59, 98, 199, 0.2);
            }
            &.disable{
                border: 1px solid #ddd;
                background-color: #f4f4f4;
                &:hover{
                    border: 1px solid #ddd;
                    background-color: #f4f4f4;
                    box-shadow: none;
                }
            }
        }
    }
</style>
