const fs = require('fs')

fs.stat('novoarquivo.txt',  (err, stats) => {
  if (err) {
    return console.log(err);
  }
})