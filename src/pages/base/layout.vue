<style lang="less">

.one-row{
  /* contains col-lg in class name */
  [class*='one-col-']{}
  .module{
    padding: 30px;
    background: #eee;
    margin: 10px;
    width: 100%;
  }
}

</style>

<template>
<div class="panel panel-layout">
  <h1>布局模式: Layout/Module</h1>
  <one-row>
    <one-col>
      <one-row>
        <one-col grid="8">
          <div class="module">8</div>
        </one-col>
        <one-col grid="8">
          <div class="module">8</div>
        </one-col>
        <one-col grid="8">
          <div class="module">8</div>
        </one-col>
      </one-row>
    </one-col>
  </one-row>
  <div class="pane">
    <template v-for="(item, index) in demo">
      <one-row :key="index">
        <template v-for="(col, index) in item">
          <one-col :grid="col" :key="index">
            <div class="module">{{ col }}</div>
          </one-col>
        </template>
      </one-row>
    </template>
  </div>
  <br>

  <h1>示例代码</h1>
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
    
      <one-row>
        <one-col grid="8">
          <div class="module"></div>
        </one-col>
        <one-col grid="8">
          <div class="module"></div>
        </one-col>
      </one-row>
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
