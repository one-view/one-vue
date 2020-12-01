<style lang="less">

@dark: #31394a;
@width: 200px;
.module-menu{
  position: fixed;
  left: 0;
  top: 0;
  width: @width;
  height: 100%;
  background-color: #2b3344;
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

// import menu from './menu/data'
const menu = [
  {
    label: '基础',
    value: '/base',
    icon: 'icon-layout',
    children: [
      { label: 'layout', value: '/layout' },
      { label: 'color', value: '/color' },
      { label: 'iconfont', value: '/iconfont' },
      { label: 'btn', value: '/btn' }
    ]
  },
  {
    label: '表单',
    value: '/form',
    icon: 'icon-detail',
    children: [
      { label: 'block', value: '/block' },
      { label: 'radio', value: '/radio' },
      { label: 'checkbox', value: '/checkbox' },
      { label: 'textarea', value: '/textarea' },
      { label: 'select', value: '/select' },
      { label: 'cascader', value: '/cascader' },
      { label: 'datepicker', value: '/datepicker' },
      { label: 'slider', value: '/slider' },
      { label: 'tag', value: '/tag' }
    ]
  },
  {
    label: '通知',
    value: '/notice',
    icon: 'icon-message',
    children: [
      { label: 'notify', value: '/notify' }
    ]
  },
  {
    label: '通用',
    value: '/common',
    icon: 'icon-wrench',
    children: [
      { label: 'modal', value: '/modal' },
      { label: 'collapse', value: '/collapse' },
      { label: 'menu', value: '/menu' },
      { label: 'pagination', value: '/pagination' },
      { label: 'calendar', value: '/calendar' }
    ]
  },
  {
    label: '示例',
    value: '/demo',
    icon: 'icon-experiment',
    children: [
      { label: 'form', value: '/form' },
      { label: 'test', value: '/test' }
    ]
  }
]

export default {
  data () {
    return {
      menu
    }
  }
}

</script>
