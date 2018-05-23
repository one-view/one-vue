<template>
  <div class="panel">
    <h1>Slider</h1>
    <div class="one-form">
      <one-block title="量值1">
        <one-slider v-model="percentA" @change="change"></one-slider>
      </one-block>
      <one-block title="量值2">
        <one-slider v-model="percentB" :step="0.1" @change="change2"></one-slider>
      </one-block>
    </div>
    <br>
    <br>
    <one-block title="数据展示">
      <input class="v-form" type="number" v-model.number="percentA">
      <input class="v-form" type="number" v-model.number="percentB">
    </one-block>
    <br>
    <br>
    <br>
    <h1>参数</h1>
    <br>
    <info-table :head="props.head" :body="props.body"></info-table>
    <br>
    <br>
    <h1>代码示例</h1>
    <br>
    <br>
  </div>
</template>

<script>

const props = {
  head: ['参数', '说明', '类型', '默认值'],
  body: [
    ['step','颗粒','Number','1'],
    ['value','数据','Number','0'],
    ['mode','模式','String','horizontal'],
    ['size','尺寸','String','200px']
  ]
}

export default {
  data () {
    return {
      props,
      percentA: 97,
      percentB: 25
    }
  },
  methods: {
    change (val) {
      this.percentA = val
    },
    change2 (val) {
      this.percentB = val
    },
    slide (val) {
      console.log(val)
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>

</style>
