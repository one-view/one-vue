<template>
  <div class="panel">
    <h1>示例</h1>
    <one-form>
      <one-block title="输入项" width="100px">
        <one-tag v-model="form.tags" @modify="change"></one-tag>
      </one-block>
      <one-block width="100px">
        {{ form.tags }}
      </one-block>
    </one-form>

    <br>

    <info-table :head="props.head" :body="props.body"></info-table>

  </div>
</template>

<script>

const props = {
  head: ['参数', '说明', '类型', '默认值'],
  body: [
    ['value','标签','Array','[]'],
    ['modify','回调','Function','null'],
  ]
}

export default {
  data () {
    return {
      props,
      form: {
          tags: ['demo', 'demo2', 'demo3', 'demo4', 'de o', 'apple']
      }
    }
  },
  methods: {
      change (tags) {
          console.log(tags)
      }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>

</style>
