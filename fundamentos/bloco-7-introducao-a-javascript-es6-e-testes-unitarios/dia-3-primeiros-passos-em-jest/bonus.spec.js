const searchEmployee = require('./bonus');

describe('verifica se a função searchEmployee tem o comportamento esperado', () => {
  it('verifica se a função existe', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('verifica se o id existente retorna o nome esperado', () => {
    expect(searchEmployee('1256-4', 'firstName')).toBe('Linda');
  });
  it('verifica se o id existente retorna o sobrenome esperado', () => {
    expect(searchEmployee('4678-2', 'lastName')).toBe('Dodds');
  });
  it('verifica se o id existente retorna as especialidades esperadas', () => {
    expect(searchEmployee('8579-6', 'specialities')).toEqual(['UX', 'Design']);
  });
  it('verifica se o id inexistente retorna erro', () => {
    expect(() => {
      searchEmployee('1234-5', 'lastName');
    }).toThrow();
  });
});
