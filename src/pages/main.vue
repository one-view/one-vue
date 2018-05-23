<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home{
  position: fixed;
  left: 160px;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .content{
    text-align: center;
  }
}
</style>

<template>
  <div class="home">
    <div class="content">
      <img src="../assets/coollogo.png">
    </div>
    <one-footer></one-footer>
  </div>
</template>

<script>
import oneFooter from '../pages/footer'
import {Validator, FormValidator} from '../utility/validator.js'

let a = new FormValidator({
  'title': [
    'required',
    'validEnStr',
    {
      name: 'validTitleLength',
      warning: '限制长度',
      checker (value) {
        return value.length > 20
      }
    }
  ],
  'desc': [{
    name: 'required',
  }],
  'name': ['required']
})
console.log(a.isValid({
  title: 'abcdeabcdeabcdeabcdeabcde',
}), a.status)
// const validatorRules = {
//   title: [
//     'required',
//     {
//       name: 'validTitleLength',
//       info: '限制长度',
//       checker (value) {
//         // console.log(value)
//         // return Boolean
//       }
//     }
//   ],
//   author: ['required', 'limitedLength(0-20)', 'email'],
//   title: ['required', {
//     name: 'customA',
//     info: '',
//     checker (val) {
//       // return Boolean
//     }
//   }]
// }
//
// new FormValidator(validatorRules)

export default {
  data () {
    return {
      logo: 'one-vue',
    }
  },
  components: {
    oneFooter
  }
}
</script>
