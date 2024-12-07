const transformarValoresGoblinsGold = require('../utils');

describe('Testes para a função transformarValoresGoblinsGold', () => {
  test('Transforma valores com números pares e ímpares', () => {
    expect(transformarValoresGoblinsGold([2, 5, 8, 13, 21, 34])).toEqual([6, 0, 24, 8, 16, 102]);
  });

  test('Transforma apenas números pares', () => {
    expect(transformarValoresGoblinsGold([2, 4, 6, 8])).toEqual([6, 12, 18, 24]);
  });

  test('Transforma apenas números ímpares', () => {
    expect(transformarValoresGoblinsGold([1, 3, 5, 7])).toEqual([-4, -2, 0, 2]);
  });

  test('Transforma lista vazia', () => {
    expect(transformarValoresGoblinsGold([])).toEqual([]);
  });

  test('Transforma lista com valores negativos', () => {
    expect(transformarValoresGoblinsGold([-2, -5, -8, -13])).toEqual([-6, -10, -24, -18]);
  });
});
