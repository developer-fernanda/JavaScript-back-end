// --------------------------------------
// OPERADOR TENARIO

const idadeMinima = 18;
const idadeCliente = 19;

// if (idadeCliente >= idadeMinima) {
//     console.log("Autorizado")
// } else {
//     console.log("Não Autorizado")
// }

//TENARIO
// ? Separa a condição do resultado
// : Separa os tipos de resultados 

// Condição                    // true        // false
console.log(idadeCliente >= idadeMinima ? "Autorizado" : "Não Autorizado");

// EXEMPLO 

const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
    // console.log(pedido)

// EXEMPLO

const nome2 = "Lucas";
const idade2 = 25;
const vacinado = false;

const autorizacao = `O visitante ${nome2} tem ${idade2} anos e ${vacinado == true ? 'está Autorizado ' : 'não está autorizado '}a entrar nesse estabelecimento!`

console.log(autorizacao);