<style lang="less">

@dark: #31394a;
@width: 200px;
.module-menu{
  position: fixed;
  left: 0;
  top: 0;
  width: @width;
  height: 100%;
  // background-color: #2b3344;
  background-color: #2b2b41;
  transition: width .2s ease;
  &-logo{
    height: 50px;
    background-color: #17c251;
    display: flex;
    align-items: center;
    justify-content: center;
    a{
      color: #fff;
    }
  }
}

</style>

<template>
  <div class="module module-menu">
    <h3 class="module-menu-logo">
      <router-link :to="{ path: '/' }">One</router-link>
    </h3>
    <div class="side-menu-wrapper">
      <one-menu :data="menu" ui="dark"></one-menu>
    </div>
  </div>
</template>

<script>

import menu from '../router/menu'

export default {
  data () {
    return {
      menu
    }
  }
}

</script>
