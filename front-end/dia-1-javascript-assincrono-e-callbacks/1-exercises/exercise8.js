const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function getPokemonDetails(filter) {
    const pokemon = pokemons.find((element) => element.name === filter);

    if (pokemon === undefined) {
      throw new Error('Não temos esse pokémon para você :(');
    }

    const { name, type, ability } = pokemon;
    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    console.log(messageFromProfOak);
    return messageFromProfOak;
}

module.exports = {
  getPokemonDetails,
};
