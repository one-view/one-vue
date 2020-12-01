<template>
    <div class="panel">
        <div class="row com-mg-btm">
            <h1 class="com-mg-btm">示例</h1>
            <one-validator validate="modify" :data="data" :rule="rules">
                <one-block title="标题" width="140px">
                    <one-input v-model="data.title"/>
                    <one-validator-item name="title"></one-validator-item>
                </one-block>
                <one-block title="链接" width="140px">
                    <one-input v-model="data.url"/>
                    <one-validator-item name="url"></one-validator-item>
                </one-block>
                <one-block title="配图" width="140px">
                    <one-uploader v-model="data.image"/>
                    <one-validator-item name="image"></one-validator-item>
                </one-block>
                <one-block title="推广内容" width="140px">
                    <one-select :option="[{label: '🐯', value: '1'}, {label: '🦁', value: '2'}]" v-model="data.contentCategory"/>
                    <one-validator-item name="contentCategory"></one-validator-item>
                </one-block>
                <one-block title="类型" width="140px">
                    <one-select :option="[{label: '🐭', value: '1'}, {label: '🐘', value: '2'}]" v-model="data.adType"/>
                    <one-validator-item name="adType"></one-validator-item>
                </one-block>
                <one-block title="所属分类" width="140px">
                    <one-select :option="[{label: '🐊', value: '1'}, {label: '🐦', value: '2'}]" v-model="data.webTouchCategory"/>
                    <one-validator-item name="webTouchCategory"></one-validator-item>
                </one-block>
                <one-block title="位置序号" width="140px">
                    <one-input v-model="data.positionOrder"/>
                    <one-validator-item name="positionOrder"></one-validator-item>
                </one-block>
                <one-block title="上线时间" width="140px">
                    <one-date-picker v-model="data.startDate"/>
                </one-block>
                <one-block title="下线时间" width="140px">
                    <one-date-picker v-model="data.endDate"/>
                    <one-validator-item name="endDate"></one-validator-item>
                </one-block>
            </one-validator>
        </div>
        <div>
            <h1 class="com-mg-btm">代码</h1>
            <code-snippet :value="html" type="html"></code-snippet>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        html: `
             <one-validator validate="modify" :data="data" :rule="rules">
                <one-block title="标题" width="140px">
                    <one-input v-model="data.title"/>
                    <one-validator-item name="title"></one-validator-item>
                </one-block>
                <one-block title="链接" width="140px">
                    <one-input v-model="data.url"/>
                    <one-validator-item name="url"></one-validator-item>
                </one-block>
                <one-block title="配图" width="140px">
                    <one-uploader v-model="data.image"/>
                    <one-validator-item name="image"></one-validator-item>
                </one-block>
                <one-block title="推广内容" width="140px">
                    <one-select :option="[{label: '🐯', value: '1'}, {label: '🦁', value: '2'}]" v-model="data.contentCategory"/>
                    <one-validator-item name="contentCategory"></one-validator-item>
                </one-block>
                <one-block title="类型" width="140px">
                    <one-select :option="[{label: '🐭', value: '1'}, {label: '🐘', value: '2'}]" v-model="data.adType"/>
                    <one-validator-item name="adType"></one-validator-item>
                </one-block>
                <one-block title="所属分类" width="140px">
                    <one-select :option="[{label: '🐊', value: '1'}, {label: '🐦', value: '2'}]" v-model="data.webTouchCategory"/>
                    <one-validator-item name="webTouchCategory"></one-validator-item>
                </one-block>
                <one-block title="位置序号" width="140px">
                    <one-input v-model="data.positionOrder"/>
                    <one-validator-item name="positionOrder"></one-validator-item>
                </one-block>
                <one-block title="上线时间" width="140px">
                    <one-date-picker v-model="data.startDate"/>
                </one-block>
                <one-block title="下线时间" width="140px">
                    <one-date-picker v-model="data.endDate"/>
                    <one-validator-item name="endDate"></one-validator-item>
                </one-block>
            </one-validator>
        `,
        data: {
          adType: '',
          contentCategory: '',
          image: '',
          positionOrder: '',
          title: '',
          url: '',
          webTouchCategory: '',
          startDate: '',
          endDate: ''
        },
        rules: {
          adType: {required: true, message: '必填项！'},
          contentCategory: {required: true, message: '必填项！'},
          image: {required: true, message: '必填项！'},
          positionOrder: {required: true, message: '必填项！'},
          title: {required: true, message: '必填项！'},
          url: {required: true, message: '必填项！'},
          webTouchCategory: {required: true, message: '必填项！'},
          endDate: {
            validator: (rule, value, callback, source, options) => {
              if (value && source.startDate) {
                const sT = new Date(source.startDate)
                const eT = new Date(value)
                if (sT.getTime() > eT.getTime()) {
                  callback('下线时间早于上线时间！')
                }
                callback()
              }
              callback()
            }
          }
        },
        propsHead: [
          { title: '参数', key: 'props' },
          { width: 600, title: '说明', key: 'note' },
          { title: '类型', key: 'type' },
          { title: '默认值', key: 'default' }
        ],
        propsData: [
          {
            props: 'editable',
            note: '是否可编辑状态，如果不可编辑则是预览状态',
            type: 'Boolean',
            default: 'true'
          },
          {
            props: 'viewholder',
            note: '预览状态下无数据的展示内容',
            type: 'String',
            default: '暂无数据！'
          },
          {
            props: '@input',
            note: '修改内容触发，用于双向绑定',
            type: '',
            default: ''
          },
          {
            props: '@change',
            note: '修改内容触发，注意js修改内容不会触发',
            type: '',
            default: ''
          },
          {
            props: '@modify',
            note: '修改内容触发，只要value改变便会触发（常常用于表单验证）',
            type: '',
            default: ''
          }
        ]
      }
    },
    methods: {
      theChange () {
        console.log('theChange')
      },
      theInput () {
        console.log('theInput')
      },
      theModify () {
        console.log('theModify')
      }
    }
  }
</script>

<style lang="less">
    .data-show {
        height: 40px;
        margin-left: 20px;
    }
</style>
