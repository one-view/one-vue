<style lang="scss" scoped="">
    .one-date-picker{
        $h: 38px;
        display: inline-block;
        min-width: 160px;
        position: relative;
        vertical-align: top;
        *{
            box-sizing: border-box;
        }
        .one-input {
            height: $h;
            width: 100%;
            padding: 8px 10px 8px 10px;
            background-color: #fff;
            border-radius: 3px;
            border: 1px solid #ddd;
            outline: none;
            position: relative;
            cursor: pointer;
            transition: border-color .2s ease;
            .inner-input{
                width: 100%;
                height:100%;
                line-height: 1.3;
                font-size: 16px;
                color: #495060;
            }
            &.active,
            &:hover{
                border-color: #3b62c7;
                box-shadow: 0 0 5px rgba(59, 98, 199, 0.2);
            }
        }
        .one-calendar{
            position: absolute;
            z-index: 9;
            &.top {
                bottom: $h;
            }
            &.bottom {
                top: $h + 2;
            }
        }
    }
</style>

<template>
    <div class="one-date-picker" @click="toggle">
        <div class="one-input" :class="{'active': show}">
            <div class="inner-input">
                <span>{{val}}</span>
            </div>
        </div>
        <div class="one-calendar-wrap" v-show="show" ref="calendar" :class="[position]">
            <one-calendar v-model="val" :enable-time="true" :min="min" :max="max" :range="range" ui="tiny"></one-calendar>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'one-date-picker',
    data () {
      return {
        val: '',
        show: false
      }
    },
    props: {
      value: {
        type: [Number, String, Date],
        default: ''
      },
      position: {
        type: [String],
        default: 'bottom'
      },
      min: {
        type: [Number, String, Date],
        default: ''
      },
      max: {
        type: [Number, String, Date],
        default: ''
      },
      range: {
        type: Boolean,
        default: false
      },
      disable: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      show (val) {
        if (val) {
          document.addEventListener('click', this.hide, false)
        } else {
          document.removeEventListener('click', this.hide, false)
        }
      },
      value (val) {
        if (this.val !== val) {
          this.val = this.filterValue(val)
        }
      },
      val (val) {
        this.$emit('input', val)
        this.$emit('modify', val)
      }
    },
    methods: {
      hide (e) {
        if (this.$refs.calendar && !this.$refs.calendar.contains(e.target)) {
          this.show = false
        }
      },
      toggle () {
        this.show = true
      },
      filterValue (value) {
        if (!value) return ''
        let date = new Date(value)
        // verify date is valid
        date = date.valueOf() ? date : new Date()
        let dateString = date.toLocaleDateString().replace(/\//g, '-')
        let timeString = date.toTimeString().replace(/\s.+/, '')
        return `${dateString} ${timeString}`
      }
    }
  }
</script>
