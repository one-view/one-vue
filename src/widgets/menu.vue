<style lang="scss" scoped>
    .one-menu{
        $dark: #31394a;
        $max-width: 360px;
        display: block;
        overflow: auto;
        position: relative;
        overflow-x: hidden;
        max-width: $max-width;
        width: 100%;
        user-select: none;
        &.ui-dark{
            background-color: #31394a;
            color: #fff;
            .one-collapse {
                border-bottom: 1px solid #202839;
            }
            .submenu {
                background-color: #202839;
                a{
                    color: #fff;
                }
            }
        }
        .one-collapse .one-collapse-head{
            border-bottom: 1px solid $dark - #111;
        }
        .name{
            padding: 12px 12px;
        }
        .submenu{
            a{
                padding: 12px 12px;
                display: block;
                white-space: nowrap;
            }
        }
    }
</style>

<template>
    <div class="one-menu" :class="uiClass">
        <one-collapse-group :accordion="accordion">
            <template v-for="item, key in data">
                <one-collapse :name="getTitle(item)">
                    <ul class="submenu">
                        <li v-for="it in getChildren(item)">
                            <router-link :to="{ path: `${getLink(it)}` }">{{ getTitle(it) }}</router-link>
                        </li>
                    </ul>
                </one-collapse>
            </template>
        </one-collapse-group>
    </div>
</template>

<script>
  export default {
    name: 'one-menu',
    data () {
      return {
        activeArray: []
      }
    },
    props: {
      data: {
        type: Array,
        default: () => {}
      },
      accordion: {
        type: Boolean,
        default: false
      },
      proxyName: {
        type: Object,
        default () {
          return {
            link: 'value',
            title: 'label',
            children: 'children'
          }
        }
      },
      ui: {
        type: String,
        default: ''
      }
    },
    computed: {
      uiClass () {
        let classname = 'ui-' + (this.ui || 'default')
        console.warn(this.ui, classname)
        return [classname]
      },
      getLink () {
        return item => item[this.proxyName.link]
      },
      getTitle () {
        return item => item[this.proxyName.title]
      },
      getChildren () {
        return item => item[this.proxyName.children]
      }
    },
    install (Vue) {
      Vue.component(this.name, this)
    }
  }
</script>
