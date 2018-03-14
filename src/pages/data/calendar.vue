<template lang="html">
  <div class="panel">
    <h1>日历</h1>
    <one-calendar :enable-time="true" :min="min" :max="max" :value="time" @select="select" ui="tiny"></one-calendar>
    <br>
    <one-calendar :enable-time="true" :min="min" :max="max" :value="time" @select="select" ui="normal"></one-calendar>
    <code-snippet :value="html" type="html"></code-snippet>
  </div>
</template>

<script>

const html =
`
  <one-calendar :enable-time="true" :min="min" :max="max" :value="time" @select="select"></one-calendar>
  // data
  {
    time: '',
    min: '2017-12-04',
    max: '2017-12-19'
  }
`

export default {
  data () {
    return {
      html,
      time: '',
      min: '2018-1-4',
      max: ''
    }
  },
  methods: {
    select (time) {
      this.time = time
      console.log(time)
    }
  }
}

</script>

<style lang="scss">

</style>
