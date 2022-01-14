//  MÉTODO MAP

let nomes = ["ana julia", "Caio vinicius", "BIA silva"]

const nomesAtualizados = nomes.map(nome => nome.toUpperCase())

console.log(nomesAtualizados)


//EXEMPLO 2

let listaNomes = ["Joaquim adryan", "Fernanda Ingrid", "LUCAS moraes"]

const listaAtualizada = listaNomes.map(lista => lista.toUpperCase() )

console.log(listaAtualizada)


// EXEMPLO ALURA 

const nome = "Alura";
// ["A", "l", "u", "r", "a"]

let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas) //

//MÉTODO CONTACT 

const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"

const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)  //Fundamentos de JS Alura
