<template>
  <div class="panel">
    <h1>示例：Radio</h1>
    <br>
    <div class="one-form">
      <one-radio :option="option.radios" v-model="form.radio"></one-radio>
    </div>
    <br>
    <p>选中：{{ form.radio }}</p>
    <br>
    <br>
    <h1>参数</h1>
    <br>

    <info-table :head="info.head" :body="info.body"></info-table>
    <br>
    <br>
    <h1>代码示例</h1>
    <br>
    <code-snippet :value="html"></code-snippet>
  </div>

</template>

<script>
const html = `
  // 选项
  const radios = [
    {label: 'default value 0',value: 0},
    {label: 'default value 1',value: 1},
    {label: 'demo a 2',value: 2},
    {label: 'demo b 3',value: 3}
  ]

  //  应用
  <one-radio :option="option.radios" v-model="form.radio"></one-radio>
`

const radios = [
  {label: 'default value 0',value: 0},
  {label: 'default value 1',value: 1},
  {label: 'demo a 2',value: 2},
  {label: 'demo b 3',value: 3}
]
const info = {
  head: ['参数', '说明', '类型', '默认值'],
  body: [
    ['option', '源数据', 'Array', '[]'],
    ['value', '当前选中', 'Number', '0']
  ]
}
export default {
  data () {
    return {
      info,
      html,
      option: {
        radios
      },
      form: {
        radio: 0
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.form.radio = 2
    }, 3000)
  }
}
</script>

<style lang="scss">
</style>
