export default {
  data () {
    return {
      show: this.visible
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: 'rgba(20,20,20,.3)'
    },
    transition: {
      type: String,
      default: 'fadeModal'
    },
    isBgClickable: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    visible (newValue) {
      this.show = newValue
    }
  },
  methods: {
    close () {
      this.show = false
      this.$emit('close', this.show)
      this.$emit('toggle', this.show)
    },
    closeBg () {
      if (this.isBgClickable) {
        this.close()
      }
    },
    open () {
      this.show = true
      this.$emit('toggle', this.show)
    }
  }
}
