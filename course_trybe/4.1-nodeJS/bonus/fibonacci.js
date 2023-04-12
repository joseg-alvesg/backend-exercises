const readline = require("readline-sync");

function main() {
  const n = readline.questionInt("digite 1 ou 0: ");
}

function handleFibonacci(qty) {
  let a = 1;
  let b = 1;

  for (let n = qty; n >= 0; n -= 1) {
    const temp = a;
    a += b;
    b = temp;
  }
  console.log(b);
  return b;
};

function main() {
  const n = readline.questionInt("Insira 'N' valor: ");

  if (n <= 0) {
    console.log("entre com numero maior que zero");
    return;
  };

  console.log(`N: ${n}`);
  handleFibonacci(n - 2);
};
// main();

function parameters(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
      const result =  ((a + b) * c);
      if (result < 50) {
        return reject(new Error('Valor muito baixo'))
      }
      resolve(result)
    };
    return reject(new Error('Informe apenas números'));
  });
};

async function first() {
  try {
    const resolve = await parameters(10, 10, 10);
    console.log(resolve);
  } catch (e) {
    console.log(e.message);
  }
}
first()

async function secondResolve() {

  try {

  const resolve = await parameters(1, 1, 'a');

  console.log(resolve);

  } catch (error) {

  console.log(error.message);

  }

}

secondResolve();


async function thirdResolve() {

  try {

  const resolve = await parameters(1, 1, 1);

  console.log(resolve);

  } catch (error) {

  console.log(error.message);

  }

}

thirdResolve();
