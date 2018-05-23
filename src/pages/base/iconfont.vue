<template>
  <div class="panel panel-icons">
    <div class="panel-title">
      <h3>Hicon 1.0, from Hujiang UE</h3>
    </div>
    <div class="module module-icons">
      <template v-for="icon in icons">
        <i :class="['icon', 'icon-' + icon]" :title="icon"></i>
      </template>
    </div>
  </div>
</template>

<script>
const icons = [
  'account',
  'add-circle',
  'add',
  'animal',
  'app',
  'add-note',
  'back',
  'batch-add',
  'batch-download',
  'book',
  'bulb',
  'briefcase',
  'calendar',
  'vocabularybook',
  'coin',
  'favorite',
  'memorycard',
  'refresh animate-spin',
  'volume',
  'warning-circle',
  'right-circle',
  'menu',
  'filter',
  'comment-circle',
  'comment',
  'flower',
  'microphone',
  'rmb',
  'safealert',
  'mobilephone',
  'forward',
  'consult',
  'curriculum',
  'hand',
  'music',
  'scancode',
  'delete',
  'history',
  'night',
  'schedule',
  'schoolbag',
  'note',
  'home',
  'detail',
  'dictionary',
  'hujiang',
  'notice',
  'search',
  'send',
  'option',
  'hujiangcc',
  'document',
  'down',
  'hujiangclass',
  'order',
  'share',
  'shop',
  'video',
  'up',
  'unlock',
  'trophy',
  'success',
  'sort',
  'smile',
  'shoppingcart',
  'pc',
  'pause-circle',
  'people',
  'person',
  'phone',
  'play-circle',
  'praise',
  'present',
  'rank',
  'record',
  'map',
  'mail',
  'love',
  'lock',
  'left-circle',
  'info-circle',
  'image',
  'image-circle',
  'hujiangst',
  'hujiangcoin',
  'download-circle',
  'download',
  'earphone',
  'edit',
  'camera',
  'card',
  'education',
  'enter',
  'category',
  'chat',
  'error',
  'exit-circle',
  'class',
  'clock',
  'exit',
  'explore',
  'close'
]
export default {
  data () {
    return {
      icons
    }
  }
}
</script>

<style lang="scss">
.module-icons {
  font-size: 20px;
  i{
    display: inline-block;
    padding: 20px;
    margin: 10px;
    &:hover{
      background-color: #eee;
    }
  }
}
</style>
