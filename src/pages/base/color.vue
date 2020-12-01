<style lang="less" scoped>
.block {
    width: 200px;
    height: 100px;
    margin: 10px;
    line-height: 100px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
}
.split{
  display: block;
  width: 100%;
  margin-bottom: 30px;
}

</style>

<template>
    <div class="panel">
      <one-row>
        <one-col>
          <h1 class="com-mg-btm">常用颜色</h1>
        </one-col>
        <one-col grid="24">
          <template v-for="(item, index) in colors">
            <div class="split" v-if="item === 'split'" :key="index"></div>
            <div class="block" v-else :style="{backgroundColor: item}" :key="index">{{ item }}</div>
          </template>
        </one-col>
      </one-row>
</div>
</template>

<script>

export default {
  data () {
    return {
      colors: [
        '#fa4141', // red
        '#ff602b', // orange
        '#ffb544', // yellow
        '#06C266', // green
        '#258ded', // blue
        '#756aff', // purple
        'split',

        '#ff5722',
        '#ff9800',
        '#ffc107',
        '#ffeb3b',

        '#cddc39',
        '#8bc34a',
        '#4caf50',
        '#009688',

        '#00bcd4',
        '#03a9f4',
        '#2196f3',
        '#3f51b5',

        '#673ab7',
        '#9c27b0',
        '#e91e63',
        '#f44336',

        '#795548',
        '#9e9e9e',
        '#607d8b',
        'split',
        '#eee',
        '#ddd',
        '#ccc',
        '#bbb',
        '#aaa',
        '#999',
        '#888',
        '#777',
        '#666',
        '#555',
        '#444',
        '#333',
        '#222',
        '#111',
        '#000'
      ]
    }
  }
}

</script>
