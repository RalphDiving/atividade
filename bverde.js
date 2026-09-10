let soma = 0;

let botao = document.getElementById("botao");
let clicks = document.getElementById("clicks");

botao.addEventListener("click", function() {
    soma = soma + 1;
    clicks.textContent = soma;
});