// MÉTODO MAP
//Esse método retorna uma array 

const notas = [10, 9, 8, 7, 6]

// O método percorre a array e realiza a condição a cada volta 
                              //Parâmetro Condição ? If : else
const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)

console.log(notasAtualizadas)

// EXEMPLO 2

const notasAluno = [10, 10, 7, 8]

let notasAlunoAtualizada = notasAluno.map(nota => nota == 10 ? nota : nota + 1)

console.log(notasAlunoAtualizada)

