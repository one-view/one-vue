<style lang="scss" scoped>

.one-row{
  /* contains col-lg in class name */
  [class*='one-col-']{}
  .module{
    padding: 15px;
    background: #eee;
    margin: 10px;
  }
}

</style>

<template>
<div class="panel panel-layout">
  <h1>布局模式: Layout/Module</h1>
  <div class="pane">
    <template v-for="(item, index) in demo">
      <div class="one-row" :key="index">
        <template v-for="(col, index) in item">
          <div :class="['one-col-' + col]" :key="index">
            <div class="module">{{ col }}</div>
          </div>
        </template>
      </div>
    </template>
  </div>
  <br>>
  <h1>示例</h1>
  <br>
  <code-snippet :value="html" type="html"></code-snippet>
</div>
</template>

<script>
const html =
   `// 布局模式
   .pane
   .row | .col
   .module
  
   <div class="pane">
      <div class="module"></div>
    </div>
    <div class="panel layout">
      <div class="row">
        <div class="col-8">
          <div class="module"></div>
        </div>
        <div class="col-16">
          <div class="module"></div>
        </div>
      </div>
    </div>
    <div class="pane">
      <div class="module module-footer"></div>
    </div>`
export default {
  data () {
    return {
      html,
      demo: [
        [7, 5],
        [12, 12],
        [2, 22],
        [3, 21],
        [4, 20],
        [5, 12, 7]
      ]
    }
  }
}
</script>
