let salario= Number(prompt("Informe seu salário:"));
let percentual= Number(prompt("Informe o percentual de reajuste:"));

let aumento= salario*percentual/100;
let novosalario= salario+aumento;

alert(
    "Salário atual:"+ salario +"\n"+
    "Aumento:"+ aumento + "\n"+
    "Novo salário:"+ novosalario 

);