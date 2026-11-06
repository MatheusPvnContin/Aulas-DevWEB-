const caixas = document.querySelectorAll(".caixa");
const btnReset = document.getElementById("btnReset");
const preview = document.getElementById("preview");


let corFixada = localStorage.getItem("corFundo") ?? "white";
document.body.style.backgroundColor = corFixada;

caixas.forEach(function (caixa) {
    const cor = caixa.getAttribute("data-cor");

    // CLICK: a cor da caixa vira a cor padrão do fundo e é salva no LocalStorage
    caixa.addEventListener("click", function () {
        corFixada = cor;
        document.body.style.backgroundColor = corFixada;
        
        // Salvando no LocalStorage 
        localStorage.setItem("corFundo", corFixada);
    });

    // fundo assume a cor da caixa e o texto "Preview" aparece
    caixa.addEventListener("mouseover", function () {
        document.body.style.backgroundColor = cor;
        preview.style.display = "block";
    });

    // fundo volta para a cor fixada e o texto "Preview" some
    caixa.addEventListener("mouseout", function () {
        document.body.style.backgroundColor = corFixada;
        preview.style.display = "none";
    });
});

// RESET: volta o fundo para branco e limpa o LocalStorage
    btnReset.addEventListener("click", function () {
    corFixada = "white";
    document.body.style.backgroundColor = "white";
    
    // Remove a chave do LocalStorage para que recarregue sem cor salva
    localStorage.removeItem("corFundo");
});