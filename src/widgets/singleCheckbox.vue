<style lang="scss">
.v-checkbox {
    display: block;
    min-height: 28px;
    min-width: 28px;
    a {
      list-style: none;
        float: left;
        line-height: 36px;
        padding: 0 0 0 30px;
        margin-right: 20px;
        position: relative;
        cursor: pointer;
    }
    .on {
        i {
            $w: 6px;
            $c: #4181e0;
            $d: #fff;
            background-color: $c;
            border: 1px solid $c;
            &:after {
                position: absolute;
                content: '';
                width: $w;
                height: $w*2;
                transform: rotate(45deg);
                border-right: 2px solid $d;
                border-bottom: 2px solid $d;
                left: $w;
                top: 2px;
            }
        }
    }
    i {
        position: absolute;
        left: 0;
        top: 7px;
        width: 20px;
        height: 20px;
        border: 1px solid #ddd;
        border-radius: 3px;
    }
}

.v-checkbox-disable {
    .on {
        i{
            background-color: #999;
            border-color: #999;
        }
    }
}

</style>

<template>

<div class="v-checkbox" :class="{'v-checkbox-disable': disable}">
    <a @click="check" :class="{'on': checked}">
        <i aria-hidden="true"></i>
    </a>
</div>

</template>

<script>
export default {
  name: 'one-single-checkbox',
  props: {
    trueValue: {
      type: [Number, String, Boolean],
      default: true
    },
    falseValue: {
      type: [Number, String, Boolean],
      default: false
    },
    value: {
      type: [Number, String, Boolean],
      default: () => []
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      TYPE: 'form',
      val: ''
    }
  },
  watch: {
    value (val) {
      this.val = val
    }
  },
  computed: {
    checkedItems () {
      return this.options.filter(option => {
        return option.checked === true
      })
    },
    checked () {
      return this.val === this.trueValue
    }
  },
  methods: {
    check () {
      if (this.disable) return
      if (this.val === this.trueValue) {
        this.val = this.falseValue
      } else {
        this.val = this.trueValue
      }
      this.$emit('input', this.val)
      this.$emit('select', this.val)
    }
  },
  mounted () {
    this.val = this.value
  }
}
</script>
