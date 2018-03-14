<style scoped>
    @import '../../style/common/font.scss';
    .block {
        float: left;
        width: 200px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        background: #f7f7f7;
        color: #888;
    }
</style>

<template>
    <div class="panel">
        <div class="row com-mg-btm">
            <h1 class="com-mg-btm">Size</h1>
            <div>
                <div class="block" style="font-size: 20px">特大号：20px</div>
                <div class="block" style="font-size: 18px">大号：18px</div>
                <div class="block" style="font-size: 14px">正常号：14px</div>
                <div class="block" style="font-size: 12px">小号：12px</div>
            </div>
        </div>
        <div class="row com-mg-btm">
            <h1 class="com-mg-btm">Color</h1>
            <div>
                <div class="block" style="font-size: 14px">正常色：#2c3e50</div>
                <div class="block" style="font-size: 14px">错误色：#FF1712</div>
                <div class="block" style="font-size: 14px">链接色：#0d6bd9</div>
            </div>
        </div>
        <div class="row com-mg-btm">
            <h1 class="com-mg-btm">Weight</h1>
            <div>
                <div class="block" style="font-weight: 600">着重：600</div>
                <div class="block" style="font-size: 14px">正常</div>
                <div class="block" style="font-weight: 300">辅助：300</div>
            </div>
        </div>
        <div class="row com-mg-btm">
            <h1 class="com-mg-btm">常用字形</h1>
            <div>
                <div class="block com-lt-font">特大标题文字</div>
                <div class="block com-bt-font">大标题文字</div>
                <div class="block com-t-font">标题文字</div>
                <div class="block com-font">常规文字</div>
                <div class="block com-sp-font">辅助文字</div>
                <div class="block com-err-font">警告文字</div>
                <div class="block com-link-font">链接文字</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

}

</script>
