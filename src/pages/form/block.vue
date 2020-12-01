<template>
    <div class="panel">
        <h1>示例</h1>
        <br>
        <one-form>
          <one-block title="title">
            <span>this is a title</span>
          </one-block>
          <one-block title="名称">
            <input type="text">
            <one-btn class="btn-info">upload</one-btn>
          </one-block>
          <one-block width="100px">
            <input type="text">
          </one-block>
        </one-form>

        <br>
        <h1>属性</h1>
        <br>
        <info-table :head="props.head" :body="props.body"></info-table>

        <br>
        <h1>代码示例</h1>
        <br>
        <code-snippet :value="html" type="html"></code-snippet>
    </div>
</template>

<script>

const props = {
  head: ['参数','说明','类型','默认值'],
  body: [
    ['title','标题','String',''],
    ['width','表头宽度,可以使用百分比和定宽','String','']
  ]
}
const html = 
    `<one-block title="title">
        <span>欧阳锋</span>
    </one-block>
    <one-block title="名称">
        <one-input/>
    </one-block>
    <one-block title="名称" width="100px">
        <one-input/>
    </one-block>`
export default {
  data () {
    return {
      props,
      html
    }
  },
  mounted () {
  }
}
</script>

<style lang="less">
</style>
