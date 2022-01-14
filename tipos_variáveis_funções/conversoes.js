// --------------------------------------
// CONVERSÕES

//tipo de dados
//booleanos

//------------------------------
// Conversão implícita 

const numero = 450;
const numeroString = "450";

// Converte para number
// const numeroString = Number("450");

// NaN - não pode possuir caracteres ou letras para fazer a conversão 
// const numeroString = Number("450A");

// == converte o numero para string antes de comparar 
// console.log(numero == numeroString);

// + Concatena os valores
// console.log(numero + numeroString);


//------------------------------
//Conversão explicita

//Number 
//String
console.log(numero + Number(numeroString));

//------------------------------
// EXEMPLOS

// Conversão para String
let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

// Conversão para String - toString
let telefone2 = 12341234;
console.log("O telefone é " + telefone2.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

// Conversão para de boolean para String
let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.

// Conversão de String para número
// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da da multiplicação

//NAN
let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log(+meuNome); // a conversão também retornará NaN

// Conversão de booleana para número
let usuarioConectado2 = false;
console.log(Number(usuarioConectado2)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado3 = true;
console.log(Number(usuarioConectado3)); // agora teremos a conversão de true (verdadeiro) para o número 1.


// EXERCICIO
var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)