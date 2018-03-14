<template>

<div class="one-checkbox" :class="{'one-checkbox-disable': disable}">
    <ul>
        <li :class="{'on': valFlag}" @click="check">
            <i aria-hidden="true"></i>
            <span v-show="showText">{{ valFlag ? textTrue : textFalse }}</span>
        </li>
    </ul>
</div>

</template>
<style src="./style.scss" lang="scss" scoped></style>
<script>
  import propToData from '../../common/mixin/propToData'

  export default {
    name: 'one-checkbox',
    mixins: [
      propToData({prop: 'value', data: 'val'})
    ],
    data () {
      return {
        TYPE: 'form',
        val: ''
      }
    },
    computed: {
      valFlag () {
        return this.val === this.valueTrue
      }
    },
    watch: {
      val (val) {
        this.$emit('modify', val)
      }
    },
    props: {
      textTrue: {
        type: String,
        default: 'YES'
      },
      textFalse: {
        type: String,
        default: 'NO'
      },
      valueTrue: {
        type: [String, Number, Boolean],
        default: true
      },
      valueFalse: {
        type: [String, Number, Boolean],
        default: false
      },
      showText: {
        type: Boolean,
        default: true
      },
      value: {
        type: [String, Number, Boolean],
        default: false
      },
      disable: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      check () {
        if (this.disable) return
        if (this.val === this.valueTrue) {
          this.val = this.valueFalse
        } else {
          this.val = this.valueTrue
        }
        this.$emit('input', this.val)
        this.$emit('change', this.val)
      }
    }
  }
</script>
