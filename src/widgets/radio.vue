<style lang="scss" scoped>
$w: 20px;
$h: 32px;
$color: #4181e0;
.one-radio {
  li {
    float: left;
    line-height: $h;
    padding: 0 0 0 30px;
    margin-right: 20px;
    position: relative;
    cursor: pointer;
    font-size: 15px;
  }
  i {
    position: absolute;
    left: 0;
    top: ($h - $w) / 2;
    width: $w;
    height: $w;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-sizing: border-box;
  }
  .on {
    i {
      $width: 10px;
      $offset: ($w - $width) /2 - 1;
      border: 1px solid $color;
      &:after {
        content: '';
        position: absolute;
        left: $offset;
        top: $offset;
        width: $width;
        height: $width;
        border-radius: $w;
        background-color: $color;
        box-sizing: border-box;
      }
    }
  }
  &.one-radio-ui-line {
    li {
      border: 1px solid #e8e8e8;
      line-height: $h - 2;
      padding: 0 10px;
      margin: 0;
      margin-right: -1px;
      &.on {
        background-color: $color;
        border-color: $color;
        color: #fff;
      }
      &:first-child{
        border-radius: 3px 0 0 3px;
      }
      &:last-child{
        border-radius: 0 3px 3px 0;
      }
      i{
        display: none;
      }
    }
  }
  &.one-radio-ui-button{
    li {
      padding: 0 10px;
      margin: 0;
      &.on {
        background-color: $color;
        border-color: $color;
        border-radius: 3px;
        color: #fff;
      }
    }
    i{
      display: none;
    }
  }
}


.one-radio-disable{
  .on{
    i{
      border-color: #999;
      &:after{
        background-color: #999;
      }
    }
  }
}

</style>

<template>
  <div class="one-radio" :class="{'one-radio-disable': disable, 'one-radio-ui-line': isUiLine, 'one-radio-ui-button': isUiButton}">
    <ul class="cf">
      <li v-for="(item, index) in option" @click="select(item)" :class="{'on': item.value === selected.value}" :key="index">
        <i aria-hidden="true"></i>
        <span>{{ item.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'one-radio',
    data () {
      return {
        val: this.value
      }
    },
    computed: {
      selected () {
        let matchOptions = this.option.filter((elem, index) => elem.value === this.val)
        return matchOptions.length ? matchOptions[0] : {value: null}
      },
      isUiLine () {
        return this.ui === 'line'
      },
      isUiButton () {
        return this.ui === 'button'
      }
    },
    props: {
      value: {
        type: [Number, String],
        default: 0
      },
      option: {
        type: Array,
        default: () => []
      },
      disable: {
        type: Boolean,
        default: false
      },
      ui: {
        type: String,
        default: 'default'
      }
    },
    watch: {
      value (newValue) {
        this.val = newValue
        this.$emit('modify', newValue)
      }
    },
    methods: {
      select (item) {
        if (this.disable) return
        this.val = item.value
        this.$emit('input', item.value)
        this.$emit('change', item.value)
      }
    },
    install (Vue) {
      Vue.component(this.name, this)
    }
  }
</script>
