const menu = [
  {
    label: '基础',
    name: 'base',
    icon: 'icon-layout',
    children: [
      { label: 'layout', value: '/layout' },
      { label: 'color', value: '/color' },
      { label: 'iconfont', value: '/iconfont' },
      { label: 'btn', value: '/btn' }
    ]
  },
  {
    label: '表单',
    name: 'form',
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
    label: '通知',
    name: 'notice',
    icon: 'icon-message',
    children: [
      { label: 'notify', value: '/notify' }
    ]
  },
  {
    label: '通用',
    name: 'common',
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
    name: 'demo',
    icon: 'icon-experiment',
    children: [
      { label: 'form', value: '/form' },
      { label: 'test', value: '/test' }
    ]
  },
  {
    label: '测试 B',
    name: 'demo4',
    value: '/demo4',
    icon: 'icon-detail'
  }
]

export default menu
