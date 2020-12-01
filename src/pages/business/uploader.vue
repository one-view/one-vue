<template>
    <div class="panel">
        <div class="row">
            <div class="com-mg-btm">
                <h1>示例</h1>
            </div>
        </div>
        <div class="row com-mg-btm">
            <one-uploader fileType="img" v-model="theValue"></one-uploader>
        </div>
        <div class="row com-mg-btm">
            theValue: {{theValue}}
        </div>
        <div class="row">
            <div class="com-mg-btm">
                <h1>属性</h1>
            </div>
        </div>
        <div class="row com-mg-btm">
            <one-table :head="propsHead" :data="propsData"></one-table>
        </div>
        <div class="row">
            <div class="com-mg-btm">
                <h1>方法回调</h1>
            </div>
        </div>
        <div class="row com-mg-btm">
            <one-table :head="callBackHead" :data="callBackData"></one-table>
        </div>
    </div>
</template>

<script>
 export default {
   data () {
     return {
       theValue: '初始默认文件.png',
       propsHead: [
         {
           title: '参数',
           key: 'props'
         },
         {
           width: 600,
           title: '说明',
           key: 'note'
         },
         {
           title: '类型',
           key: 'type'
         },
         {
           title: '默认值',
           key: 'default'
         }
       ],
       propsData: [
         {
           props: 'maxSize',
           note: '文件大小限制，单位kb',
           type: 'Number',
           default: '2048'
         },
         {
           props: 'fileType',
           note: '文件类型，可选值：img',
           type: 'String',
           default: ''
         },
         {
           props: 'value',
           note: '用于支持v-model',
           type: 'String',
           default: ''
         }
       ],
       callBackHead: [
         {
           title: '名称',
           key: 'props'
         },
         {
           title: '说明',
           key: 'note'
         }
       ],
       callBackData: [
         {
           props: 'change',
           note: '上传文件内容发生变化触发'
         },
         {
           props: 'input',
           note: '用于支持v-model'
         }
       ]
     }
   },
   mounted () {
   }
}
</script>

<style lang="less">

.menu {
  position: relative;
  &:hover {
    .list {
      max-height: 500px;
      transition: max-height 0.3s ease-in;
    }
  }
  .list {
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    max-height: 0;
    transition: max-height 0.3s ease-out;
    overflow: hidden;

    li{
      padding: 10px 30px;
      background: #d5d5d5;
      &:hover{
        background: #ddd;
      }
    }
    // transform: scaleY(0);
    // transition: transform 0.3s ease-out;
  }
}
</style>
