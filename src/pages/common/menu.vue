<template>
  <div class="page">
    <div class="row">
      <div class="com-mg-btm">
        <h1>示例</h1>
      </div>
    </div>
    <one-menu :data="menuList" ui="dark" :accordion="true"></one-menu>
    <br />
  </div>
</template>

<script>
const events = {
  head: ["名称", "说明"],
  body: [
    [
      "change",
      "分页器变化，改编页码触发，改变每页条数触发，参数：({fromIndex, toIndex, size}),fromIndex为变化前的页码、toIndex当前页码、size当前每页条数",
    ],
  ],
};
export default {
  data() {
    return {
      events,
      menuList: [
        {
          label: "用户",
          children: [
            { label: "角色", value: "/role" },
            { label: "用户", value: "/user" },
            { label: "等级", value: "/level" },
          ],
        },
        {
          label: "功能",
          children: [
            { label: "表格", value: "/table" },
            { label: "图片", value: "/picture" },
            { label: "表单", value: "/form" },
          ],
        },
        {
          label: "功能",
          children: [
            { label: "表格", value: "/table2" },
            { label: "图片", value: "/picture2" },
            { label: "表单", value: "/form2" },
          ],
        },
        {
          label: "功能",
          children: [
            { label: "表格", value: "/table3" },
            { label: "图片", value: "/picture3" },
            { label: "表单", value: "/form3" },
          ],
        },
      ],
    };
  },
  mounted() {},
};
</script>

<style lang="less">
</style>
