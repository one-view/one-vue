<style lang="scss">

    .one-textarea{
        display: inline-block;
        position: relative;
        .tip{
            position: absolute;
            right: 10px;
            bottom: 10px;
            font-size: 12px;
            color: #999;
            .warning{
                color: #da5454;
            }
        }
        textarea{
            width: 300px;
            height: 120px;
            border: 1px solid #ddd;
            border-radius: 3px;
            padding: 10px;
            // resize: none;
            outline: none;
            transition: border .2s ease;
            line-height: 24px;
            &:focus{
                border-color: #488EF1;
            }
        }
    }

</style>

<template>
    <div class="one-textarea">
        <textarea v-model="content" :disabled="disable" @keyup="change" @blur="blur"></textarea>
        <div class="tip" v-if="max > 0">
            <span :class="{'warning':  overLength}">{{ textLength }}</span> / {{ max }}
        </div>
    </div>
</template>

<script>
  import formItemValidate from '../common/mixin/formItemValidate'

export default {
  name: 'one-textarea',
  mixins: [
    formItemValidate
  ],
  data () {
    return {
      TYPE: 'form',
      content: this.value
    }
  },
  props: {
    max: {
      type: Number,
      default: 120
    },
    value: {
      type: String,
      default: ''
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value (newValue) {
      this.content = newValue
    },
    content (val) {
      this.$emit('modify', val)
    }
  },
  computed: {
    textLength () {
      return this.content.replace(/[\u0391-\uFFE5]/g, 'aa').length
    },
    overLength () {
      return this.textLength > this.max
    }
  },
  methods: {
    change () {
      this.$emit('input', this.content)
    },
    blur () {
      this.$emit('blur')
    }
  }
}

</script>
