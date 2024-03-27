const os = require('os') //-built-in module (looking for a built-in module about the os)

// info about current user
const user = os.userInfo() // checking for user information
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

// os specifications
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)