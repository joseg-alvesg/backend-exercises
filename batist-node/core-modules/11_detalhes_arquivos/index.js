const fs = require('fs')

fs.stat('novoarquivo.txt',  (err, stats) => {
  if (err) {
    return console.log(err);
  }
  console.log(stats.isFile());
  console.log(stats.isDirectory());
  console.log(stats.isSymbolicLink());
  console.log(stats.ctime);
  console.log(stats.size);
})