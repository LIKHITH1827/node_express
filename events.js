const eventEmitter=require('events');

//we have 2 methods 1.on 2.emit

const eventobj=new eventEmitter();

 eventobj.on('response',()=>{
 console.log('event practice 1');
 })

 eventobj.on('response',()=>{
  console.log('event practice 2');
  })

 eventobj.emit('response');



 const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer()
// emits request event
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)