<template>
    <div class="panel">
        <div class="row">
            <div class="com-mg-btm">
                <h1>示例</h1>
            </div>
        </div>
        <div class="row com-mg-btm">
            <one-menu :data="testData"></one-menu>
        </div>
        <div class="row">
            <div class="com-mg-btm">
                <h1>属性</h1>
            </div>
        </div>
        <div class="row com-mg-btm">
            <one-table :head="propsHead" :data="propsData"></one-table>
        </div>
        <div class="row">
            <div class="com-mg-btm">
                <h1>方法回调</h1>
            </div>
        </div>
        <div class="row com-mg-btm">
            <one-table :head="callBackHead" :data="callBackData"></one-table>
        </div>
    </div>
</template>

<script>
 export default {
   data () {
     return {
       testData: [
         {
           label: '用户',
           children: [
             {label: '角色', value: '111'},
             {label: '用户', value: '111'},
             {label: '等级', value: '111'}
           ],
         },
         {
           label: '功能',
           children: [
             {label: '表格', value: '111'},
             {label: '图片', value: '111'},
             {label: '表单', value: '111'}
           ],
         }
       ],
       propsHead: [
         {
           title: '参数',
           key: 'props'
         },
         {
           width: 600,
           title: '说明',
           key: 'note'
         },
         {
           title: '类型',
           key: 'type'
         },
         {
           title: '默认值',
           key: 'default'
         }
       ],
       propsData: [
         {
           props: 'size',
           note: '初始的每页个数',
           type: 'Number',
           default: '10'
         },
         {
           props: 'current',
           note: '当前页数',
           type: 'Number',
           default: '1'
         },
         {
           props: 'total',
           note: '总数,必须项',
           type: 'Number',
           default: '1'
         },
         {
           props: 'showBeginEnd',
           note: '是否展示首页和尾页',
           type: 'Boolean',
           default: 'true'
         },
         {
           props: 'showPreNext',
           note: '是否展示上一页下一页按钮',
           type: 'Boolean',
           default: 'false'
         }
       ],
       callBackHead: [
         {
           title: '名称',
           key: 'props'
         },
         {
           title: '说明',
           key: 'note'
         }
       ],
       callBackData: [
         {
           props: 'change',
           note: '分页器变化，改编页码触发，改变每页条数触发，参数：({fromIndex, toIndex, size}),fromIndex为变化前的页码、toIndex当前页码、size当前每页条数'
         }
       ]
     }
   },
   mounted () {
   }
}
</script>

<style lang="scss">

.menu {
  position: relative;
  &:hover {
    .list {
      max-height: 500px;
      transition: max-height 0.3s ease-in;
    }
  }
  .list {
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    max-height: 0;
    transition: max-height 0.3s ease-out;
    overflow: hidden;

    li{
      padding: 10px 30px;
      background: #d5d5d5;
      &:hover{
        background: #ddd;
      }
    }
    // transform: scaleY(0);
    // transition: transform 0.3s ease-out;
  }
}
</style>
