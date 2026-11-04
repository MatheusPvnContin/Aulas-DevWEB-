// Pergunta o nome ao carregar a página
let nome = prompt("Qual é seu nome?");

if (nome === null || nome.trim() === "") {
    nome = "visitante";
}

// Insere o nome na página 
document.getElementById("nome").textContent = nome;


// 2. Seleciona os botões e a div através do DOM
const btnAdicionar = document.getElementById("btnAdicionar");
const btnRemover = document.getElementById("btnRemover");
const divTextos = document.getElementById("textos");

// 3. Evento para adicionar um novo parágrafo a cada clique
btnAdicionar.addEventListener("click", function() {
    const novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
    "Doloremque ducimus, facere exercitationem saepe culpa iste magni neque dolorum," +
    "enim laboriosam officiis ullam vitae odio possimus ipsum esse harum ut amet.";
    
    // Adiciona o parágrafo dentro da div #textos
    divTextos.appendChild(novoParagrafo);
});

// 4. Evento para remover todos os parágrafos de uma vez
btnRemover.addEventListener("click", function() {
    // Seleciona todos os parágrafos que estão dentro da #textos
    const paragrafos = divTextos.querySelectorAll("p");
    
    // Percorre cada parágrafo encontrado e o remove da tela
    paragrafos.forEach(function(paragrafo) {
        paragrafo.remove();
    });
});

