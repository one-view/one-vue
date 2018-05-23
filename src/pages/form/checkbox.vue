<template lang="html">
  <div class="panel">
    <h1>示例：选择</h1>
    <one-block title="勾选">
      <one-checkbox v-model="form.check"></one-checkbox>
    </one-block>
    <one-block title="多选">
      <one-checkboxes v-model="form.checks" :option="option.checkboxes"></one-checkboxes>
    </one-block>
    <one-block title="button-style">
      <one-checkboxes v-model="form.checks" :option="option.checkboxes" ui="button"></one-checkboxes>
    </one-block>
    <br>
    <p>单选： {{ form.check }} | 多选： {{ form.checks }} </p>
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
  const checkboxes = [
    {label: 'default value 0',value: 0, checked: false},
    {label: 'default value 1',value: 1, checked: false},
    {label: 'demo a 2',value: 2, checked: false},
    {label: 'demo b 3',value: 3, checked: false}
  ]
  //  应用
  <one-block title="勾选">
    <one-checkbox v-model="form.check"></one-checkbox>
  </one-block>
  <one-block title="多选">
    <one-checkboxes v-model="form.checks" :option="option.checkboxes"></one-checkboxes>
  </one-block>
`
const info = {
  head: ['参数', '说明', '类型', '默认值'],
  body: [
    ['option', '源数据', 'Array', '[]'],
    ['value', '当前选中', 'Number', '0']
  ]
}

const checkboxes = [
  {label: 'default value 0',value: 0, checked: false},
  {label: 'default value 1',value: 1, checked: false},
  {label: 'demo a 2',value: 2, checked: false},
  {label: 'demo b 3',value: 3, checked: false}
]
export default {
  data () {
    return {
      html,
      info,
      option: {
        checkboxes
      },
      form: {
        check: false,
        checks: [1]
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.form.check = true
      this.form.checks = [0,1]
    }, 1000)
  }
}
</script>

<style lang="scss">
</style>
