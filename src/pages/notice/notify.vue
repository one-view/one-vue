<template>
  <div class="panel">
     <div class="row com-mg-btm">
        <h1 class="com-mg-btm">示例</h1>
        <div class="com-mg-l com-mg-btm">
            <div class="notify-items">
                <one-btn class="btn btn-info" @click="alert">alert</one-btn>
                <one-btn class="btn btn-info" @click="confirm">confim</one-btn>
                <one-btn class="btn btn-info" @click="tip">tip</one-btn>
                <one-btn class="btn btn-info" @click="toast">toast</one-btn>
            </div>
        </div>
        <br>
        <h1>属性与事件</h1>
        <info-table :head="props.head" :body="props.body"></info-table>
        <br>
        <br>
     </div>
  </div>
</template>

<script>

const props = {
  head: ['参数','说明','类型','默认值'],
  body: [
    ['editable','是否可编辑状态，如果不可编辑则是预览状态','Boolean','true'],
    ['viewholder','预览状态下无数据的展示内容','String','暂无数据！'],
    ['@input','修改内容触发，用于双向绑定','',''],
    ['@change','修改内容触发，注意js修改内容不会触发','',''],
    ['@modify','修改内容触发，只要value改变便会触发（常常用于表单验证）','','']
  ]
}

export default {
  data () {
    return {
      props,
      name: '',
      eventValue: '',
      viewName: '你的名字'
    }
  },
  methods: {
    toast () {
      this.$toast.open({
        text: '阿发阿斯顿发阿斯 阿发阿斯顿发阿斯 <br> asdf',
        callback () {
          // window.alert(1)
        }
      })
    },
    tip () {
      this.$tip.open({
        text: 'asdaf <br> as',
      })
    },
    confirm () {
      this.$confirm.open({
        text: '阿斯顿 ast you there <br> asd',
        callback (flag) {
          // window.alert(flag)
        }
      })
    },
    alert () {
      this.$alert.open({
        text: 'this is a alert <br> asd',
        callback () {
          // window.alert('alert')
        }
      })
    }
  }
}
</script>

<style lang="scss">
    .data-show {
        height: 40px;
        margin-left: 20px;
    }
    .notify-items {
        .btn {
            margin: 0 10px;
        }
    }
</style>
