<template>
  <div class="layout app">
    <side-menu></side-menu>
    <div class="main-view">
      <div class="router-head">

      </div>
      <div class="router-view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from './pages/menu'
export default {
  name: 'app',
  components: {
    SideMenu
  },
  mounted () {
    window.onevue = this
  }
}
</script>

<style lang="less">
html {
    background-color: #ddd;
    font-size: 62.5%;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
body {
    font-family: -apple-system,"PingFang SC","Helvetica Neue",STHeiti,"Microsoft Yahei",Tahoma,sans-serif;
    font-size: 1.4rem;
    background-color: #FFF;
    overflow-x: hidden;
    position: relative;
}
a{
  text-decoration: none;
}
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main-view{
  padding-left: 200px;
  h1,h2 {
    margin: 20px 10px;
  }
  .router-view{
    padding: 50px;
  }
}
</style>
