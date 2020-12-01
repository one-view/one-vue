<style lang="less" scoped="">
.one-date-picker {
  @h: 32px;
  display: inline-block;
  min-width: 150px;
  position: relative;
  vertical-align: top;
  * {
    box-sizing: border-box;
  }
  .one-input {
    height: @h;
    width: 100%;
    padding: 8px 10px 8px 10px;
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid #ddd;
    outline: none;
    position: relative;
    cursor: pointer;
    transition: border-color 0.2s ease;
    .inner-input {
      width: 100%;
      height: 100%;
      line-height: 1.2;
      font-size: 14px;
      color: #495060;
    }
    &.active,
    &:hover {
      border-color: #3b62c7;
      box-shadow: 0 0 5px rgba(59, 98, 199, 0.2);
    }
  }
  .one-calendar {
    position: absolute;
    z-index: 9;
    &.top {
      bottom: @h;
    }
    &.bottom {
      top: @h + 2;
    }
  }
}
</style>

<template>
  <div class="one-date-picker" @click="toggle" ref="datepicker">
    <div class="one-input" :class="{ active: show }">
      <div class="inner-input">
        <span>{{ val }}</span>
      </div>
    </div>
    <div class="one-calendar-wrap" v-show="show" ref="calendar" :class="[position]">
      <one-calendar v-model="val" :enable-time="true" :min="min" :max="max" :range="range" @select="select" ui="tiny">
      </one-calendar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'one-date-picker',
  data() {
    return {
      val: this.filterValue(this.value),
      show: false,
    };
  },
  props: {
    value: {
      type: [Number, String, Date],
      default: '',
    },
    position: {
      type: [String],
      default: 'bottom',
    },
    min: {
      type: [Number, String, Date],
      default: '',
    },
    max: {
      type: [Number, String, Date],
      default: '',
    },
    range: {
      type: Boolean,
      default: false,
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    value(val) {
      this.val = this.filterValue(this.value);
    },
    show(val) {
      let method = val ? 'addEventListener' : 'removeEventListener';
      document[method]('click', this.hide, false);
    },
  },
  methods: {
    hide(e) {
      if (this.$refs.datepicker && !this.$refs.datepicker.contains(e.target)) {
        this.show = false;
      }
    },
    toggle() {
      this.show = true;
    },
    select (val) {
      this.val = val
      this.$emit('input', val)
    },
    filterValue(value) {
      if (!value) return '';
      let date = new Date(value);
      // verify date is valid
      date = date.valueOf() ? date : new Date();
      let dateString = date.toISOString().replace(/T.+/g, '');
      let timeString = date.toTimeString().replace(/\s.+/, '');
      return `${dateString} ${timeString}`;
    },
  },
  install(Vue) {
    Vue.component(this.name, this);
  },
};
</script>
