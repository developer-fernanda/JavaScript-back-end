// Expressão de função
// Não é possivel chamar a função antes de declarar a função 
const soma = function(num1, num2) { return num1 + num2 }
console.log(soma(2, 2))

// Diferença principal: HOISTING
// Funções e Var são listada no Topo 

console.log(apresentar());

function apresentar() {
    return "Olá";
}