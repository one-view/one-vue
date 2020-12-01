<template lang="html">
  <div class="panel">
    <h1>日历</h1>
    <one-calendar :enable-time="true" :min="min" :max="max" :value="time" @select="select"></one-calendar>
    <br>
    <code-snippet :value="html" type="html"></code-snippet>
  </div>
</template>

<script>

const html = ``

export default {
  data () {
    return {
      html,
      time: '2017-12-16',
      min: '2017-12-04',
      max: '2017-12-19'
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

<style lang="less">

</style>
