// MÉTODO PUSH - ADD UM ITEM A LISTA

const notas = [10, 6, 8]

//Push ( Add uma nota)
notas.push(7)

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(`A média é ${media}`)

// EXEMPLO 

const arrayVazia = [,,,];
console.log(arrayVazia.length)
arrayVazia.push(50)
console.log(arrayVazia)
console.log(arrayVazia.length)