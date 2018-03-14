<style lang="scss">

.one-tags {
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 0 10px;
    background-color: #fff;
    ul {
        line-height: 24px;
    }
    li {
        float: left;
        position: relative;
        background-color: #f8f8f8;
        margin: 6px 10px 6px 0;
        padding: 0 36px 0 6px;
        height: 30px;
        line-height: 30px;
        border-radius: 3px;
        a {
            $width: 20px;
            $offset: (30px - $width) / 2;
            position: absolute;
            right: $offset;
            top: $offset;
            width: $width;
            height: $width;
            font-size: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 3px;
            color: #ccc;
        }
        &:hover {
            background-color: #eee;
            a {
                background-color: #f46969;
                color: #fff;
            }
        }
    }
    &:hover{
        input{
            background-color: #fbfbfb;
        }
    }
    input {
        float: left;
        border: 0;
        width: 100px;
        height: 30px;
        margin: 6px 0;
        padding: 0 6px;
        transition: background-color .2s ease;
        &:focus {
            background-color: #f8f8f8;
        }
    }
    .j-clear{
      line-height: 30px;
      display: inline-block;
      margin: 6px 0 6px 6px;
      color: #ccc;
      &:hover {
        color: #f46969;
      }
    }
}

.one-tags-disable {
    padding-right: 0;;
    li{
        padding-right: 6px;
        &:hover{
            background-color: #f8f8f8;
        }
    }
}

</style>

<template>

<div class="one-tags" :class="{'one-tags-disable': disable}">
    <ul class="cf">
        <li v-for="item in tags">
            <span>{{ item }}</span>
            <a v-if="!disable" href="javascript:;" @click="remove(item)">x</a>
        </li>
        <input v-if="!disable" type="text" v-model="text" @keyup.enter="add" >
        <a v-show="this.tags.length > 5" href="javascript:;" class="j-clear" @click="clear">清空</a>
    </ul>
</div>

</template>

<script>

export default {
  name: 'one-tag',
  data () {
    return {
      text: '',
      tags: this.value
    }
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clear () {
      this.tags = []
      this.$emit('input', this.tags)
    },
    add () {
      let textArr = this.text.split('|')
      textArr.forEach(item => {
        if (item.trim() !== '' && this.tags.indexOf(item) < 0) {
          this.tags.push(item)
        }
      })
      this.$emit('input', this.tags)
      this.text = ''
    },
    remove (item) {
      let index = this.tags.indexOf(item)
      this.tags.splice(index, 1)
      this.$emit('input', this.tags)
    }
  }
}

</script>
