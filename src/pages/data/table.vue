<template>
    <div class="panel">
        <div class="row">
            <div class="com-mg-btm">
                <h1>示例</h1>
            </div>
        </div>
        <div class="row com-mg-btm">
            <one-table :head="head" :data="data" :showCheckbox="true" :showIndex="true"></one-table>
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
                <h1>表头属性</h1>
            </div>
        </div>
        <div class="row com-mg-btm">
            <one-table :head="headPropsHead" :data="headPropsData"></one-table>
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
       index: 1,
       head: [
         {
           width: 100,
           title: '编号',
           key: 'id'
         },
         {
           type: 'img',
           title: '图片',
           width: 40,
           key: 'index'
         },
         {
           title: '名称',
           key: 'name',
           limit: 6
         },
         {
           width: 120,
           title: '日期',
           key: 'date',
           format (val) { return (new Date(val).toLocaleString()).substring(0, 10) }
         },
         {
           type: 'link',
           title: '链接',
           key: 'link'
         },
         {
           title: '操作',
           key: 'title',
           render: (h, params) => {
             return ('')
              //  <one-btn class="btn btn-info btn-tiny" onClick={(event) => this.doAlert(params)}>编辑</one-btn>
           }
         }
       ],
       data: [
         {id: 1111, index: 'http://img4.dwstatic.com/lol/1712/376912957097/1512957927335.jpg', name: '张三', date: 1513433634160, title: '这篇文章的内容特别多，超过了你的想象，它会不会把表格的格式破坏', link: 'https://wwww.hujiang.com'},
         {id: 1110, index: 'http://static.googleadsserving.cn/pagead/imgad?id=CICAgKCrzLmkMRDYBRhaMggSvh_5KYlcZg', name: '欧阳天四', date: 1513433634160, title: '666', link: 'https://fr.hujiang.com'},
         {id: 1120, index: 'https://misg.hujiang.com/file/pic/201712/d0a613a0-8fc2-4a64-97b7-60df8a79e124_m.jpg', name: '王大五', date: 1512433634160, title: '666', link: 'https://en.hujiang.com'},
         {id: 2140, index: 'http://n1image.hjfile.cn/mh/2016/12/15/2b79afa5cbc832733a489c5237a8a54c.jpg', name: '莱昂纳多.迪卡普里奥', date: 1513434634160, title: '666', link: 'https://kr.hujiang.com'},
         {id: 1510, index: '', name: '卓不凡', date: 1553433634160, title: '666', link: 'https://it.hujiang.com'},
         {id: 3710, index: '', name: '李如意', date: 1517433634160, title: '666', link: 'https://es.hujiang.com'},
         {id: 1810, index: 'http://n1image.hjfile.cn/mh/2017/05/22/4dfc0951421b9ac16d835cd038fd8080.jpg', name: '刘珊珊', date: 1510433634160, title: '666', link: 'https://jp.hujiang.com'},
         {id: 1190, index: '', name: '任媛媛', date: 1533433634160, title: '666', link: 'https://kaoyan.hujiang.com'},
         {id: 1210, index: '', name: '程冠希', date: 1413433634160, title: '666', link: 'https://xyz.hujiang.com'}
       ],
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
           props: 'head',
           note: '表格头配置，例如：[\n' +
           '         {\n' +
           '           title: \'参数\',\n' +
           '           key: \'props\'\n' +
           '         },\n' +
           '         {\n' +
           '           title: \'说明\',\n' +
           '           key: \'note\'\n' +
           '         },\n' +
           '       ],',
           type: 'Array',
           default: '[]'
         },
         {
           props: 'data',
           note: '表格数据配置，根据表头的key取值，例如： [\n {\n' +
           '           props: \'data\',\n' +
           '           note: \'\',\n' +
           '           type: \'Array\',\n' +
           '           default: \'[]\'\n' +
           '         },\n' +
           '         {\n' +
           '           props: \'showCheckbox\',\n' +
           '           note: \'\',\n' +
           '           type: \'Array\',\n' +
           '           default: \'false\'\n' +
           '         }\n ]',
           type: 'Array',
           default: '[]'
         },
         {
           props: 'showIndex',
           note: '是否展示表格索引',
           type: 'Boolean',
           default: 'false'
         },
         {
           props: 'showCheckbox',
           note: '是否展示checkbox',
           type: 'Array',
           default: 'false'
         }
       ],
       headPropsHead: [
         {
           title: '列参数',
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
         }
       ],
       headPropsData: [
         {
           props: 'key',
           note: '用于匹配data中要展示的字段，data[headItem.key]',
           type: 'String'
         },
         {
           props: 'title',
           note: '表头中该列的名称',
           type: 'String'
         },
         {
           props: 'width',
           note: '如果设置则该列为固定宽度',
           type: 'Number'
         },
         {
           props: 'limit',
           note: '该列内容的最大长度，超过长度则显示...',
           type: 'Number'
         },
         {
           props: 'format',
           note: '用于格式化内容，常见使用例如修改时间毫秒值为日期,例如 (val) => new Date(val).toLocaleString()',
           type: 'Function'
         },
         {
           props: 'type',
           note: '常用表格内容，目前支持img（渲染为图片二字，hover会展示缩略图，点击可查看大图预览）与link（渲染为超链接）',
           type: 'img或link'
         },
         {
           props: 'render',
           note: '用于渲染其他异形变革内容，例如操作按钮，可渲染vue自定义组件。使用方法同vue的render函数',
           type: 'Function'
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
           props: 'selectAll',
           note: '全选checkbox触发回掉，参数：selection，选中的所有row'
         },
         {
           props: 'selectAllCancel',
           note: '全选checkbox取消触发回掉'
         },
         {
           props: 'selectAllChange',
           note: '全选checkbox操作触发回掉，参数：selection，选中的所有row'
         },
         {
           props: 'selectItem',
           note: '单行checkbox选中触发回掉，参数：selection，选中的所有row、item,当前选中行对象'
         },
         {
           props: 'selectItemCancel',
           note: '单行checkbox取消回掉，参数：selection，选中的所有row、item,当前选中行对象'
         }
       ]
     }
   },
   methods: {
     active (item) {
       this.index = item
     },
     doAlert (id) {
       debugger
       window.alert('jsx render', id)
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
  }
}
</style>
