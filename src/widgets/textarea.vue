<style lang="less">

.one-textarea{
  *{
      box-sizing: border-box;
  }
  width: 100%;
  position: relative;
  textarea{
    display: block;
    width: 100%;
    height: 120px;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 10px;
    outline: none;
    transition: border .2s ease;
    line-height: 24px;
    font-size: 14px;
    max-width: 100%;
    min-width: 200px;
    margin: 0 !important;
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
<div>
    <div class="one-textarea">
        <textarea v-model="content" :disabled="disable" @keyup="change" @blur="blur" :maxlength="max"></textarea>
        <div class="tip" v-if="max">
            <span :class="{'warning':  overLength}">{{ textLength }}</span> / {{ max }}
        </div>
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
      type: [Number, Boolean],
      default: false
    },
    value: {
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
