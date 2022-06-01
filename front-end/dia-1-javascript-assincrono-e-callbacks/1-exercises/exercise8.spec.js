const { getPokemonDetails } = require("./exercise8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", () => {
    expect(() => getPokemonDetails()).toThrowError(new Error('Não temos esse pokémon para você :('));
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    expect(getPokemonDetails('Squirtle')).toBe('Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun');
  });
});