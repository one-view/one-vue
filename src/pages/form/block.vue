<template>
    <div class="panel">
        <div class="row com-mg-btm">
            <h1 class="com-mg-btm">示例</h1>
                <div>
                   <one-block title="title">
                      <span>this is a title</span>
                   </one-block>
                    <one-block title="名称">
                      <input type="text">
                    </one-block>
                    <one-block title="自定宽度" width="100px">
                      <input type="text">
                    </one-block>
                </div>
        </div>
        <div class="row com-mg-btm">
            <h1 class="com-mg-btm">代码示例</h1>
            <code-snippet :value="theHtml" type="html"></code-snippet>
        </div>
        <div class="row com-mg-btm">
            <h1 class="com-mg-btm">属性</h1>
            <one-table :head="propsHead" :data="propsData"></one-table>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      theHtml: `
        <one-block title="title">
            <span>欧阳锋</span>
        </one-block>
        <one-block title="名称">
            <one-input/>
        </one-block>
        <one-block title="名称" width="100px">
            <one-input/>
        </one-block>
      `,
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
          props: 'title',
          note: '标题',
          type: 'String',
          default: ''
        },
        {
          props: 'width',
          note: '表头宽度,可以使用百分比和定宽',
          type: 'String',
          default: ''
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
