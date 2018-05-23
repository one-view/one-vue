<style lang="scss" scoped>
    .one-tree-nav{
        $h: 38px;
        font-size: 14px;
        position: relative;
        display: block;
        overflow: hidden;
        *{
            box-sizing: border-box;
        }
        .one-tree-item{
            .one-tree-branch{
                height: $h;
                line-height: $h;
                position: relative;
                padding: 0 10px;
                user-select: none;
                cursor: pointer;
                .one-tree-toggle-icon{
                    position: absolute;
                    right: 10px;
                    top: 13px;
                    width: 6px;
                    height: 6px;
                    text-align: center;
                    transition: transform .3s ease;
                    transform: rotate(135deg);
                    border-right: 1px solid #bbb;
                    border-top: 1px solid #bbb;
                    text-indent: -9999em;
                    line-height: 0;
                }
                .one-tree-toggle-icon.arrow{
                    position: absolute;
                    right: 10px;
                    top: 13px;
                    width: 6px;
                    height: 6px;
                    transform: rotate(-45deg);
                    border-right: 1px solid #bbb;
                    border-top: 1px solid #bbb;
                    text-indent: -9999em;
                    line-height: 0;
                }
            }
            .one-second-tree{
                overflow: hidden;
                .one-second-item{
                    height: $h;
                    line-height: $h;
                    a{
                        padding: 0 0 0 20px;
                        white-space: nowrap;
                        width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
            }
        }
    }
</style>

<template>
    <ul class="one-tree-nav">
        <li v-for="(item, index) in data" class="one-tree-item">
            <div class="one-tree-branch" @click="(e) => treeItemClick(e, index, getLink(item), getTitle(item))">
                <a v-if="getLink(item)" :href="'#'+getLink(item)">{{getTitle(item)}}</a>
                <a v-else href="javascript:;">{{getTitle(item)}}</a>
                <div v-if="getChildren(item)&&getChildren(item).length>0" class="one-tree-toggle-icon" :class="[{arrow: ~activeArray.indexOf(index)}]">+</div>
            </div>
            <template v-if="getChildren(item)&&getChildren(item).length>0">
                <transition @before-enter="(el) => beforeEnter(item,el)"
                            @enter="(el, done) => enter(item, el, done)"
                            @leave="(el, done) => leave(item, el, done)"
                            :css="false">
                    <ul :key="`branch_${index}`" v-show="showBranch(index)" class="one-second-tree">
                        <li v-for="(it, i) in getChildren(item)" class="one-second-item">
                            <div>
                                <a v-if="getLink(it)" :href="'#'+getLink(it)">{{getTitle(it)}}</a>
                                <a v-else href="javascript:;">{{getTitle(it)}}</a>
                            </div>
                        </li>
                    </ul>
                </transition>
            </template>
        </li>
    </ul>
</template>

<script>
  // import velocity from 'velocity-animate'
  export default {
    name: 'one-tree-nav',
    data () {
      return {
        itemLineHeight: 36,
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
        default: 'link'
      },
      titleName: {
        type: String,
        default: 'title'
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
      },
      showBranch () {
        return (index) => !!~this.activeArray.indexOf(index)
      }
    },
    methods: {
      treeItemClick (e, index, link, title) {
        const inx = this.activeArray.indexOf(index)
        if (~inx) {
          this.activeArray.splice(inx, 1)
        } else {
          this.activeArray.push(index)
        }
      },
      enter (item, el, done) {
        const height = `${item[this.childrenName].length * this.itemLineHeight + 10}px`
        velocity(el, { height }, { duration: 300, complete: done })
      },
      beforeEnter (item, el) {
        el.style.height = '0px'
      },
      leave (item, el, done) {
        velocity(el, { height: '0px' }, { duration: 300, complete: done})
      }
    },
    mounted () {
    }
  }
</script>