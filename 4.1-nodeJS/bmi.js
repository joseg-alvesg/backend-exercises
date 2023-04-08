const readline = require('readline-sync');

function bmi(peso, altura) {
  console.log(`peso: ${peso} kg, altura: ${altura} cm`)

  const alturaEmMetros = altura / 100;
  const alturaAoQuadrado = alturaEmMetros ** 2;
  
  const imc = peso / alturaAoQuadrado;

  return imc;
}

function main() {
  const kg = readline.questionFloat('Qual o seu peso? ');
  const cm = readline.questionInt('Qual a sua altura? ');
  const imc = bmi(kg, cm);
  if (imc < 18.5) {
    console.table(`${imc.toFixed(2)}: Abaixo do peso`);
  } else if (imc >= 18.5 && imc <= 24.9) {
    console.table(`${imc.toFixed(2)}: Peso normal`);
  } else if (imc >= 25 && imc <= 29.9) {
    console.table(`${imc.toFixed(2)}: Sobrepeso`);
  } else if (imc >= 30 && imc <= 34.9) {
    console.table(`${imc.toFixed(2)}: Obesidade grau 1`);
  } else if (imc >= 35 &&imc <= 39.9) {
    console.table(`${imc.toFixed(2)}: Obesidade grau 2`);
  } else {
    console.table(`${imc.toFixed(2)}: Obesidade grau 3`);
  }
}

main();