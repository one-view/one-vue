<template>
  <div class="panel">
    <h1>示例：级联选择</h1>
    <br>
    <div class="one-form">
      <one-block>
        <one-cascader :option="option.opts" v-model="form.cate"></one-cascader>
      </one-block>
      <br>
      <one-block>
        <one-cascader :option="option.opts2" v-model="form.cate2" :proxy-name="{label:'name', value:'id', children: 'list'}" :disable="true"></one-cascader>
      </one-block>
    </div>
    <br>
    <p>选中：{{ form.cate }}</p>
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
    {label: 'default value 0',value: 0, children: [
      {label: 'child 123',value: 15},
      {label: 'child 13',value: 12},
      {label: 'child 156',value: 13}
    ]},
    {label: 'default value 1',value: 1, children: [
      {label: 'child 223',value: 25},
      {label: 'child 23',value: 22},
      {label: 'child 256',value: 23}
    ]},
    {label: 'demo a 2',value: 2, children: [
      {label: 'child 323',value: 35},
      {label: 'child 33',value: 32},
      {label: 'child 356',value: 33}
    ]},
    {label: 'demo b 3',value: 3}
  ]
  //  应用
  <one-cascader :option="option.opts" v-model="form.cate"></one-cascader>
`

const opts = [
  {label: 'default value 0',value: 0, children: [
    {label: 'child 123',value: 15},
    {label: 'child 13',value: 12},
    {label: 'child 156',value: 13}
  ]},
  {label: 'default value 1',value: 1, children: [
    {label: 'child 223',value: 25},
    {label: 'child 23',value: 22},
    {label: 'child 256',value: 23}
  ]},
  {label: 'demo a 2',value: 2, children: [
    {label: 'child 323',value: 35},
    {label: 'child 33',value: 32},
    {label: 'child 356',value: 33}
  ]},
  {label: 'demo b 3',value: 3}
]

const opts2 = [
  {
    name: 'a',
    id: 0,
    list: [
      {name: 'b', id: 101},
      {name: 'c', id: 102},
    ]
  },
  {
    name: 'd',
    id: 1,
    list: [
      {name: 'e', id: 201},
      {name: 'f', id: 202},
    ]
  },
  {
    name: 'g',
    id: 2,
    list: [
      {name: 'h', id: 301},
      {name: 'i', id: 302},
    ]
  }
]
export default {
  data () {
    return {
      html,
      option: {
        opts,
        opts2
      },
      form: {
        cate: [1, 0],
        cate2: [1, 202]
      }
    }
  },
  mounted () {
    window.cas = this
    setTimeout(() => {
      this.form.cate = [3,9]
    }, 1000)
  }
}
</script>

<style lang="less">
</style>
