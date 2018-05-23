<template>
    <div class="panel">
        <div class="row">
            <div class="com-mg-btm">
                <h1>示例</h1>
            </div>
        </div>
        <one-menu :data="menuList" ui="dark"></one-menu>
        <br>
        <h1>属性</h1>
        <br>
        <info-table :head="props.head" :body="props.body"></info-table>
        <br>
        <br>
        <h1>方法回调</h1>
        <br>
        <info-table :head="events.head" :body="events.body"></info-table>
        
    </div>
</template>

<script>
const props = {
  head: ['参数','说明','类型','默认值'],
  body: [
    ['size', '初始的每页个数', 'Number', '10'],
    ['current', '当前页数', 'Number', '1'],
    ['total', '总数,必须项', 'Number', '1'],
    ['showBeginEnd', '是否展示首页和尾页', 'Boolean', 'true'],
    ['showPreNext', '是否展示上一页下一页按钮', 'Boolean', 'false'],
  ]
}

const events = {
  head: ['名称','说明'],
  body: [
    ['change','分页器变化，改编页码触发，改变每页条数触发，参数：({fromIndex, toIndex, size}),fromIndex为变化前的页码、toIndex当前页码、size当前每页条数']
  ]
}
 export default {
   data () {
     return {
       props,
       events,
       menuList: [
         {
           label: '用户',
           children: [
             {label: '角色', value: '/'},
             {label: '用户', value: '/'},
             {label: '等级', value: '/'}
           ],
         },
         {
           label: '功能',
           children: [
             {label: '表格', value: '/'},
             {label: '图片', value: '/'},
             {label: '表单', value: '/'}
           ],
         }
       ],
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
