// Função para transformar os valores conforme as regras dos goblins
function transformarValoresGoblinsGold(valores) {
    return valores.map(numero => {
      if (numero % 2 === 0) {
        return numero * 3;
      } else {
        return numero - 5;
      }
    });
  }
  
  // Exportar a função para testes
  module.exports = transformarValoresGoblinsGold;
  