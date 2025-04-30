// Captura o botão usando o ID dele
const botaoFiltro = document.getElementById("btn-pendentes");
const botaoAdicionar = document.getElementById("btn-adicionar");
const inputTarefa = document.getElementById("input-tarefa");

// Captura a lista de tarefas do primeiro card (Frontend)
const listaFrontend = document.querySelector(".card ul");
// Pega todos os elementos <li> dentro dos cards
const tarefas = document.querySelectorAll(".card li");
// Variável para saber se o filtro está ativo ou não
let filtroAtivo = false;

// Função para aplicar ou remover o filtro
botaoFiltro.addEventListener("click", () => {
  if (!filtroAtivo) {
    // Se o filtro não está ativo, esconde tudo que não for pendente
    tarefas.forEach((tarefa) => {
      if (!tarefa.textContent.includes("🔜")) {
        tarefa.style.display = "none"; // Esconde a tarefa
      }
    });

    botaoFiltro.textContent = "Mostrar todas as tarefas"; // Atualiza o texto do botão
    filtroAtivo = true; // Ativa o estado do filtro
  } else {
    // Se o filtro está ativo, mostra tudo de novo
    tarefas.forEach((tarefa) => {
      tarefa.style.display = "list-item"; // Mostra a tarefa
    });

    botaoFiltro.textContent = "Mostrar apenas pendentes"; // Volta o texto original
    filtroAtivo = false; // Desativa o filtro
  }
});

// Adiciona evento de clique no botão
botaoAdicionar.addEventListener("click", () => {
  const texto = inputTarefa.value.trim(); // .trim() remove espaços em branco

  if (texto === "") {
    alert("Digite uma tarefa antes de adicionar!"); // Validação simples
    return; // Sai da função
  }

  // Cria um novo <li> com a tarefa pendente
  const novaTarefa = document.createElement("li"); // Cria a tag <li>
  novaTarefa.textContent = `🔜 ${texto}`; // Define o texto com emoji de pendente

  listaFrontend.appendChild(novaTarefa); // Adiciona na lista de tarefas

  inputTarefa.value = ""; // Limpa o campo de texto após adicionar
});
