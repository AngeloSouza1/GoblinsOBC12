const transformarValoresGoblinsGold = require('./utils');

// Lógica ao clicar no botão
document.getElementById('transformar-btn').addEventListener('click', () => {
  const inputElement = document.getElementById('numeros');
  const resultadoElement = document.getElementById('resultado');

  // Obter a entrada e converter para um array de números
  const entrada = inputElement.value.split(',').map(num => parseInt(num.trim(), 10));

  // Validar entrada
  if (entrada.some(isNaN)) {
    alert('Por favor, insira apenas números separados por vírgula.');
    return;
  }

  // Transformar os valores
  const resultado = transformarValoresGoblinsGold(entrada);

  // Exibir o resultado
  resultadoElement.textContent = `Valores Transformados: ${resultado.join(', ')}`;
  resultadoElement.classList.remove('hidden');
});
