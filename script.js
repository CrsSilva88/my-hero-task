// Captura o botão usando o ID dele
const botaoFiltro = document.getElementById("btn-pendentes");

// Variável para saber se o filtro está ativo ou não
let filtroAtivo = false;

// Função para aplicar ou remover o filtro
botaoFiltro.addEventListener("click", () => {
  // Pega todos os elementos <li> dentro dos cards
  const tarefas = document.querySelectorAll(".card li");

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
