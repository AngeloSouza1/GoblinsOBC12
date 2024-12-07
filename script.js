// Função que transforma os valores de acordo com as regras dos goblins
function transformarGoblinsGold(valores) {
  return valores.map(num => (num % 2 === 0 ? num * 3 : num - 5));
}

// Função principal para processar a entrada do usuário
function processarValores() {
  const entrada = document.getElementById("entrada").value;
  const resultadoDiv = document.getElementById("resultado");

  // Limpa o conteúdo anterior
  resultadoDiv.innerHTML = '';

  // Converte a entrada em uma lista de números
  const numeros = entrada.split(",").map(num => parseInt(num.trim()));

  // Validação para garantir que todos os itens são números
  if (numeros.some(isNaN)) {
    resultadoDiv.innerHTML = `<span style="color: red;">❌ Por favor, insira apenas números separados por vírgulas.</span>`;
    adicionarBotaoReiniciar(resultadoDiv);
    return;
  }

  // Transforma os valores e exibe o resultado
  const resultadoTransformado = transformarGoblinsGold(numeros);
  resultadoDiv.innerHTML = `✅ Resultado: [${resultadoTransformado.join(", ")}]`;

  // Adiciona o botão de reiniciar logo após o resultado
  adicionarBotaoReiniciar(resultadoDiv);
}

// Função para adicionar o botão de reiniciar
function adicionarBotaoReiniciar(resultadoDiv) {
  // Verifica se o botão já existe para evitar duplicatas
  if (document.getElementById("reiniciarBotao")) return;

  const botaoReiniciar = document.createElement("button");
  botaoReiniciar.id = "reiniciarBotao";
  botaoReiniciar.textContent = "Reiniciar";

  // Evento de clique para reiniciar a aplicação
  botaoReiniciar.addEventListener("click", reiniciarAplicacao);

  // Adiciona o botão ao resultado
  resultadoDiv.appendChild(botaoReiniciar);
}

// Função para reiniciar a aplicação
function reiniciarAplicacao() {
  document.getElementById("entrada").value = '';
  document.getElementById("resultado").innerHTML = '';
}

// Adiciona o evento ao botão principal
document.getElementById("botao").addEventListener("click", processarValores);
