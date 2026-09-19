let nome= prompt("Informe seu nome:");
let idade= Number(prompt("Informe sua idade:"));
let curso= prompt("Informe seu curso:");

let confirmar= confirm(
    "Confira seus dados:\n"+
    "Nome:"+ nome +
    "\nIdade:"+ idade+
    "\nCurso:"+ curso +
    "Deseja confirmar?"
);
if(confirmar){
    alert("Dados confirmados");
}
else{
    alert("Dados não confirmados");
}