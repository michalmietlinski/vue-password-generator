'use strict'
var md5 = require('js-md5')

function generator (inumbers, variables, captionsallowed, specallowed, numbersallowed, required) {
  let total = 'abcdefghijklmnopqrstuvwxyz'
  let numbers = '123456789'
  let cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let spec = '!@#$^*()-_+?=./:,'
  let t1 = false
  let t2 = false
  let t3 = false
  if (captionsallowed || captionsallowed === undefined) {
    t1 = true
    total = total.concat(cap)
  }
  if (specallowed || specallowed === undefined) {
    t2 = true
    total = total.concat(spec)
  }
  if (numbersallowed || numbersallowed === undefined) {
    t3 = true
    total = total.concat(numbers)
  }
  let specs = function () {
    return [t1, t2, t3]
  }
  if (required && (inumbers < 4)) inumbers = 4
  let maximum = total.length
  let ret = []
  for (var i = 1; i <= variables; i++) {
    let variable = {
      text: '',
      hash: ''
    }
    for (var j = 1; j <= inumbers; j++) {
      variable.text = variable.text + total[Math.floor(Math.random() * maximum)]
    }
    variable.hash = md5(variable.text)
    if (required) {
      let validate = specs()
      for (var h = 0; h < inumbers; h++) {
        if (numbers.indexOf(variable.text[h]) !== -1) validate[2] = false
        if (cap.indexOf(variable.text[h]) !== -1) validate[0] = false
        if (spec.indexOf(variable.text[h]) !== -1) validate[1] = false
      }
      if (!validate[0] && !validate[1] && !validate[2]) {
        ret.push(variable)
      } else {
        i--
      }
    } else {
      ret.push(variable)
    }
  }
  return ret
}
export default generator
