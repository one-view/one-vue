<template>
    <div class="panel">
        <div class="row">
            <div class="com-mg-btm">
                <h1>示例</h1>
            </div>
        </div>
        <div class="row com-mg-btm">
            <one-pagination :index="2" :size="10" :total="92"></one-pagination>
        </div>

        <br>
        <h1>属性</h1>
        <br>
        <info-table :head="props.head" :body="props.body"></info-table>
        <br>
        <br>
        <h1>方法回调</h1>
        <br>
        <info-table :head="events.head" :body="events.body"></info-table>
        <br>
        
    </div>
</template>

<script>
const props = {
  head: ['参数', '说明', '类型', '默认值'],
  body: [
    ['size','初始的每页个数','Number','10'],
    ['index','当前页数','Number','1'],
    ['total','总数,必须项','Number','1'],
    ['showHeadTail','是否展示首页和尾页','Boolean','true'],
    ['showPreNext','是否展示上一页下一页按钮','Boolean','false']
  ]
}
const events = {
  head: ['名称', '说明'],
  body: [
    ['change', '分页器变化，改编页码触发，改变每页条数触发，参数：({fromIndex, toIndex, size}),fromIndex为变化前的页码、toIndex当前页码、size当前每页条数']
  ]
}
export default {
  data () {
    return {
      props,
      events
    }
  }
}
</script>

<style lang="less">
</style>
