const {
  promises: { readFile, writeFile },
} = require("fs");
const readline = require("readline-sync");

async function readSimpsons(file) {
  try {
    const data = await readFile(file, "utf-8");
    const simpsonsName = JSON.parse(data);
    return simpsonsName;
  } catch (error) {
    console.log(error);
  }
}

async function printSimpsons() {
  const simpsonsName = await readSimpsons("./simpsons.json");
  simpsonsName.forEach((element) => {
    console.log(`${element.id} - ${element.name}`);
  });
}

async function findSimpson(id) {
  const simpsonsName = await readSimpsons("./simpsons.json");
  const character = simpsonsName.find(
    (character) => character.id === String(id)
  );
  if (character) {
    console.log(`personagem: ${character.name}`);
  } else {
    console.log("id não encontrado");
  }
}

async function deleteSimpson() {
  const simpsonsNameData = await readSimpsons("./simpsons.json");
  const newSimpsons = simpsonsNameData.filter(
    (simpsonName) => simpsonName.id !== "10" && simpsonName.id !== "6"
  );
  deleteSimpson = JSON.stringify(newSimpsons)
  try {
    await writeFile("./simpsonsCopy.json", deleteSimpson);
    console.log("sucesso!");
  } catch (err) {
    console.log("erro:", err);
  }
}

async function main() {
  // await printSimpsons();
  // const id = readline.questionInt("ID do personagem: ");
  // console.log("id:", id);
  // findSimpson(id);
  deleteSimpson();
}

main();
