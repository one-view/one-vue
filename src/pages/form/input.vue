<template>
  <div class="panel">
     <div class="row com-mg-btm">
        <h1 class="com-mg-btm">示例</h1>
        <div class="com-mg-l com-mg-btm">
            <h2 class="com-mg-btm">常规</h2>
            <one-block title="名称">
                <one-input v-model="name"/>
            </one-block>
            <one-block title="name">
                '{{name}}'
            </one-block>
        </div>
         <div class="com-mg-l com-mg-btm">
             <h2 class="com-mg-btm">事件(查看console)</h2>
             <one-block title="名称">
                 <one-input class="left" @change="theChange" @input="theInput" @modify="theModify" v-model="eventValue"/>
                 <one-btn class="left btn btn-info btn-line com-mg-l" @click="eventValue='btnClick'">手动改值</one-btn>
             </one-block>
         </div>
         <div class="com-mg-l com-mg-btm">
             <h2 class="com-mg-btm">预览状态</h2>
             <one-block title="名称">
                 <one-input :editable="false" v-model="viewName"/>
             </one-block>
         </div>
         <div class="com-mg-l com-mg-btm">
             <h2 class="com-mg-btm">预览状态无数据</h2>
             <one-block title="名称">
                 <one-input :editable="false" value=""/>
             </one-block>
         </div>
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
      name: '',
      eventValue: '',
      viewName: '你的名字',
      propsHead: [
        { title: '参数', key: 'props' },
        { width: 600, title: '说明', key: 'note' },
        { title: '类型', key: 'type' },
        { title: '默认值', key: 'default' }
      ],
      propsData: [
        {
          props: 'editable',
          note: '是否可编辑状态，如果不可编辑则是预览状态',
          type: 'Boolean',
          default: 'true'
        },
        {
          props: 'viewholder',
          note: '预览状态下无数据的展示内容',
          type: 'String',
          default: '暂无数据！'
        },
        {
          props: '@input',
          note: '修改内容触发，用于双向绑定',
          type: '',
          default: ''
        },
        {
          props: '@change',
          note: '修改内容触发，注意js修改内容不会触发',
          type: '',
          default: ''
        },
        {
          props: '@modify',
          note: '修改内容触发，只要value改变便会触发（常常用于表单验证）',
          type: '',
          default: ''
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

<style lang="less">
    .data-show {
        height: 40px;
        margin-left: 20px;
    }
</style>
