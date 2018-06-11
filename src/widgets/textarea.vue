<style lang="scss">

    .one-textarea{
        *,
        *:before,
        *:after{
            box-sizing: border-box;
        }
        position: relative;
        textarea{
            display: block;
            min-width: 240px;
            height: 120px;
            border: 1px solid #ddd;
            border-radius: 3px;
            padding: 10px;
            // resize: none;
            outline: none;
            transition: border .2s ease;
            line-height: 24px;
            font-size: 14px;
            &:focus{
                border-color: #488EF1;
            }
        }
        .tip{
            position: absolute;
            right: 10px;
            bottom: 10px;
            font-size: 12px;
            color: #999;
            line-height: 1.2;
            .warning{
                color: #da5454;
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

export default {
  name: 'one-textarea',
  data () {
    return {
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
  },
  install (Vue) {
    Vue.component(this.name, this)
  }
}

</script>
