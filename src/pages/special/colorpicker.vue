<template lang="html">
  <div class="panel">
    <h1>示例</h1>
    <br>
    <h1>颜色选择 | color picker</h1>
    <br>
    <color-picker v-model="color"></color-picker>
    <br>

    <br>
    <h1>颜色板 | color panel</h1>
    <br>
    <color-panel v-model="color"></color-panel>
    <br>
    <br>
    <h1>代码示例</h1>
    <br>
    <code-snippet :value="html"></code-snippet>

  </div>
</template>

<script>
const html = `
  // 颜色选择器
  <color-picker v-model="color"></color-picker>
  // 颜色面板
  <color-panel v-model="color"></color-panel>
`
export default {
  data () {
    return {
      html,
      color: '#f50',
    }
  },
  mounted () {
    setTimeout(() => {
      this.color = '#1dc357'
    }, 3000)
  }
}
</script>

<style lang="scss">
</style>
