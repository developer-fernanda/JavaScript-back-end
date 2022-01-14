// DECLARAÇÃO DE FUNÇÕES 

// 1) declarar a função 

//|||||||||||||||||||| String
function imprimeTexto(texto) {
    console.log(texto)

}

// 2) executar a função 1 ou = vezes


imprimeTexto("Hello Word!!!");

//Chamando uma função dentro da outra 
imprimeTexto(soma());

//return para exibir o resultado 
function soma() {
    return 2 + 2;
}

console.log(soma());