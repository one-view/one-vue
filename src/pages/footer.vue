<style lang="less" scoped>

footer {
  position: fixed;
  bottom: 20px;
  font-size: 1.2rem;
  text-align: center;
  color: #999;
  .module-links{
    li{
      display: inline-block;
    }
    a{
      color: #999;
    }
  }
  .module-copy{
    border-top: 1px solid #eee;
    padding-top: 10px;
    margin-top: 10px;
    font-size: 1rem;
  }
}

</style>

<template>

<footer>

  <div class="module-links">
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
  <div class="module-copy">
    copyright 2018 @portal-squad
  </div>
</footer>

</template>

<script>

export default {}

</script>
