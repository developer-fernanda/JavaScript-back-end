// --------------------------------------
// UNICODE

// Codificação de caracteres - Unicode

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//----------------------------------------------------------------------
// Métodos para manipular strings de texto: alterar de maiúsculas para minúsculas

const cidade = "belo horizonte";
const input = "Belo Horizonte";

//o toLowerCase() converte todos os caracteres da string informada (no caso, input) para letras minúsculas 
const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true


//------------------------------------------------------------------------
//Length (utilizada para sabermos quantos caracteres uma string contém)

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres