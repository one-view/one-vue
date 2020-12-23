<template>
  <div class="one-menu" :class="classNames">
    <one-collapse-group :accordion="accordion">
      <template v-for="(item, index) in data">
        <one-collapse :key="index" :arrow="hasChildren(item)">
          <template v-slot:head>
            <router-link :to="getLink(item)">
              <i :class="['one-icon', item.icon]"></i> 
              <span>{{ getTitle(item) }}</span>
            </router-link>
          </template>
          <template v-slot:body>
            <ul class="submenu" v-if="hasChildren(item)">
              <li v-for="(it, idx) in getChildren(item)" :key="idx">
                <router-link :to="getLink(it)">
                  {{ getTitle(it)}}
                </router-link>
              </li>
            </ul>
          </template>
        </one-collapse>
      </template>
    </one-collapse-group>
  </div>
</template>

<script>
export default {
  name: 'one-menu',
  data() {
    return {
      activeArray: []
    };
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
      default() {
        return {
          link: 'value',
          title: 'label',
          children: 'children'
        }
      },
    },
    ui: {
      type: String,
      default: ''
    },
  },
  computed: {
    classNames() {
      const classname = 'ui-' + (this.ui || 'default')
      return [classname]
    },
  },
  methods: {
    getLink(item) {
      return item[this.proxyName.link] || ''
    },
    getTitle(item) {
      return item[this.proxyName.title]
    },
    getChildren(item) {
      return item[this.proxyName.children]
    },
    hasChildren(item) {
      const children = this.getChildren(item)
      return !!(children && children.length)
    }
  },
  install(Vue) {
    Vue.component(this.name, this)
  }
}
</script>

<style lang="less">
.one-menu {
  @dark: #31394a;
  display: block;
  overflow: auto;
  position: relative;
  overflow-x: hidden;
  width: 100%;
  user-select: none;
  &.ui-dark {
    color: #fff;
    .submenu {
      // background-color: #202839;
      a {
        color: #fff;
      }
    }
  }
  .one-collapse {
    .one-collapse-head {
      padding: 0;
      // border-bottom: 1px solid @dark - #111;
      a {
        display: block;
        color: #fff;
        padding: 16px 20px;
        &:hover {
          background-color: rgba(20,20,20,.2);
        }
      }
    }
    .one-icon {
      margin-right: 10px;
    }
  }
  .submenu {
    a {
      text-decoration: none;
      padding: 16px 36px;
      display: block;
      white-space: nowrap;
      &:hover {
        background-color: rgba(20,20,20,.2);
      }
      &.router-link-active {
        background-color: rgba(20,20,20,.3);
        color: #fff;
      }
    }
  }
}
</style>