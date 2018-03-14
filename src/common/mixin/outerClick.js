export default ({state, ref}) => {
  return {
    watch: {
      [state] (val) {
        if (val) {
          document.addEventListener('click', this[`hide/${state}`], false)
        } else {
          document.removeEventListener('click', this[`hide/${state}`], false)
        }
      }
    },
    methods: {
      [`hide/${state}`] (e) {
        if (this.$refs[ref] && !this.$refs[ref].contains(e.target)) {
          this[state] = false
        }
      }
    }
  }
}
