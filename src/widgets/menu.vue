<style lang="less">
.one-menu {
  @dark: #31394a;
  // @max-width: 360px;
  display: block;
  overflow: auto;
  position: relative;
  overflow-x: hidden;
  // max-width: @max-width;
  width: 100%;
  user-select: none;
  &.ui-dark {
    background-color: #31394a;
    color: #fff;
    // .one-collapse {
      // border-bottom: 1px solid #202839;
    // }
    .submenu {
      background-color: #202839;
      a {
        color: #fff;
      }
    }
  }
  .one-collapse {
    .one-collapse-head {
      padding: 16px 20px;
      border-bottom: 1px solid @dark - #111;
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
        background-color: #f50;
        color: #fff;
      }
    }
  }
}
</style>

<template>
  <div class="one-menu" :class="classNames">
    <one-collapse-group :accordion="accordion">
      <template v-for="(item, index) in data">
        <one-collapse :name="getTitle(item)" :key="index">
          <template v-slot:head>
            <i :class="['one-icon', item.icon]"></i>
          </template>
          <template v-slot:body>
            <ul class="submenu">
              <li v-for="(it, idx) in getChildren(item)" :key="idx">
                <router-link :to="{ path: `${getLink(it)}` }">
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
  name: "one-menu",
  data() {
    return {
      activeArray: [],
    };
  },
  props: {
    data: {
      type: Array,
      default: () => {},
    },
    accordion: {
      type: Boolean,
      default: false,
    },
    proxyName: {
      type: Object,
      default() {
        return {
          link: "value",
          title: "label",
          children: "children",
        };
      },
    },
    ui: {
      type: String,
      default: "",
    },
  },
  computed: {
    classNames() {
      let classname = "ui-" + (this.ui || "default");
      console.warn(this.ui, classname);
      return [classname];
    },
    getLink() {
      return (item) => item[this.proxyName.link];
    },
    getTitle() {
      return (item) => item[this.proxyName.title];
    },
    getChildren() {
      return (item) => item[this.proxyName.children];
    },
  },
  install(Vue) {
    Vue.component(this.name, this);
  },
};
</script>
