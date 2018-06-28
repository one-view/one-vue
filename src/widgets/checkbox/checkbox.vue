<style src="./style.scss" lang="scss" scoped></style>

<template>
<div class="one-checkbox" :class="[{'one-checkbox-disable': disable}, 'one-checkbox-' + ui]" >
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
      default: true
    },
    value: {
      type: Boolean,
      default: false
    },
    ui: {
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