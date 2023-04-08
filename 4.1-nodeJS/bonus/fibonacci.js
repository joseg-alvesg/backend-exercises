const readline = require('readline-sync');

function main() {
  const n = readline.questionInt('digite 1 ou 0: ')
}


function handleFibonacci(qty) {
  let a = 1;
  let b = 1;

  for (let n = qty; n >= 0; n -= 1) {
    const temp = a
    a += b;
    b = temp
  }
  console.log(b)
  return b
}

function main() {
  const n = readline.questionInt('Insira \'N\' valor: ');

  if (n <= 0) {
    console.log('entre com numero maior que zero')
    return
  }

  console.log(`N: ${n}`)
  handleFibonacci(n - 2)
}

main()