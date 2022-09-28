const {
  promises: { readFile },
} = require("fs");

// const simpsons = require("./simpsons");

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

printSimpsons();
