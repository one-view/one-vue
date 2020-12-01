<style src="./style.less" lang="less" scoped></style>

<template>
<div class="one-checkbox" :class="classNames" >
    <ul>
        <li :class="{'on': val}" @click="check()">
            <i aria-hidden="true"></i>
            <span v-show="showText">{{ val ? textTrue : textFalse }}</span>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'one-checkbox',
  data () {
    return {
      val: this.value
    }
  },
  computed: {
    classNames () {
      const names = []
      names.push(`one-checkbox-${this.type}`)
      if (this.disable) names.push('one-checkbox-disable')
      return names
    }
  },
  props: {
    textTrue: {
      type: String,
      default: 'YES'
    },
    textFalse: {
      type: String,
      default: 'NO'
    },
    showText: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value (newValue) {
      this.val = newValue
    }
  },
  methods: {
    check () {
      if (this.disable) return
      this.val = !this.val
      this.$emit('input', this.val)
      this.$emit('change', this.val)
    }
  }
}
</script>