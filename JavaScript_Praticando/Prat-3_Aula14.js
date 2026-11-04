
    const caixas = document.querySelectorAll(".caixa");
    const btnReset = document.getElementById("btnReset");
    const preview = document.getElementById("preview");

    // Cor "fixada" pelo clique: é para ela que o fundo volta no mouseout
    let corFixada = "white";

    caixas.forEach(function (caixa) {
        const cor = caixa.getAttribute("data-cor");

        // CLICK: a cor da caixa vira a cor padrão do fundo da página
        caixa.addEventListener("click", function () {
            corFixada = cor;
            document.body.style.backgroundColor = corFixada;
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

    // volta o fundo da página para branco
    btnReset.addEventListener("click", function () {
        corFixada = "white";
        document.body.style.backgroundColor = "white";
    });
    