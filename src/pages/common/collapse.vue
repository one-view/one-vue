<style lang="less" scoped>
.block {
  padding: 10px;
}
</style>

<template>
  <div class="pane">
    <br />
    <h2>Dark</h2>
    <br />
    <one-collapse name="展开" @collapse="collapse" ui="dark">
      <template v-slot:body>
        <div class="block">
          <div>collapse content</div>
          <div>collapse first line</div>
        </div>
      </template>
    </one-collapse>
    <br />
    <h2>Light</h2>
    <br />
    <one-collapse name="阿里" @collapse="collapse" ui="light">
      <template v-slot:body>
        <div class="block">
          <div>collapse content</div>
          <div>collapse second line</div>
        </div>
      </template>
    </one-collapse>
    <br />
    <h2>Default</h2>
    <br />
    <one-collapse name="阿斯顿" @collapse="collapse">
      <template v-slot:body>
        <div class="block">
          <div>collapse content</div>
          <div>collapse third line</div>
        </div>
      </template>
    </one-collapse>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    collapse(idx) {
      console.log(idx);
    },
  },
};
</script>
