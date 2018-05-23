<style lang="scss">
    .one-form{
        .one-block-title{
            width: 150px !important;
        }
    }
</style>

<template>
  <div class="one-form">
      <h3>FORM DEMO</h3>
      <br>
      <hr>
      <br>
      <one-block title="SELECT">
          <one-select :option="option.select" v-model="form.select"></one-select>
      </one-block>
      <one-block title="RADIO">
          <one-radio :option="option.radio" v-model="form.radio"></one-radio>
      </one-block>
      <one-block title="CHECKBOX">
          <one-checkbox :option="option.checkbox" v-model="form.checkbox"></one-checkbox>
      </one-block>
      <one-block title="CHECKBOXES">
          <one-checkboxes :option="option.checkboxes" v-model="form.checkboxes"></one-checkboxes>
      </one-block>
      <one-block title="DATEPICKER">
          <one-date-picker v-model="form.datepicker"></one-date-picker>
      </one-block>
      <one-block title="INPUT">
          <input type="text" v-model="form.input">
          <!-- <one-input></one-input> -->
      </one-block>
      <one-block title="SLIDER">
          <one-slider v-model="form.slider"></one-slider>
      </one-block>
      <one-block title="TAG">
          <one-tag v-model="form.tag"></one-tag>
      </one-block>
      <one-block title="TEXTAREA">
          <one-textarea v-model="form.textarea"></one-textarea>
      </one-block>
      <one-block width="150px">
          <one-btn class="btn-info">SUBMIT</one-btn>
      </one-block>
      <br>
      <br>
      <one-block width="150px">
        <h3>表单数据</h3>
        <p v-for="(value, key) in form">
          {{ key }} : {{ value }}
        </p>
      </one-block>
  </div>
</template>

<script>

const option = {
    select: [
        {label: '选择ONE', value: 1},
        {label: '选择TWO', value: 2},
        {label: '选择THREE', value: 3},
    ],
    radio: [
        {label: '选择ONE', value: 1},
        {label: '选择TWO', value: 2},
        {label: '选择THREE', value: 3},
    ],
    checkbox: {label: '选择ONE', value: true},
    checkboxes: [
        {label: '选择ONE', value: 1, checked: false},
        {label: '选择TWO', value: 2, checked: false},
        {label: '选择THREE', value: 3, checked: false},
        {label: '选择Four', value: 4, checked: false}
    ]
}

export default {
  data () {
    return {
      option,
      filter: {},
      form: {
          select: 2,
          radio: 3,
          checkbox: true,
          checkboxes: [1,3],
          datepicker: '2018-4-1',
          slider: 67,
          tag: ['tagOne', 'tagTwo'],
          textarea: 'this is context',
          input: 'nothing'
      }
    }
  },
  methods: {

  }
}
</script>
