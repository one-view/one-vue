<style lang="scss" scoped>
$color: #4f6dbb;
.one-pagination {
  display: block;
//   height: 200px;
//   overflow: hidden;
  position: relative;
  font-size: 14px;
  * {
    box-sizing: border-box;
  }
  $h: 30px;
  width: 100%;
  text-align: center;
  .one-total {
    margin: 20px;
    float: right;
    height: 33px;
    line-height: 33px;
    color: #aaa;
  }
  ul {
    display: inline-block;
    margin: 20px auto;
    line-height: 30px;
    height: $h;
    .one-item {
    }
    li {
      transition: all 0.5s;
      display: block;
      float: left;
      &.active {
        a {
          position: relative;
          margin-left: 0;
          color: $color;
          border-color: $color;
        }
      }
      a {
        position: static;
        display: block;
        padding: 6px 12px 6px 12px;
        margin-left: -1px;
        line-height: 1.4;
        color: #aaa;
        text-decoration: none;
        background-color: #fff;
        border: 1px solid #ddd;
        &:hover {
          color: $color;
        }
      }
      &.one-size {
        position: relative;
        .l-size-select {
          width: 100px;
          margin: 0 20px;
          position: relative;
          padding: 6px 20px 6px 12px;
          .one-tree-toggle-icon {
            position: absolute;
            right: 8px;
            top: 12px;
            width: 6px;
            height: 6px;
            transition: transform 0.3s ease;
            transform: rotate(135deg);
            border-right: 1px solid #bbb;
            border-top: 1px solid #bbb;
          }
          .one-tree-toggle-icon.arrow {
            transform: rotate(-45deg);
          }
          &:hover {
            .one-tree-toggle-icon {
              border-color: $color;
            }
          }
        }
        .one-size-options {
          cursor: pointer;
          width: 100px;
          position: absolute;
          left: 20px;
          top: $h + 2px;
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 2px;
          div {
            height: $h;
            line-height: $h;
            color: #aaa;
            &:hover {
              background: #f3f3f3;
              color: $color;
            }
          }
        }
      }
    }
  }
}
</style>

<template>

<div class="one-pagination">
    <div class="one-total">
        <span>共&nbsp;&nbsp;{{total}}&nbsp;&nbsp;条</span>
    </div>
    <ul class="cf">
        <li v-if="showHeadTail">
            <a href="javascript:;" @click="jump(1)" v-show="!~pageNumList.indexOf(1)">
                <span>首页</span>
            </a>
        </li>
        <li v-if="showPreNext">
            <a href="javascript:;" @click="jump(current - 1)" v-show="current !== 1">
                <span>&lt;</span>
            </a>
        </li>
        <li :class="{'active': current === item}" v-for="item in pageNumList">
            <a href="javascript:;" @click="jump(item)">{{ item }}</a>
        </li>
        <li v-if="showPreNext">
            <a href="javascript:;" @click="jump(current + 1)" v-show="current !== pageTotal">
                <span>&gt;</span>
            </a>
        </li>
        <li v-if="showHeadTail">
            <a href="javascript:;" @click="jump(pageTotal)" v-show="!~pageNumList.indexOf(pageTotal)">
                <span>尾页</span>
            </a>
        </li>
        <li class="one-size">
            <a href="javascript:;" class="l-size-select" @click="sizeSelect">
                <span>{{currentSize}}条&nbsp;/&nbsp;页</span>
                <div class="one-tree-toggle-icon" :class="{arrow: showSizeOption}"></div>
            </a>
            <div class="one-size-options" v-show="showSizeOption" ref="sizeOption">
                <div v-for="item in sizeOption" v-if="item!==currentSize" @click="sizeChange(item)">
                    <span>{{item}}条&nbsp;/&nbsp;页</span>
                </div>
            </div>
        </li>
    </ul>
</div>

</template>

<script>
export default {
  name: 'one-pagination',
  data () {
    return {
      current: this.index,
      currentSize: this.size,
      sizeOption: [5, 10, 20, 30],
      showSizeOption: false
    }
  },
  props: {
    index: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 6
    },
    showHeadTail: {
      type: Boolean,
      default: true
    },
    showPreNext: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    pageTotal () {
      return Math.ceil(this.total / this.currentSize)
    },
    isBeyondSize () {
      return this.pageTotal > this.max
    },
    beyondSize () {
      return this.isBeyondSize ? this.max : this.pageTotal
    },
    beyondStart () {
      return this.isBeyondSize ? this.pageTotal - this.max + 1 : 1
    },
    halfMax () {
      return Math.floor(this.max / 2)
    },
    startNum () {
      const index = this.current
      if (index - this.halfMax < 1) {
        return 1
      }
      return index - this.halfMax
    },
    endNumb () {
      const index = this.current
      if (index + this.halfMax > this.pageTotal) {
        return this.pageTotal
      }
      return index + this.halfMax
    },
    pageNumList () {
      let list = []
      for (let i = this.startNum; i <= this.endNumb; i++) {
        list.push(i)
      }
      return list
    }
  },
  methods: {
    jump (item) {
      item = item < 1 ? 1 : item > this.pageTotal ? this.pageTotal : item
      let preIdx = this.current
      this.current = item
      this.$emit('input', this.current)
      this.$emit('change', {
        fromIndex: preIdx,
        toIndex: this.current,
        size: this.currentSize
      })
    },
    sizeSelect () {
      this.showSizeOption = !this.showSizeOption
    },
    // 重置首页
    sizeChange (item) {
      this.current = 1
      this.showSizeOption = false
      this.currentSize = item
      this.$emit('change', {
        fromIndex: this.index,
        toIndex: this.current,
        size: this.currentSize
      })
    }
  },
  mounted () {}
}
</script>
