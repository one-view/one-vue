<template lang="html">
  <div class="panel">
    <h1>实例</h1>
    <br>
    <one-form>
      <one-block title="选择周期">
        <one-date-picker v-model="form.dateStart" :max="form.dateEnd" :range="true"></one-date-picker>
        <one-date-picker v-model="form.dateEnd" :min="form.dateStart" :range="true"></one-date-picker>
      </one-block>
    </one-form>
    <one-form>
      <one-block title="不合法时间">
        <one-date-picker v-model="form.invalidDate" position="top"></one-date-picker>
        <span> 自动修正为当前时间</span>
      </one-block>
    </one-form>
    <br>
    <p>选择： {{ form.dateStart }} ~ {{ form.dateEnd }} </p>
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
  //  应用
  <div class="one-form">
  <one-date-picker v-model="form.dateStart" :max="form.dateEnd" :range="true"></one-date-picker>
  <one-date-picker v-model="form.dateEnd" :min="form.dateStart" :range="true"></one-date-picker>
  </div>
`
const info = {
  head: ['参数', '说明', '类型', '默认值'],
  body: [
    ['value', '选中时间', 'Number, String, Date', ''],
    ['postion', '日历位置', 'String', 'bottom'],
    ['min', '最小可选时间', 'String', ''],
    ['max', '最大可选时间', 'String', ''],
    ['range', '是否显示范围', 'Boolean', 'false']
  ]
}

export default {
  data () {
    return {
      html,
      info,
      form: {
        dateStart: new Date(),
        dateEnd: Date.now(),
        invalidDate: 'adfasd'
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.form.invalidDate = '2018-3-02'
    }, 1000)
  }
}
</script>

<style lang="less">
</style>
