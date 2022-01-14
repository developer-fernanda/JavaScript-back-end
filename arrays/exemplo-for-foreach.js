//EXEMPLO 

const notas1 = [10, 6.5, 8 ,7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media = 0

// Percorrer o Array 3 vezes - notasGerais[0], [1], [2]
for (let i = 0; i < notasGerais.length; i++) {
    //Percorrer o Array, acessando nota1, nota2, nota3 consecutivamente 
    let soma = 0
  for (let j = 0; j < notasGerais[i].length; j++) {
      soma += notasGerais[i][j]
  }
   media += soma/notasGerais[i].length
}

console.log(media/notasGerais.length)


//EXEMPLO 2 - BY CANDANGOS

const lista1 = ["Nanda", "Lucas"]
const lista2 = ["Adryan", "Suzane", "Joaquim"]
const lista3 = ["Hercules", "Maria", "Fatima", "Rita"]

const listaGeral = [lista1, lista2, lista3]

let todosNomes = ""

for (let i = 0; i < listaGeral.length; i++){
    for (let j = 0; j < listaGeral[i].length; j++){
        todosNomes += listaGeral[i][j] + ", "
    }
}

console.log(`Lista de nomes: ${todosNomes}`)

//EXEMPLO COM O FOREACH

const primeiraLista = ["Nanda", "Lucas"]
const segundaLista = ["Adryan", "Suzane", "Joaquim"]
const terceiraLista = ["Hercules", "Maria", "Fatima", "Rita"]

const todasListas = [primeiraLista, segundaLista, terceiraLista]

todosNomesLista = ""

//No primeiro forEach ele recebe como parâmetro o array que contém todas as listas 
todasListas.forEach(todasListas =>{
    todasListas.forEach(lista =>{
        // todosNomes armazena todos os valores, que a cada volta fica armazenado em lista 
        todosNomesLista += lista + ", "
    })

})

console.log(`Segunda lista de nomes: ${todosNomesLista}`)





