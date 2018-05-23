<style lang="scss">

$dark: #31394a;
$width: 150px;
.module-menu{
  position: fixed;
  left: 0;
  top: 0;
  width: $width;
  height: 100%;
  background-color: #2b3344;
  transition: width .2s ease;
  &-title{
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

.side-menu-wrapper{
  background-color: $dark;
  color: #fff;
  overflow: auto;
  position: absolute;
  top: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: hidden;
  .side-menu{
    width: $width;
    .one-collapse-head{
      border-bottom: 1px solid $dark - #111;
    }
  }
  // text-align: center;
  .name{
    padding: 12px 12px;
  }
  .submenu{
    a{
      padding: 12px 12px;
      color: #fff;
      display: block;
      background-color: $dark - #111;
      transition: background .3s ease;
      &:hover{
        background-color: $dark - #080808;
      }
      &.router-link-active{
        background-color: #f50;
        // color: $dark;
        color: #fff;
      }
    }
  }
}

</style>

<template>
  <div class="module module-menu">
    <h3 class="module-menu-title">
      <router-link :to="{ path: '/' }">OneVue</router-link>
    </h3>
    <div class="side-menu-wrapper">
      <div class="side-menu">
        <one-collapse-group :accordion="false">
          <template v-for="item, key in menu">
            <one-collapse :name="item.name">
              <ul class="submenu">
                <li v-for="link in item.links">
                  <router-link :to="{ path: `/${link}` }">{{ link }}</router-link>
                </li>
              </ul>
            </one-collapse>
          </template>
        </one-collapse-group>
      </div>
    </div>
  </div>
</template>

<script>

import menu from './menu/data'
export default {
  data () {
    return {
      menu
    }
  }
}

</script>
