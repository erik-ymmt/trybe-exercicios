// Parte I - Game Actions Simulator

const mage = {
  name: 'Mago',
  healthPoints: 130,
  intelligence: 45,
  mana: 75,
  damage: undefined,
};

const warrior = {
  name: 'Guerreiro',
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  name: 'Dragão',
  healthPoints: 350,
  strength: 100,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonDamage = () => {
  return Math.floor(Math.random() * (dragon['strength'] + 1 - 15 )) + 15
};

// 2 - Crie uma função que retorna o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorDamage = () => {
  const { strength, weaponDmg } = warrior;
  return Math.floor(Math.random() * (strength * weaponDmg + 1 - strength) + strength)
};

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const mageDmgAndManaUsage = () => {
  let mageDamage = Math.floor(Math.random() * ((mage['intelligence'] * 2) + 1 - mage['intelligence'] )) + mage['intelligence'];
  let manaUsage = 15;
  if (mage['mana'] < 15) {
    mageDamage = 0; // Sem mana;
    manaUsage = 0;
  }
  return { 
    'mageDamage': mageDamage,
    'manaUsage': manaUsage }
}

// Parte II
// 1 - Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem warrior. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor da chave damage do warrior.

const warriorAttacks = (warriorDmg) => {
  warrior['damage'] = warriorDmg();
  dragon['healthPoints'] -= warrior['damage'];
}

// 2 - Crie a segunda HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem mage. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor das chaves damage e mana do mage.

const mageAttacks = (mageDmg) => {
  mage['mana'] -= mageDmg()['manaUsage'];
  mage['damage'] = mageDmg()['mageDamage'];
  dragon['healthPoints'] -= mage['damage'];
}

// 3 - Crie a terceira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do monstro dragon. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disto ela também deve atualizar o valor da chave damage do monstro.

const dragonAttacks = (dragonDmg) => {
  dragon['damage'] = dragonDmg();
  warrior['healthPoints'] -= dragon['damage'];
  mage['healthPoints'] -= dragon['damage'];
}

// 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.

const turnResult = () => {
  console.log(battleMembers);
}

const gameActions = {
  warriorTurn: warriorAttacks,
  mageTurn: mageAttacks,
  dragonTurn: dragonAttacks,
  turnResult: turnResult,
  startGame: () => {
    while ((warrior['healthPoints'] > 0 || mage['healthPoints'] > 0) && dragon['healthPoints'] > 0) {
      gameActions.turnResult();
      if (warrior['healthPoints'] > 0) {
        gameActions.warriorTurn(warriorDamage)
      };
      if (mage['healthPoints'] > 0) {
      gameActions.mageTurn(mageDmgAndManaUsage);
      }
      if (dragon['healthPoints'] > 0) {
      gameActions.dragonTurn(dragonDamage);
      }
    }
    if (warrior['healthPoints'] <= 0) {
      console.log(`${warrior['name']} derrotado.`);
    }
    if (mage['healthPoints'] <= 0) {
      console.log(`${mage['name']} derrotado.`);
    }
    if (dragon['healthPoints'] <= 0) {
      console.log(`${dragon['name']} derrotado.`);
    }
  }
};

gameActions.startGame();

// TODO: refatorar de maneira mais simples os ifs.
