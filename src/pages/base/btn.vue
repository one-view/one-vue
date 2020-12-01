<template>
    <div class="panel">
        <h1>按钮</h1>
        <br>
        <div class="row com-mg-btm">
            <h1>尺寸</h1>
        </div>
        <div class="row com-mg-btm com-mg-l">
            <h2 class="com-mg-btm">示例</h2>
                <div>
                    <one-btn class="btn btn-info btn-tiny">tiny</one-btn>
                    <one-btn class="btn btn-info">normal</one-btn>
                    <one-btn class="btn btn-info btn-big">big</one-btn>
                    <one-btn class="btn btn-info btn-large">large</one-btn>
                </div>
        </div>
        <div class="row com-mg-btm com-mg-l">
            <h2 class="com-mg-btm">代码</h2>
            <code-snippet :value="sizeHtml" type="html"></code-snippet>
        </div>
        <div class="row com-mg-btm">
            <h1>类型</h1>
        </div>
        <div class="row com-mg-btm com-mg-l">
            <h2 class="com-mg-btm">示例</h2>
            <div>
                <one-btn class="btn btn-info">normal</one-btn>
                <one-btn class="btn btn-info btn-line">line</one-btn>
                <one-btn class="btn btn-success btn-line">line</one-btn>
                <one-btn class="btn btn-warn btn-line">line</one-btn>
                <one-btn class="btn btn-danger btn-line">line</one-btn>
            </div>
        </div>
        <div class="row com-mg-btm com-mg-l">
            <h2 class="com-mg-btm">代码</h2>
            <code-snippet :value="typeHtml" type="html"></code-snippet>
        </div>
        <div class="row com-mg-btm">
            <h1>样式</h1>
        </div>
        <div class="row com-mg-btm com-mg-l">
            <h2 class="com-mg-btm">示例</h2>
            <div>
                <one-btn class="btn">default</one-btn>
                <one-btn class="btn btn-info">info</one-btn>
                <one-btn class="btn btn-success">success</one-btn>
                <one-btn class="btn btn-warn">warn</one-btn>
                <one-btn class="btn btn-danger">danger</one-btn>
            </div>
        </div>
        <div class="row com-mg-btm com-mg-l">
            <h2 class="com-mg-btm">代码</h2>
            <code-snippet :value="styleHtml" type="html"></code-snippet>
        </div>
        <div class="row com-mg-btm">
            <h1>disable</h1>
        </div>
        <div class="row com-mg-btm com-mg-l">
            <h2 class="com-mg-btm">示例</h2>
            <div>
                <one-btn class="btn btn-info" :disable="true">info</one-btn>
                <one-btn class="btn btn-info btn-line" :disable="true">info</one-btn>
                <one-btn class="btn btn-success btn-large" :disable="true">info</one-btn>
            </div>
        </div>
        <div class="row com-mg-btm com-mg-l">
            <h2 class="com-mg-btm">代码</h2>
            <code-snippet :value="disableHtml" type="html"></code-snippet>
        </div>
        <div class="row com-mg-btm">
            <h1>loading</h1>
        </div>
        <div class="row com-mg-btm com-mg-l">
            <h2 class="com-mg-btm">示例</h2>
            <div>
                <one-btn class="btn btn-warn" :loading="true">info</one-btn>
                <one-btn class="btn btn-info btn-line" :loading="true">info</one-btn>
                <one-btn class="btn btn-info btn-large" :loading="true">info</one-btn>
            </div>
        </div>
        <div class="row com-mg-btm com-mg-l">
            <h2 class="com-mg-btm">代码</h2>
            <code-snippet :value="loadingHtml" type="html"></code-snippet>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      sizeHtml: 
    `<one-btn class="btn btn-info btn-tiny">tiny</one-btn>
    <one-btn class="btn btn-info btn-small">small</one-btn>
    <one-btn class="btn btn-info">common</one-btn>
    <one-btn class="btn btn-info btn-large">large</one-btn>`,
      typeHtml: 
    `<one-btn class="btn btn-info">common</one-btn>
    <one-btn class="btn btn-info btn-line">line</one-btn>`,
      styleHtml: 
    `<one-btn class="btn">default</one-btn>
    <one-btn class="btn btn-info">info</one-btn>
    <one-btn class="btn btn-success">success</one-btn>
    <one-btn class="btn btn-warn">warn</one-btn>
    <one-btn class="btn btn-danger">danger</one-btn>`,
      disableHtml: 
    `<one-btn class="btn btn-info" :disable="true">info</one-btn>
    <one-btn class="btn btn-info btn-line" :disable="true">info</one-btn>
    <one-btn class="btn btn-success btn-large" :disable="true">info</one-btn>`,
      loadingHtml: 
    `<one-btn class="btn btn-warn" :loading="true">info</one-btn>
    <one-btn class="btn btn-info btn-line" :loading="true">info</one-btn>
    <one-btn class="btn btn-info btn-large" :loading="true">info</one-btn>`
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
