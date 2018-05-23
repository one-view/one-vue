<style lang="scss">
  .one-calendar{
    $c: #3c61bf;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 15px;
    border: 1px solid #eee;
    padding: 10px;
    width: 320px;
    line-height: 1;
    border-radius: 3px;
    box-sizing: border-box;
    background-color: #fff;
    z-index: 2;
    box-shadow: 0 1px 10px rgba(20,20,20,.1);
    *{
      box-sizing: border-box;
    }
    .one-month{
      background-color: $c;
      text-align: center;
      margin: -10px -10px 10px;
      padding: 10px;
      color: #fff;
      border-radius: 3px 3px 0 0;
      .one-current{
        line-height: 36px;
      }
    }
    .one-weekdays{
      .one-day{
        line-height: 36px;
      }
    }
    .one-control{
      position: relative;
      display: inline-block;
      width: 36px;
      height: 36px;
      text-indent: -999em;
      border-radius:3px;
      cursor: pointer;
      &:hover{
        background-color: $c - #111;
      }
      &:after{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-left: 1px solid #fff;
        border-top: 1px solid #fff;
        left: 10px;
        top: 12px;
      }
    }
    .one-prev{
      float: left;
      &:after{
        left: 14px;
        transform: rotate(-45deg);
      }
    }
    .one-next{
      float: right;
      &:after{
        transform: rotate(135deg);
      }
    }

    .one-day{
      display: inline-block;
      width: 1/7 * 100 + %;
      height: 36px;
      text-align: center;
      cursor: pointer;
      span{
        display: block;
        margin: 0 auto;
        width: 34px;
        height: 34px;
        line-height: 34px;
        border-radius: 18px;
        border: 1px solid transparent;
      }
    }
    .one-day-prev,
    .one-day-next{
      color: #ccc;
    }
    .one-day-today{
      // background-color: $c;
      span{
        border-color: $c;
      }
    }
    .one-day-selected{
      $color: #ff5b28;
      span{
        background-color: $color;
        border-color: $color;
        color: #fff;
      }
      &.one-day-disabled{
        span{
          background-color: $color + #333;
          border-color: $color + #333;
        }
      }
    }
    .one-day-disabled{
      color: #aaa;
      cursor: default;
    }
    .one-day-range {
      background-color: #e9eef6;
      color: #3a6099;
    }
    .one-time{
      margin-top: 10px;
      border-top: 1px solid #eee;
      padding-top: 10px;
      text-align: center;
      input{
        width: 40%;
        text-align: center;
        line-height: 30px;
        border-radius: 2px;
        border: 1px solid #ddd;
        padding: 0;
        font-size: 14px;
        outline: none;
        transition: border .2s ease;
        &:focus{
          border-color: $c;
        }
      }
      input[type=number]::-webkit-inner-spin-button,
      input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      span{
        width: 5%;
      }
    }
  }
  .one-calendar.tiny {
    font-size: 13px;
    width: 240px;
    .one-month{
      padding: 2px;
    }
    .one-day{
      $r: 30px;
      height: $r;
      span{
        width: $r;
        height: $r;
        line-height: $r;
      }
    }
    .one-time{
      input {
        font-size: 13px; 
        line-height: 24px;
      }
    }
  }
</style>

<template>
  <div class="one-calendar" :class="[ui]">
    <div class="one-month cf">
      <a class="one-control one-prev" @click="changeMonth(-1)">prev</a>
      <span class="one-current">
        <span>{{ year }}</span>
        <span class="one-cur-month">{{ monthText }}</span>
      </span>
      <a class="one-control one-next" @click="changeMonth(1)">next</a>
    </div>
    <div class="one-weekdays">
      <span v-for="item in weekdays" class="one-day">
        {{ item }}
      </span>
    </div>
    <div class="one-days">
      <div v-for="item in days" @mousedown="select(item)" class="one-day"
        :class="{'one-day-prev': item.offset < 0,
           'one-day-next': item.offset > 0,
           'one-day-today': item.isToday,
           'one-day-selected': item.isSelected,
           'one-day-disabled': item.isMin || item.isMax,
           'one-day-range': item.isInRange
         }">
        <span>{{ item.date }}</span>
      </div>
    </div>
    <div class="one-time" v-if="enableTime">
      <input type="number" name="hour" min="0" step="1" max="24" @change="changeHour" v-model="hour">
      <span>:</span>
      <input type="number" name="minute" min="0" step="5" max="60" @change="changeMinute" v-model="minute">
    </div>
  </div>
</template>

<script>

  let options = {
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  }

  export default {
    name: 'one-calendar',
    data () {
      return {
        weekdays: options.weekdays,
        year: 0,
        month: 0,
        hour: 0,
        miniute: 0,
        val: this.value
      }
    },
    props: {
      ui: {
        type: String,
        default: 'normal' // normal | tiny
      },
      enableTime: {
        type: Boolean,
        default: false
      },
      start: {
        type: String,
        default: ''
      },
      value: {
        type: [Number, String, Date],
        default: ''
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
      }
    },
    watch: {
      value (newValue) {
        this.val = newValue
      }
    },
    computed: {
      monthText () {
        return options.months[this.month]
      },
      now () {
        return this.start ? new Date(this.start) : new Date()
      },
      selectedDate () {
        let date = this.val ? new Date(this.val) : this.now
        let select = {
          year: date.getFullYear(),
          month: date.getMonth(),
          date: date.getDate()
        }
        this.hour = date.getHours()
        this.minute = date.getMinutes()
        return select
      },
      days () {
        return this.setDays(this.year, this.month)
      }
    },

    methods: {
      changeHour () {
        if (this.hour > 23 || this.hour < 0) {
          this.hour = 0
        }
        this.emitTime()
      },

      changeMinute () {
        if (this.minute > 59 || this.minute < 0) {
          this.minute = 0
        }
        this.emitTime()
      },
      emitTime () {
        this.val = `${this.selectedDate.year}-${this.formatTime(this.selectedDate.month + 1)}-${this.formatTime(this.selectedDate.date)} ${this.formatTime(this.hour)}:${this.formatTime(this.minute)}:00`
        this.$emit('select', this.val)
        this.$emit('input', this.val)
      },

      formatTime (number) {
        return `0${number}`.slice(-2)
      },

      getToday () {
        let now = this.now

        return {
          year: now.getFullYear(),
          month: now.getMonth(),
          date: now.getDate()
        }
      },

      getDateString (time) {
        return new Date(time).toISOString().replace(/T.+/, '')
      },

      /**
       * calculate days
       */
      setDays (year, month) {
        let startDay = new Date(year, month, 1).getDay()
        let daysLength = this.getMonthDays(year, month)
        let days = []
        let total = 7 * 6
        let prevMonthYear = this.getMonthYear(year, month, -1)
        let nextMonthYear = this.getMonthYear(year, month, 1)

        let today = this.getToday()
        let selectedDate = this.selectedDate
        let minDate, maxDate

        if (this.min) {
          minDate = new Date(this.getDateString(this.min))
        }
        if (this.max) {
          maxDate = new Date(this.getDateString(this.max))
        }

        let preMonthDays = this.getMonthDays(prevMonthYear.year, prevMonthYear.month)

        // add prev month days
        for (let i = 0; i < startDay; i++) {
          let date = preMonthDays - (startDay - 1) + i
          days.push({
            year: prevMonthYear.year,
            month: prevMonthYear.month,
            date: date,
            offset: -1
          })
        }
        // add current month days
        for (let j = 0; j < daysLength; j++) {
          days.push({
            year: year,
            month: month,
            date: j + 1,
            offset: 0
          })
        }
        // add next month days
        if (startDay + daysLength < total) {
          for (let k = 0; k < total - startDay - daysLength; k++) {
            days.push({
              year: nextMonthYear.year,
              month: nextMonthYear.month,
              date: k + 1,
              offset: 1
            })
          }
        }
        let selected = this.getNewDate(selectedDate)
        // 过滤每天的属性: 是否为今天，是否被选中，是否小于最小可选时间等
        days.forEach((item, index) => {
          // set flag for today
          let isToday = this.isEqual(item, today)
          let date = this.getNewDate(item)
          item.isToday = isToday
          // set flag for selected
          if (selectedDate) {
            let flagIsSelected = this.isEqual(item, selectedDate)
            item.isSelected = flagIsSelected
          }
          // set flag for lower than min date
          if (this.min) {
            let isLower = date < minDate
            item.isMin = isLower
            this.range && (item.isInRange = date <= selected  && date >= minDate)
          }
          // set flag for greater than max date
          if (this.max) {
            let isGreater = date > maxDate
            item.isMax = isGreater
            // console.log(date, maxDate, date <= maxDate)
            this.range && (item.isInRange = date >= selected  && date <= maxDate)
          }

        })

        return days
      },

      isEqual (a, b) {
        return a.year === b.year && a.month === b.month && a.date === b.date
      },

      getNewDate (item) {
        return new Date(`${item.year}-${item.month + 1}-${item.date}`)
      },

      getMonthYear (year, month, offset) {
        month += offset
        if (month < 0 || month > 11) {
          year += month % 11
          month = (month + 12) % 12
        }
        return {
          year: year,
          month: month
        }
      },

      getMonthDays (year, month) {
        return new Date(year, month + 1, 0).getDate()
      },

      select (date) {
        if (date.isMin || date.isMax) {
          return
        }
        if (date.offset !== 0) {
          this.changeMonth(date.offset)
        }

        this.val = `${date.year}-${this.formatTime(date.month + 1)}-${this.formatTime(date.date)} ${this.formatTime(this.hour)}:${this.formatTime(this.minute)}:00`

        this.$emit('input', this.val)
        this.$emit('select', this.val)
        this.$emit('modify', this.val)
      },

      changeMonth (offset) {
        let curMonthYear = this.getMonthYear(this.year, this.month, offset)
        this.year = curMonthYear.year
        this.month = curMonthYear.month
      }
    },
    mounted () {
      this.year = this.now.getFullYear()
      this.month = this.now.getMonth()
      this.val = this.value
    },
    install (Vue) {
      Vue.component(this.name, this)
    }
  }
</script>
