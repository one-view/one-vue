<style lang="scss" scoped>
$w: 20px;
.v-radio {
  li {
    float: left;
    line-height: 36px;
    padding: 0 0 0 30px;
    margin-right: 20px;
    position: relative;
    cursor: pointer;
  }
  .on {
    i {
      $width: 12px;
      $color: #4181e0;
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
  i {
    position: absolute;
    left: 0;
    top: 7px;
    width: $w;
    height: $w;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-sizing: border-box;
  }
}

.v-radio-disable{
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
  <div class="v-radio" :class="{'v-radio-disable': disable}">
    <ul class="cf">
      <li v-for="item in option" @click="select(item)" :class="{'on': item.value === selected.value}">
        <i aria-hidden="true"></i>
        <span>{{ item.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import formItemValidate from '../common/mixin/formItemValidate'

  export default {
    name: 'one-radio',
    mixins: [
      formItemValidate
    ],
    data () {
      return {
        TYPE: 'form',
        val: this.value
      }
    },
    computed: {
      selected () {
        let matchOptions = this.option.filter((elem, index) => elem.value === this.val)
        return matchOptions.length ? matchOptions[0] : {value: null}
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
    }
  }
</script>
