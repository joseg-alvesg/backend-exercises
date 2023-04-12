const fs = require('fs').promises;
const {questionInt} = require('readline-sync');

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({id, name}) => `${id} - ${name}`)
  strings.forEach((string) => console.log(string))
}

async function getSimpsonsById(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent)
  const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id)
  if(!chosenSimpson) throw new Error('id não encontrado')
  return chosenSimpson;
}

async function removeSimpson() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const novoArray = simpsons.filter((simpson) => simpson.id !== '6' && simpson.id !== '10');
  await fs.writeFile('./simpsons.json', JSON.stringify(novoArray));
}

async function simpsonFamily() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const family = simpsons.filter((simpson) => simpson.id < 5)
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(family));
}

async function addChar() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const fileContent2 = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const simpsons2 = JSON.parse(fileContent2);
  const newNel = simpsons.filter((simpson) => simpson.id === '8');
  console.log(newNel);
  const newFamily = [...simpsons2, newNel[0]]
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(newFamily));
}

async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const semNelson = simpsons.filter((simpson) => simpson.id !== '8');
  const comMaggie = semNelson.concat([{ id: 15, name: 'Maggie Simpson' }]);
  return fs.writeFile('./simpsonFamily.json', JSON.stringify(comMaggie))
}


async function main() {
  // await readAll(); // A

  // const id = questionInt("Digite um id: "); // B
  // const simpsom = await getSimpsonsById(id);
  // console.log(simpsom)

  // removeSimpson(); // C

  await simpsonFamily(); // D

  await addChar(); // E

  replaceNelson(); // F
}

main();