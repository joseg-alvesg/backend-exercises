import inquirer from "inquirer";

inquirer.prompt([
  {
    name: "p1",
    message: "Qual a primeira nota? ",
  },
  {
    name: 'p2',
    message: 'Qual a segunda nota? '
  },
]).then((answers) => {
  console.log(answers)
  const media = (+answers.p1 + +answers.p2 ) / 2
  console.log(`a media é ${media}`);
}).catch((err) => console.log(err));
