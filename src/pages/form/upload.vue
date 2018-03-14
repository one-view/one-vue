<template>
    <div class="panel">
        <div class="row">
            <div class="com-mg-btm">
                <h1>单文件示例</h1>
            </div>
        </div>
        <div class="row com-mg-btm">
            <one-upload v-model="theValue"></one-upload>
        </div>
        <div class="row">
            <div class="com-mg-btm">
                <h1>多文件示例</h1>
            </div>
        </div>
        <div class="row com-mg-btm">
            <one-upload fileType="img" :multiple="true" v-model="theValue"></one-upload>
        </div>
        <div class="row">
            <div class="com-mg-btm">
                <h1>图片预览示例示例</h1>
            </div>
        </div>
        <div class="row com-mg-btm">
            <one-upload fileType="img" :imgView="true" :multiple="true" v-model="theValue"></one-upload>
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
           props: 'multiple',
           note: '是否允许多文件上传',
           type: 'String',
           default: ''
         },
         {
           props: 'imgView',
           note: '是否允许图片预览，仅仅在图片类型下有效',
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
           props: 'upload',
           note: '上传文件回调'
         },
         {
           props: 'remove',
           note: '删除文件回调'
         },
         {
           props: 'change',
           note: '文件内容发生变化触发'
         }
       ]
     }
   },
   mounted () {
   }
}
</script>

<style lang="scss">

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
