//  LISTA DE DUAS DIMENSÕES 
               //[0] ------ [1] ------- [2]
const alunos = [`Melissa`, `Helena`, `Rodrigo`]
                      //[0][1][2][3]
const mediaDosAlunos = [10, 7, 9, 6]

// [[`Melissa`, `Helena`, `Rodrigo`],  [10, 7, 9, 6] ]
                           //[0] ----- [1]
let listaDeNotasEAlunos = [alunos, mediaDosAlunos]

console.log(`${listaDeNotasEAlunos[0][0]} sua média é ${listaDeNotasEAlunos[1][0]}`)

// EXEMPLO

idades = [30, 35, 28]
nomes = ["Ana", "Juliana", "Leonardo"]
faculdade = [false, true, true]

funcionarios = [nomes, idades, faculdade]

console.log(`${funcionarios[0][1]} tem ${funcionarios[1][0]} anos`)