// MÉDIA USANDO O FOREACH

const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

//forEach - Para cada
//callback - Dentro do método coloca-se uma função 
notas.forEach(nota =>{
    somaDasNotas += nota
})

//notas.forEach(function(nota){
  //  somaDasNotas += nota

//})

let media = somaDasNotas/notas.length

console.log(media)



