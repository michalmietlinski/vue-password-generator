'use strict'
var md5 = require('js-md5')

function generator (inumbers, variables, captionsallowed, specallowed, numbersallowed) {
  let total = 'abcdefghijklmnopqrstuvwxyz'
  let numbers = '123456789'
  let cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let spec = '!@#$^*()-_+?=./:,'

  if (captionsallowed || captionsallowed === undefined) total = total.concat(cap)
  if (specallowed || specallowed === undefined) total = total.concat(spec)
  if (numbersallowed || numbersallowed === undefined) total = total.concat(numbers)

  let maximum = total.length
  let ret = []
  for (var i = 1; i <= variables; i++) {
    let variable = {
      text: '',
      hash: ''
    }
    for (var j = 1; j <= inumbers; j++) {
      variable.text=variable.text+total[Math.floor(Math.random() * maximum)]
    }
    variable.hash = md5(variable.text)
    ret.push(variable)
  }
  return ret
}
export default generator

