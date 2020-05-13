<template lang="html">
  <div class="code-presentation">
    <h3>>_</h3>
    <pre><code :class="[type]">
      {{ value }}
    </code></pre>
  </div>
</template>

<script>
export default {
  name: 'code-snippet',
  props: {
    value: {
      type: [String, Number]
    },
    type: {
      type: [String]
    }
  },
  mounted () {
    let $code = this.$el.querySelector('pre code')
    window.hljs && window.hljs.highlightBlock($code)
  },
  install (Vue) {
    Vue.component(this.name, this)
  }
}
</script>

<style lang="scss" scoped>
.code-presentation{
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
  box-shadow: 0 0 10px rgba(20,20,20,.5);
  h3{
    padding: 8px 16px;
    background-color: darken($color: #282c34, $amount: 2);
    margin: 0;
    color: lighten($color: #282c34, $amount: 50);
    text-align: left;
    font-size: 18px;
  }
  pre{
    background-color: #282c34;
    color: #fff;
    text-align: left;
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
  }
}
.hljs{
  border-radius: 0 0 5px 5px;
}
</style>
