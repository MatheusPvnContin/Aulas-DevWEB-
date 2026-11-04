const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const inputResultado = document.getElementById("resultado");

const btnSoma = document.getElementById("btnSoma");
const btnSubtracao = document.getElementById("btnSubtracao");
const btnMultiplicacao = document.getElementById("btnMultiplicacao");
const btnDivisao = document.getElementById("btnDivisao");
const btnLimpar = document.getElementById("btnLimpar");

function calcular(operacao) {
    let n1 = Number(inputNum1.value);
    let n2 = Number(inputNum2.value);
    let res = 0;

    // Tratando campos vazios ou inválidos
    if (inputNum1.value === "" || inputNum2.value === "") {
        inputResultado.value = "Digite ambos os números";
        return;
    }

    if (operacao === "+") res = n1 + n2;
    if (operacao === "-") res = n1 - n2;
    if (operacao === "*") res = n1 * n2;
    
    if (operacao === "/") {
        // Tratando divisão por zero
        if (n2 === 0) {
            inputResultado.value = "Erro: Divisão por 0";
            return;
        }
        res = n1 / n2;
    }

    inputResultado.value = res;
}

// Associando os botões à função de cálculo
btnSoma.addEventListener("click", () => calcular("+"));
btnSubtracao.addEventListener("click", () => calcular("-"));
btnMultiplicacao.addEventListener("click", () => calcular("*"));
btnDivisao.addEventListener("click", () => calcular("/"));

btnLimpar.addEventListener("click", () => {
    inputNum1.value = "";
    inputNum2.value = "";
    inputResultado.value = "";
    inputNum1.focus();
});