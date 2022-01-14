//MÉDIA USANDO FOR

const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0
                //Condição de parada
for (let i = 0; i < notas.length; i++ ){
    somaDasNotas += notas[i] // A cada volta é incrementado um valor no indice i e somado ao valor anterior 
}

let media = somaDasNotas/notas.length

console.log(media)
