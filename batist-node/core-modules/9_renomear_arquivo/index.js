const fs = require('fs')

fs.rename('arquivo.txt', 'novoarquivo.tx', function(err) {
  if(err) {
    console.log(err);
  }
})