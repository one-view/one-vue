<style lang="less" scoped>
@color: #4f6dbb;
.one-pagination {
  display: flex;
  position: relative;
  font-size: 14px;
  * {
    box-sizing: border-box;
  }
  @h: 30px;
  text-align: center;
  width: 100%;
  .one-total {
    margin: 20px;
    height: 33px;
    line-height: 33px;
    color: #aaa;
  }
  ul {
    margin: 20px auto;
    line-height: 30px;
    height: @h;
    display: flex;
    li {
      transition: all 0.5s;
      display: block;
      &.active {
        a {
          background-color: #f8f8f8;
          position: relative;
          margin-left: 0;
          color: @color;
          border-radius: 2px;
          border-color: @color;
        }
      }
      a {
        position: static;
        display: block;
        padding: 6px 12px;
        line-height: 1.2;
        font-size: 15px;
        color: #aaa;
        text-decoration: none;
        background-color: #fff;
        // border: 1px solid #ddd;
        &:hover {
          color: @color;
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
              border-color: @color;
            }
          }
        }
        .one-size-options {
          cursor: pointer;
          width: 100px;
          position: absolute;
          left: 20px;
          top: @h + 2px;
          background-color: #fff;
          border: 1px solid #eee;
          border-radius: 5px;
          div {
            height: @h;
            line-height: @h;
            color: #aaa;
            &:hover {
              background: #f3f3f3;
              color: @color;
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
    <ul>
      <li v-if="showPreNext">
        <a href="javascript:;" @click="jump(current - 1)">
          <span>&lt;</span>
        </a>
      </li>

      <li v-if="pageTotal > 0" :class="{ active: current === 1 }">
        <a href="javascript:;" @click="jump(1)">
          <span>1</span>
        </a>
      </li>

      <li v-show="pageTotal > max && pager[0] > 2 ">
        ...
      </li>

      <li :class="{ active: current === item }" v-for="(item, index) in pager" :key="index">
        <a href="javascript:;" @click="jump(item)">{{ item }}</a>
      </li>

      <li v-show="pager[pager.length - 1] < pageTotal - 1 && pageTotal > max">
        ...
      </li>

      <li v-if="pageTotal > 1" :class="{ active: current === pageTotal }">
        <a href="javascript:;" @click="jump(pageTotal)">
          <span>{{ pageTotal }}</span>
        </a>
      </li>

      <li v-if="showPreNext">
        <a href="javascript:;" @click="jump(current + 1)">
          <span>&gt;</span>
        </a>
      </li>

      <li class="one-size">
        <a href="javascript:;" class="l-size-select" @click="sizeSelect">
          <span>{{ currentSize }}条&nbsp;/&nbsp;页</span>
          <div
            class="one-tree-toggle-icon"
            :class="{ arrow: showSizeOption }"
          ></div>
        </a>
        <div class="one-size-options" v-show="showSizeOption" ref="sizeOption">
          <template v-for="(item, index) in sizeOption" >
            <div v-if="item !== currentSize" @click="sizeChange(item)" :key="index">
              <span>{{ item }}条&nbsp;/&nbsp;页</span>
            </div>
          </template>
        </div>
      </li>
    </ul>
    <div class="one-total">
      <span>共&nbsp;&nbsp;{{ total }}&nbsp;&nbsp;条</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "one-pagination",
  data() {
    return {
      current: this.index,
      currentSize: this.size,
      sizeOption: [5, 10, 20, 30],
      showSizeOption: false,
    };
  },
  props: {
    index: {
      type: Number,
      default: 1,
    },
    size: {
      type: Number,
      default: 10,
    },
    total: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 5,
    },
    showHeadTail: {
      type: Boolean,
      default: true,
    },
    showPreNext: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    pageTotal() {
      return Math.ceil(this.total / this.currentSize);
    },
    
    // 1,...,3,4,5,6,7,...,9
    // 1,...,3,4,5,6,7,8
    // 1,2,3,4,5,6,...,8
    // 1,2,3,4,5,6,7
    pager() {
      const index = this.current;
      const total = this.pageTotal
      const half = Math.floor(this.max / 2)
      let start = 2
      let end = total
      
      if (index - half > start) {
        start = index - half
      }

      if (start + this.max < total) {
        console.log('middle')
        end = start + this.max
      }

      if (index + half >= total - 1)  {
        console.log('end')
        start = total - this.max
        start = start < 2 ? 2: start
        end = total
      }

      let list = [];
      for (let i = start; i < end; i++) {
        list.push(i);
      }
      console.log(start, end, list)
      return list;
    },
  },
  methods: {
    jump(item) {
      item = item < 1 ? 1 : item > this.pageTotal ? this.pageTotal : item;
      let preIdx = this.current;
      this.current = item;
      this.$emit("input", this.current);
      this.$emit("change", {
        fromIndex: preIdx,
        toIndex: this.current,
        size: this.currentSize,
      });
    },
    sizeSelect() {
      this.showSizeOption = !this.showSizeOption;
    },
    // 重置首页
    sizeChange(item) {
      this.current = 1;
      this.showSizeOption = false;
      this.currentSize = item;
      this.$emit("change", {
        fromIndex: this.index,
        toIndex: this.current,
        size: this.currentSize,
      });
    },
  },
  mounted() {},
  install(Vue) {
    Vue.component(this.name, this);
  }
}
</script>
