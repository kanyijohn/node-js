//event loop

console.log ('first task')

// asynchronous event loop method
setTimeout (()=> {
    console.log ('second task')
}, 0)

console.log ('third task')