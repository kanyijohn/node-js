//CommonJS, every file is a module (by default)
//Modules- Encaspulated code (only share minimum)
//require - importing a file code

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
console.log (data)
require('./7-mind-grenade.js')
require ('./1-intro.js')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)