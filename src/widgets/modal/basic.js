export default {
  data () {
    return {
      show: this.value
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: 'rgba(20,20,20,.3)'
    },
    transitionName: {
      type: String,
      default: 'fade'
    },
    isBgClickable: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    value (newValue) {
      this.show = newValue
    }
  },
  methods: {
    close () {
      this.show = false
      this.$emit('close', false)
      this.$emit('input', false)
    },
    closeBg () {
      if (this.isBgClickable) {
        this.close()
      }
    },
    open () {
      this.show = true
      this.$emit('input', true)
    }
  }
}
