export default ({prop, data}) => {
  return {
    mounted () {
      let propTemp = this[prop]
      if (typeof propTemp === 'object') propTemp = JSON.parse(JSON.stringify(this[prop]))
      // 初始化属性
      this[data] = propTemp
    },
    watch: {
      [prop] (val) {
        let propTemp = val
        if (typeof propTemp === 'object') propTemp = JSON.parse(JSON.stringify(val))
        this[data] = propTemp
      }
    }
  }
}
