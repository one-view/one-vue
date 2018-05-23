<style lang="scss" scoped>
.block {
    float: left;
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
  float:left;
  margin-bottom: 30px;
}

</style>

<template>
    <div class="panel">
    <div class="row com-mg-btm">
        <h1 class="com-mg-btm">常用颜色</h1>
        <div>
            <div class="module cf">
              <template v-for="item in colors">
                <div class="split" v-if="item === 'split'"></div>
                <div class="block" v-else :style="{backgroundColor: item}">{{ item }}</div>
              </template>
            </div>
        </div>
    </div>
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
