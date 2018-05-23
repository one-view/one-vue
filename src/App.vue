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
a{
  color: #f50;
}
// input, button, select, textarea {
//     font-family: inherit;
//     font-size: inherit;
//     line-height: inherit;
//     margin: 0;
//     font: inherit;
//     color: inherit;
// }
// input[type='text']:focus, input[type='password']:focus,
//  .control-body textarea:focus, input[type='number']:focus,
//   button[type="button"]:focus, button:focus, button:active, button.add-operation-time:focus, button.add-operation-time:active, .bootstrap-select .dropdown-toggle:focus {
//     box-shadow: 0 0 4px 0 rgba(0, 173, 198, 0.4) !important;
//     border: solid 0.5px #00ade1 !important;
//     }
</style>
