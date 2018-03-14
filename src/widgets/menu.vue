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
                &.router-link-active{
                    color: #fff;
                    background-color: #66ca70;
                }
            }
        }
    }
</style>

<template>
    <div class="one-menu">
        <one-collapse-group :accordion="true">
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
      linkName: {
        type: String,
        default: 'value'
      },
      titleName: {
        type: String,
        default: 'label'
      },
      childrenName: {
        type: String,
        default: 'children'
      }
    },
    computed: {
      getLink () {
        return (item) => item[this.linkName]
      },
      getTitle () {
        return (item) => item[this.titleName]
      },
      getChildren () {
        return (item) => item[this.childrenName]
      }
    },
  }
</script>
