<template lang="html">
  <div class="panel">
    <h1>示例：选择</h1>
    <br>
    <div class="one-form">
      <one-select :option="option.opts" v-model="form.select"></one-select>
    </div>
    <br>
    <p>选中：{{ form.select }}</p>
    <br>
    <h1>参数</h1>
    <br>
    <info-table :head="info.head" :body="info.body"></info-table>
    <br>
    <h1>代码示例</h1>
    <br>
    <code-snippet :value="html"></code-snippet>

  </div>
</template>

<script>

const html = `
  // 选项
  const opts = [
    {label: 'default value 0',value: 0},
    {label: 'default value 1',value: 1},
    {label: 'demo a 2',value: 2},
    {label: 'demo b 3',value: 3}
  ]
  //  应用
  <one-select :option="option.opts" v-model="form.select"></one-select>
`
const opts = [
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
        opts
      },
      form: {
        select: 2
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.form.select = 3
    }, 3000)
  }
}
</script>

<style lang="scss">
</style>
