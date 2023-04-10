const { log } = require('console');
const fs = require('fs')

console.log(('inicio'));

fs.writeFileSync('test.txt', 'oi')

log('fim')