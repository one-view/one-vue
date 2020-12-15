const menu = [
  {
    label: '基础',
    value: '/base',
    icon: 'icon-layout',
    children: [
      { label: 'layout', value: '/layout' },
      { label: 'color', value: '/color' },
      { label: 'iconfont', value: '/iconfont' },
      { label: 'btn', value: '/btn' }
    ]
  },
  {
    label: '测试 A',
    value: '/demo3',
    icon: 'icon-detail'
  },
  {
    label: '表单',
    value: '/form',
    icon: 'icon-detail',
    children: [
      { label: 'block', value: '/block' },
      { label: 'radio', value: '/radio' },
      { label: 'checkbox', value: '/checkbox' },
      { label: 'textarea', value: '/textarea' },
      { label: 'select', value: '/select' },
      { label: 'cascader', value: '/cascader' },
      { label: 'datepicker', value: '/datepicker' },
      { label: 'slider', value: '/slider' },
      { label: 'tag', value: '/tag' }
    ]
  },
  {
    label: '测试 B',
    value: '/demo4',
    icon: 'icon-detail'
  },
  {
    label: '通知',
    value: '/notice',
    icon: 'icon-message',
    children: [
      { label: 'notify', value: '/notify' }
    ]
  },
  {
    label: '通用',
    value: '/common',
    icon: 'icon-wrench',
    children: [
      { label: 'modal', value: '/modal' },
      { label: 'collapse', value: '/collapse' },
      { label: 'menu', value: '/menu' },
      { label: 'pagination', value: '/pagination' },
      { label: 'calendar', value: '/calendar' }
    ]
  },
  {
    label: '示例',
    value: '/demo',
    icon: 'icon-experiment',
    children: [
      { label: 'form', value: '/form' },
      { label: 'test', value: '/test' }
    ]
  }
]

export default menu
