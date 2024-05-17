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