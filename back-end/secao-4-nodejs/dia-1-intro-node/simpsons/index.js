const {
  promises: { readFile },
} = require("fs");
const readline = require('readline-sync');

async function printSimpsons() {
  try {
    const data = await readFile('./simpsons.json', 'utf-8');
    const simpsonsName = JSON.parse(data);
    simpsonsName.forEach((element) => {
      console.log(`${element.id} - ${element.name}`);
    });
  } catch (error) {
    console.log(error);
  }
}

async function findSimpson(id) {
  try {
    const data = await readFile('./simpsons.json', 'utf-8');
    const simpsonsName = JSON.parse(data);
    const character = simpsonsName.find((character) => character.id === String(id));
    if (character) { 
      console.log(`personagem: ${character.name}`, )
    } else {
      console.log('id não encontrado');
    };
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  await printSimpsons();
  const id = readline.questionInt('ID do personagem: ');
  console.log('id:', id);
  findSimpson(id);
}

main();
