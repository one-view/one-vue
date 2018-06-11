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
html {
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
/* 滚动设置 */
::-webkit-scrollbar {
    width: 3px;
    background-color: #f8f8f8;
}
::-webkit-scrollbar-thumb {
  background-color: #999;
  border-radius: 4px;
  /*background-color: #666;*/
  /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,1);*/
}
// .overscroll {
//     overflow-y: scroll;
//     -webkit-overflow-scrolling: touch;
//  }
// ::-webkit-scrollbar-track {
//     box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
//     border-radius: 10px;
// }
/* 滚动设置-END */
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
