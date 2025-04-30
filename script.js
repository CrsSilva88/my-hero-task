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

botaoAdicionar.addEventListener("click", () => {
  const texto = inputTarefa.value.trim();
  if (texto === "") {
    alert("Digite uma tarefa antes de adicionar!");
    return;
  }

  const novaTarefa = document.createElement("li");
  const textoTarefa = document.createTextNode(`🔜 ${texto}`);

  const botaoExcluir = document.createElement("button");
  botaoExcluir.textContent = "🗑️";
  botaoExcluir.className = "btn-excluir";
  botaoExcluir.addEventListener("click", (e) => {
    e.stopPropagation(); // Evita que o clique acione troca de status
    novaTarefa.remove();
  });

  // ⚠️ Aqui está o que estava faltando: clique na tarefa para alternar status
  novaTarefa.addEventListener("click", () => {
    alternarStatus(novaTarefa);
  });

  novaTarefa.appendChild(textoTarefa);
  novaTarefa.appendChild(botaoExcluir);
  listaFrontend.appendChild(novaTarefa);

  inputTarefa.value = "";
});

function alternarStatus(tarefa) {
  // Verifica se o primeiro filho do <li> é um texto
  const textoOriginal = tarefa.firstChild;

  if (textoOriginal.nodeType === Node.TEXT_NODE) {
    // Altera somente o conteúdo do texto, sem remover os botões
    if (textoOriginal.textContent.includes("🔜")) {
      textoOriginal.textContent = textoOriginal.textContent.replace("🔜", "✅");
    } else if (textoOriginal.textContent.includes("✅")) {
      textoOriginal.textContent = textoOriginal.textContent.replace("✅", "🔜");
    }
  }
}

// Para tarefas existentes no HTML ao carregar a página
document.querySelectorAll(".card li").forEach((tarefa) => {
  // Cria botão
  const botaoExcluir = document.createElement("button");
  botaoExcluir.textContent = "🗑️";
  botaoExcluir.className = "btn-excluir";

  // Adiciona clique
  botaoExcluir.addEventListener("click", (e) => {
    e.stopPropagation(); // Evita alternar status ao clicar no botão
    tarefa.remove();
  });

  tarefa.appendChild(botaoExcluir); // Adiciona ao <li>
});
