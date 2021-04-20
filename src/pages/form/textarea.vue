<template>
  <div class="panel">
    <h1>示例：文本</h1>
    <br>
    <one-block title="表单">
      <one-textarea placeholder="请输入" v-model="context" :max="120"></one-textarea>
    </one-block>
    <one-textarea v-model="context"></one-textarea>
    <br>
    <p>内容：{{ context }}</p>
    <br>
    <h1>代码示例</h1>
    <br>
    <code-snippet :value="html"></code-snippet>
  </div>
</template>

<script>
const html = `
  //  应用
  <one-textarea v-model="context"></one-textarea>
`
export default {
  data () {
    return {
      html,
      context: ''
    }
  },
  mounted () {
    setTimeout(() => {
      this.context = 'test'
    }, 3000)
  }
}
</script>

<style lang="less">
</style>
