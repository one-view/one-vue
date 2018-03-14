'use strict'

class Validator {
  /**
   * Validator
   * @param  {[type]} name  [description]
   * @param  {[type]} rules [description]
   * @return {[type]}       [description]
   */
  constructor (name, rules) {
    this.name = name
    this.rules = rules
    this.status = {}
  }
  /**
   * 验证输入值
   * @param  {[type]} value [description]
   * @return {[type]}       [description]
   */
  validate (value) {
    let rules = this.rules
    for (let i = 0; i < rules.length; i++) {
      let rule = rules[i]
      let isDefaultRule = typeof (rule) === 'string'
      let rulename = isDefaultRule ? rule : rule.name
      let defaultChecker = Validator.checkers[rulename]
      let defaultWarning = Validator.warnings[rulename]
      let checker = isDefaultRule ? defaultChecker : rule.checker || defaultChecker
      let warning = isDefaultRule ? defaultWarning : rule.warning || defaultWarning
      if (!checker) {
        console.warn('WARN: Unknown Rule Checker. Please check your configuration')
      }
      let isValid = !!checker && checker(value)
      warning = isValid ? '' : warning || 'invalid'
      this.status = {
        isValid,
        value,
        warning,
        rule: isValid && rules.length - 1 === i ? '' : rulename
      }
      if (!isValid) break
    }
    return this.status
  }

  isValid (value) {
    this.validate(value)
    return this.status.isValid
  }

  reset () {
    this.status = {}
  }
}
// 默认检测规则和警示标语
Object.assign(Validator, {
  checkers: {
    required (value) {
      return value !== '' && value !== undefined && value !== null
    },
    validname (value) {
      return /^[a-zA-Z\u4E00-\uFA29]+$/.test(value) && value.length > 2
    },
    validphone (value) {
      return /^1[34578]\d{9}$/.test(value)
    },
    validEnStr (value) {
      return /^[a-zA-Z_]*$/.test(value)
    },
    validLength (value, min, max) {
      return value.length > min && value.length < max
    },
    validDigit (value) {
      return /^\d+$/.test(value)
    },
    validEmail (value) {
      return /^\w+@\w+\.com$/.test(value)
    }
  },
  warnings: {
    required: '不能为空',
    validname: '请输入合法有效的名字',
    validphone: '请输入合法有效的手机号',
    validEnStr: '请输入纯英文字母组合',
    validDigit: '请输入纯数字集合',
    validEmail: '请输入合法的邮箱地址'
  }
})

class FormValidator {
  /**
   * 表单验证
   * @param  {[type]} rules [description]
   * @return {[type]}       [description]
   * rules {
   *  dataNameA: ['required']
   *  dataNameB: ['String', {Object}]
   * }
   */
  constructor (rules) {
    this.rules = rules
    this.validators = {}
    this.status = {}
    this.initialize()
  }

  initialize () {
    for (let name in this.rules) {
      let rule = this.rules[name]
      this.validators[name] = new Validator(name, rule)
      this.status[name] = {}
    }
  }

  validate (name, value) {
    let validator = this.validators[name]
    this.status[name] = validator && validator.validate(value)
    return this.status
  }
  /**
   * 验证定义在Rule中的数据是否合法
   * @param  {[type]}  data [description]
   * @return {Boolean}      [description]
   */
  isValid (data) {
    if (!data) return false
    let flags = []
    for (let name in this.rules) {
      let res = this.validate(name, data[name])
      flags.push(res[name].isValid)
    }
    return flags.indexOf(false) < 0
  }

  reset () {
    for (let name in this.rules) {
      this.status[name] = {}
    }
  }
}

export {Validator, FormValidator}
