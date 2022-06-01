// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails, filter, print, pokemons } = require("./exercise8");

describe("A função getPokemonDetails", () => {
  test("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {

    function print(err, msg) {
        expect(err).toEqual(new Error ('Não temos esse pokémon para você :('));
        done();
    }
    
    getPokemonDetails(filter('Pikachu'), print);
  });


  // it("retorna um pokemon que existe no banco de dados", () => {
  //   // Escreva aqui seu código
  // });
});
