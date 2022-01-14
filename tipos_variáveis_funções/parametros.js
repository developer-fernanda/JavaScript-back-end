// Parâmetros de função 

//SOMA
function soma(numero1, numero2) {
    return numero1 + numero2;
}

console.log(soma(2, 2));
console.log(soma(4, 4));
console.log(soma(6, 6));

//NOME IDADE
function nomeIdade(nome, idade) {
    return `Meu nome é ${nome}, tenho ${idade} anos.`
}

console.log(nomeIdade("Nanda", 29));

//MUTIPLICAÇÃO
function multiplica(num1, num2) {
    return num1 * num2
}
//------------------------- 4 -------- 2 -------
console.log(multiplica(soma(2, 2), soma(1, 1)))

// FUNÇÃO SEM RETORNO E PARÂMETRO

function cumprimentar() {
    console.log('oi gente!')
}

cumprimentar()

// FUNÇÃO SEM RETORNO COM PARÂMETRO

function cumprimentaPessoa(pessoa) {
    console.log(`oi, ${pessoa}!`)
}

cumprimentaPessoa('Helena')

// Função cumprimentar está sendo utilizada para montar uma string na função cumprimentar pessoa

function cumprimentar() {
    return 'Oi gente!'
}

function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Nanda') // “Oi gente! Meu nome é Nanda”

// Parâmetros x argumentos: Na prática se referem ao mesmo tipo de dado; algumas documentações se referem a parâmetros no momento em que a função é definida (no caso, numero1, numero2, etc) e argumentos como os dados que utilizamos para executar a função (ou seja, 30, 45, etc).