let distancia= Number(prompt("Informe a distância da viagem:"));
let consumo= Number(prompt("Informe o consumo médio do veiculo:"));
let preco= Number(prompt("Informe o preço do commbustível"));

let combustivel= distancia/consumo;
let custo= combustivel*preco;

alert(
    "Combustível:" + combustivel +
    "\nCusto:"+ custo

);