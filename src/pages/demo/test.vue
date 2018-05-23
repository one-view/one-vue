<style lang="scss">
.custom-div{
  padding: 50px 0;
}

.vform{
  padding: 12px;
  border-radius: 3px;
  border: 1px solid #ddd;
  transition: border-color .2s ease;
  // width: 300px;
  &:hover{
    border-color: #4063e0;
  }
}

.one-notification{
  position: fixed;
  right: 20px;
  top:20px;
  .notify{
    border: 1px solid #ddd;
    background-color: #fff;
    border-radius: 5px;
    width: 300px;
    position: relative;
    margin-bottom: 15px;
    .notify-head{
      font-size: 22px;
      padding: 10px 10px 0 10px;
      font-weight: 500;
    }
    .notify-body{
      padding: 0 10px 10px;
    }
    &-danger {
      $c: #fa4141;
      background-color: #feeded;
      border-color: #f9d5d5 - #111;
    }
    &-warning {
      $c: #fffbdf;
      background-color: $c;
    }
    &-info {
      $c: #f2faff;
      background-color: $c;
    }
  }
}
// .list-enter-active, .list-leave-active {
//   transition: all 1s;
// }
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(300px);
}
.list-leave-active,
.list-enter-active {
  position: absolute;
}
.notify{
  // transition: transform 1s;
  transition: all 60s;
}
/**
 * official demo
 * @type {[type]}
 */
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>

<template>

<div class="module module-demo">
  <h1>Demo Playground</h1>
  <br><br>

  <h2># Toast</h2>
  <br>
  <one-btn class="btn btn-large btn-success btn-line" @click="openToast">toggle toast</one-btn>
  <br><br>

  <h2># Notification</h2>
  <br>
  <one-btn class="btn btn-large btn-success" @click="openNotification">toggle notification</one-btn>
  <br><br>

  <h2># Transition Collapse</h2>
  <one-block title="渐变展开">
    <one-btn class="btn btn-info btn-line" @click="toggleShow">toggle show flag</one-btn>
    <transition-collapse>
      <div class="custom-div" v-show="show">
        <p>this is a functional component 1</p>
        <p>this is a functional component 2</p>
        <p>this is a functional component 3</p>
        <p>this is a functional component 4</p>
      </div>
    </transition-collapse>
  </one-block>
  <br><br>

  <div id="list-complete-demo" class="demo">
    <button v-on:click="add">Add</button>
    <button v-on:click="remove">Remove</button>
    <transition-group name="list-complete" tag="p">
      <span
        v-for="item in items"
        v-bind:key="item"
        class="list-complete-item"
      >
        {{ item }}
      </span>
    </transition-group>
  </div>

  <h2># Notification List</h2>
  <one-btn class="btn btn-info" @click="add2">add</one-btn>
  <one-btn class="btn btn-info" @click="remove2">remove</one-btn>
  <div class="one-notification">
    <transition-group name="list">
      <div :class="['notify', `notify-${item.type}`]" v-for="(item, index) in notification" :key="item.id">
        <p class="notify-head">{{ item.title }}</p>
        <p class="notify-body">{{ item.desc }}</p>
      </div>
    </transition-group>
  </div>

  <br>
  <br>
  <h2># Validation Form</h2>
  <div class="one-form">
    <one-form-validator ref="formone" :form="form" :rule="rule">
      <one-block title="测试英文1">
        <input type="text" v-model="form.test1" validname="test1" @blur="validate('test1')">
      </one-block>
      <one-block title="测试邮箱">
        <input type="text" v-model="form.test2" validname="test2" @blur="validate('test2')">
      </one-block>
      <one-block title="测试数据3">
        <input type="text" v-model="form.test3" validname="test3" @blur="validate('test3')">
        <span>* 大于10个字符</span>
      </one-block>
      <one-block title="数字">
        <input type="number" v-model="form.test4" validname="test4">
      </one-block>
      <one-block>
        <one-btn class="btn btn-info" @click="submit">提交</one-btn>
      </one-block>
    </one-form-validator>
  </div>

  <br>
</div>

</template>

<script>
import OneFormValidator from './formvalidator.vue'

const codeSnippet =
    `<code-snippet :value="codeSnippet" type="javascript"></code-snippet>
    value: real code
    type：language type`
// let {addClass} = dom

const rule = {
  test1: ['required', 'validEnStr'],
  test2: ['required', 'validEmail'],
  test3: ['required', {
    name: 'validLength',
    warning: '请输入范围内的字数',
    checker (value) {
      return value.trim().length > 10
    }
  }],
  test4: [
    'validDigit'
  ]
}

export default {
  data () {
    return {
      codeSnippet,
      show: false,
      idx: 0,
      notification: [
        { title: 'label three', desc: 'asdfafasdfasdfd', type: 'danger', id: 1},
        { title: 'label two', desc: 'asdfa as sdaf s dfasdf afasdf sf fsd d f', type: 'warning', id: 2},
        { title: 'label one', desc: 'asdfad sdfa sdf ds fdsfasd f', type: 'info', id: 3},
        { title: '通知', desc: 'asdfad sdfa sdf ds fdsfasd fasdfad sdfa sdf ds fdsfasd fasdfad sdfa sdf ds fdsfasd f', type: '', id: 4}
      ],
      id: 4,
      items: [1,2,3,4,5,6,7,8,9],
      nextNum: 10,
      form: {
        test1: '',
        test2: '',
        test3: '',
        test4: 0,
        test5: false
      },
      rule
    }
  },
  components: {
    OneFormValidator
  },
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    },

    add2 () {
      this.id++
      let item = {
        title: 'label three' + Math.random(),
        desc: 'asdfafasdfasdfd',
        type: 'danger',
        id: this.id
      }

      this.notification.splice(1, 0, item)
      // this.notification.unshift(item)

    },
    remove2 () {
      this.notification.splice(1, 1)
    },
    collapse (idx) {
      console.log(idx)
    },
    toggleShow () {
      this.show = !this.show
    },
    openToast () {
      this.$toast.open({
        text: 'Attention, toast show'
      })
    },
    openNotification () {
      //
    },
    validate (name) {
      this.$refs.formone.validate(name)
    },
    submit () {
      let isValid = this.$refs.formone.isValid
      let result = this.$refs.formone.validator
      if (isValid) {
        this.$toast.open({
          text: 'valid input'
        })
      }
    }
  }
}

</script>
