//forEach - Para cada
//callback - Dentro do método coloca-se uma

const nomes = ["Nanda", "Joka", "Lucas"]

//EXEMPLO 1

//Passo a função como parâmetro 
nomes.forEach(imprimeNomes)

// Escrevo a função fora do forEcah
function imprimeNomes(nome){
    console.log(nome)

}

//EXEMPLO 2

// escrevo a função dentro do forEach
nomes.forEach(nome => {
    console.log(nome)
})