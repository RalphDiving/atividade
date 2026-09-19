let nome = prompt("Digite seu nome:");
let idade = Number(prompt("Digite sua idade:"));
let dinheiro = Number(prompt("Quanto dinheiro você tem?"));

const preco = 50;

let comprar = confirm("O produto custa R$ " + preco + ". Deseja comprar?");

if (comprar) {
    let restante = dinheiro - preco;

    alert(
        "Compra realizada!\n" +
        "Nome: " + nome +
        "\nIdade: " + idade +
        "\nPreço: R$ " + preco +
        "\nDinheiro restante: R$ " + restante
    );
} else {
    alert("Compra cancelada.");
}