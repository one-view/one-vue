<template>
  <div class="panel">
     <div class="row com-mg-btm">
        <h1 class="com-mg-btm">示例</h1>
         <one-block title="表单组件" class="com-mg-btm">
             <one-checkbtn :option="option"></one-checkbtn>
         </one-block>
         <div class="row com-mg-btm">
             <h1 class="com-mg-btm">属性与事件</h1>
             <one-table :head="propsHead" :data="propsData"></one-table>
         </div>
     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      option: [
        {label: 'input', value: '1'},
        {label: 'select', value: '2'},
        {label: 'checkbox', value: '3'},
        {label: 'checkbtn', value: '4'},
        {label: 'textarea', value: '5'},
        {label: '其他表单组价', value: '6'}
      ],
      propsHead: [
        { title: '参数', key: 'props' },
        { width: 600, title: '说明', key: 'note' },
        { title: '类型', key: 'type' },
        { title: '默认值', key: 'default' }
      ],
      propsData: [
        {
          props: 'option',
          note: '待选数据，格式[{label, value}]',
          type: 'Boolean',
          default: 'true'
        }
      ]
    }
  },
  methods: {
    theChange () {
      console.log('theChange')
    },
    theInput () {
      console.log('theInput')
    },
    theModify () {
      console.log('theModify')
    }
  }
}
</script>

<style lang="scss">
    .data-show {
        height: 40px;
        margin-left: 20px;
    }
</style>
