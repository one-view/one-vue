<template>
  <div class="layout app">
    <side-menu></side-menu>
    <div class="main-view">
      <div class="module">
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

<style lang="scss">
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main-view{
  padding-left: 150px;
  .module{
    padding: 15px 30px;
  }
}
</style>
