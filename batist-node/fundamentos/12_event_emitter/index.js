const EventEmittter = require('events')
const eventEmitter = new EventEmittter()

eventEmitter.on('start', () => {
  console.log('Durante');
})

console.log('Antes');

eventEmitter.emit('start')

console.log('Depois');