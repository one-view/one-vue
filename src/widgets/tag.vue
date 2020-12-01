<style lang="less">
.one-tags {
  @pad: 1px;
  @h: 28px;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 0 @pad;
  background-color: #fff;
  max-width: 400px;
  transition: border 0.2s ease;
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #ccc;
  }
  ul {
    line-height: 24px;
    display: flex;
    flex-wrap: wrap;
  }
  li {
    position: relative;
    font-size: 15px;
    &.one-tag-li {
      background-color: #fbfbfb;
      margin: @pad @pad @pad 0;
      padding: 0 36px 0 6px;
      height: @h;
      line-height: @h;
      border-radius: 3px;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.1) inset;
      a {
        @width: 20px;
        @offset: (@h - @width) / 2;
        position: absolute;
        right: @offset;
        top: @offset;
        width: @width;
        height: @width;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
        color: #ccc;
        text-decoration: none;
      }
      &:hover {
        background-color: #f2f2f2;
        a {
          background-color: #f46969;
          color: #fff;
        }
      }
    }
    &.control {
    }
  }
  &:hover {
    border-color: #488ef1;
    input {
      background-color: #fbfbfb;
    }
  }
  input {
    float: left;
    border: 0;
    width: 120px;
    height: @h;
    margin: @pad;
    padding: 0 8px;
    transition: background-color 0.2s ease;
    border: 1px dashed #e8e8e8;
    border-radius: 3px;
    outline: none;
    &:focus {
      background-color: #f8f8f8;
      box-shadow: none !important;
      border: 1px dashed #e8e8e8 !important;
    }
  }
  .j-clear {
    line-height: @h;
    display: inline-block;
    margin: @pad 0 @pad 6px;
    color: #ccc;
    text-decoration: none;
    &:hover {
      color: #f46969;
    }
  }
}
.one-tags-disable {
  padding-right: 0;
  li {
    padding-right: 6px;
    &:hover {
      background-color: #f8f8f8;
    }
  }
}
</style>

<template>
  <div class="one-tags" :class="{ 'one-tags-disable': disable }">
    <ul class="cf">
      <li v-for="(item, index) in tags" class="one-tag-li" :key="index">
        <span>{{ item }}</span>
        <a v-if="!disable" href="javascript:;" @click="remove(item)">x</a>
      </li>
      <li class="one-tag-input">
        <input placeholder="输入完回车" v-if="!disable" type="text" v-model="text" @keyup.enter="add" />
        <a v-show="this.tags.length > 5" href="javascript:;" class="j-clear" @click="clear">清空</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'one-tag',
  data() {
    return {
      text: '',
      tags: this.value,
    };
  },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    clear() {
      this.tags = [];
      this.$emit('input', this.tags);
      this.$emit('change', this.tags);
    },
    add() {
      let textArr = this.text.split('|');
      textArr.forEach((item) => {
        if (item.trim() !== '' && this.tags.indexOf(item) < 0) {
          this.tags.push(item);
        }
      });
      this.$emit('input', this.tags);
      this.$emit('change', this.tags);
      this.text = '';
    },
    remove(item) {
      let index = this.tags.indexOf(item);
      this.tags.splice(index, 1);
      this.$emit('input', this.tags);
      this.$emit('change', this.tags);
    },
  },
  install(Vue) {
    Vue.component(this.name, this);
  },
};
</script>
