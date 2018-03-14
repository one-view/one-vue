<template lang="html">
  <div class="panel">
    <h1>示例</h1>
    <div class="one-form">
      <one-block title="弹窗">
        <button class="btn btn-info btn-large" @click="showone = !showone">show</button>
      </one-block>
    </div>
    <br>
    <h1>参数</h1>
    <br>
    <info-table :head="info.head" :body="info.body"></info-table>
    <br>
    <h1>代码</h1>
    <br>
    <code-snippet :value="html" type="html"></code-snippet>
    <one-modal ref="modal1" :visible="showone" @toggle="val => this.showone = val">
      <template slot="head">
        <h1>title</h1>
      </template>
      <template slot="body">
        <div class="wrapper">
          <p>wrapper to height</p>
          <br>
          <p>wrapper to height</p>
          <br><br><br><br><br><br>
          <p>ss</p>
        </div>
      </template>
      <template slot="foot">
          <button class="btn btn-info btn-large" @click="showtwo = !showtwo">showtwo</button>
          <p>foot</p>
      </template>
    </one-modal>

    <one-modal ref="modal2" :visible="showtwo" @toggle="val => this.showtwo = val">
      <template slot="head">
        <h1>title</h1>
      </template>
      <template slot="body">
        asdsdsds
      </template>
    </one-modal>

  </div>
</template>

<script>

const html = `
    // 应用
    <one-modal ref="modal1" :visible="showone" @toggle="val => this.showone = val">
      <template slot="head">
        <h1>title</h1>
      </template>
      <template slot="body">
        <div class="wrapper">
          <p>wrapper to height</p>
          <br>
          <p>wrapper to height</p>
          <br><br><br><br><br><br>
          <p>ss</p>
        </div>
      </template>
      <template slot="foot">
          <button class="btn btn-info btn-large" @click="showtwo = !showtwo">showtwo</button>
          <p>foot</p>
      </template>
    </one-modal>

    <one-modal ref="modal2" :visible="showtwo" @toggle="val => this.showtwo = val">
      <template slot="head">
        <h1>title</h1>
      </template>
      <template slot="body">
        asdsdsds
      </template>
    </one-modal>
`

const info = {
  head: ['参数', '说明', '类型', '默认值'],
  body: [
    ['visible', '是否显示', 'Boolean', 'false'],
  ]
}

export default {
  data () {
    return {
      html,
      info,
      showone: false,
      showtwo: false
    }
  },
  methods: {},
  mounted () {
    window.modal1 = this.$refs.modal1
    window.modal2 = this.$refs.modal2
  }
}

</script>

<style lang="scss">

</style>
