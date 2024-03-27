//fs modules
//reading a file- readFileSync
//creating a new file- writeFileSync


const { readFileSync, writeFileSync } = require('fs')
console.log('start')

//reading a file
const first = readFileSync('./content/first.txt', 'utf8') // pathlocation and the encoding 
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first, second)

//creating a new file and adding contents
writeFileSync(
  './content/result-sync.txt', //path location, name of file (result-sync.txt)
  `Here is the result : ${first}, ${second}`, //adding content to the file
  { flag: 'a' } // options object- overwritres and adds new content
)
console.log('done with this task')
console.log('starting the next one')