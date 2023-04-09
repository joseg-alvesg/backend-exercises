const x = 10
const y = 'aaa'
const z = [1,2]

console.log(x,y,z);

// conntagem de impressões
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

// variavel entre string

console.log("o nome é %s e ele é programa", y)

// limpar o console

setTimeout(() =>{
  console.clear()
}, 2000)