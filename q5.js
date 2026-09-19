let preço= Number(prompt("Informe o valor do produto:"));
let quant= Number(prompt("Informe a quantidade:"));
let perdesconto= Number(prompt("Informe o desconto:"));

let subtotal= preço + quant;
let desconto= subtotal * perdesconto/100;
let valorfinal= subtotal - desconto;

alert(
    "Subtotal:" + subtotal +
    "\nDesconto:" + desconto +
    "\nValorFinal:" + valorfinal

);