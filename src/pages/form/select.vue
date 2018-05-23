<template>
  <div class="panel">
    <h1>示例：选择</h1>
    <br>
    <div class="one-form">
      <one-block title="选择">
        <one-select :option="option.opts" v-model="form.select" :max="12" @select="afterSelect"></one-select>
      </one-block>
      <br>
      <one-block title="选择2">
        <one-select :option="option.opts2" v-model="form.select2" :proxy-name="{label:'name', value: 'id'}" placeholder="选择类别"></one-select>
        <one-select :option="option.opts" v-model="form.select3" placeholder="产品内容选择" :disable="true"></one-select>
      </one-block>
    </div>
    <br>
    <p>选中：{{ form.select }} | {{ form.select2 }}</p>
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
  {label: 'demo b 3',value: 3},
  {label: 'demo a 4',value: 4},
  {label: 'demo b 5',value: 5},
  {label: 'option with a long label', value: 54},
  {label: 'demo b 6',value: 6},
  {label: 'demo a 7',value: 7},
  {label: 'demo a 8',value: 8},
  {label: 'demo a 9',value: 9},
  {label: 'demo a 10',value: 10},
  {label: 'demo a 11',value: 11},
]
const opts2 = [
  {id: 1, name: 'name one'},
  {id: 23, name: 'alaska skii'},
  {id: 43, name: 'vue some view'},
]
const info = {
  head: ['参数', '说明', '类型', '默认值'],
  body: [
    ['option', '源数据', 'Array', '[]'],
    ['value', '当前值，v-model', 'Number，String', 'null'],
    ['placeholder', '默认显示', 'String', '请选择'],
    ['disable', '是否禁用', 'Boolean', 'false'],
    ['max', '显示滚动条数，默认有滚动条', 'Number', '8'],
    ['proxy-name', '代理', 'Object', '{label: \'label\', value: \'value\'}']
  ]
}

export default {
  data () {
    return {
      info,
      html,
      option: {
        opts,
        opts2
      },
      form: {
        select: 2,
        select2: 1,
        select3: 8,
      }
    }
  },
  methods: {
    afterSelect (opt) {
      console.log(opt.value, this.form.select)
    }
  },
  mounted () {
    setTimeout(() => {
      this.form.select = 6
    }, 1000)
  }
}
</script>

<style lang="scss">
</style>
