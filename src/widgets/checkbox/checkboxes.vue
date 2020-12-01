<style src="./style.less" lang="less" scoped></style>

<template>
<div class="one-checkbox" :class="[{'one-checkbox-disable': disable}, 'one-checkbox-type-' + type]">
    <ul class="cf">
        <li v-for="(item, $index) in selectValue" :key="$index" @click="check(item)" :class="{'on': item.checked}">
            <i aria-hidden="true"></i>
            <span>{{ item.label }}</span>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'one-checkboxes',
  data () {
    return {
      val: this.value
    }
  },
  computed: {
    checkedItems () {
      return this.option.filter(option => {
        return option.checked === true
      }).map(item => {
        return item.value
      })
    },
    selectValue () {
      this.option.forEach((elem, index) => {
        // 重置表单时，勾选状态先置为false
        elem.checked = this.val.indexOf(elem.value) > -1
      })
      return this.option
    }
  },
  watch: {
    value (newValue) {
      this.val = newValue
    }
  },
  props: {
    option: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    },
    disable: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    check (item) {
      if (this.disable) return
      item.checked = !item.checked
      this.$emit('input', this.checkedItems)
      this.$emit('select', this.checkedItems)
    }
  }
}
</script>