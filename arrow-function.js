function apresentar(nome) {
    return `Meu nome é ${nome}`;
}

console.log(apresentar("Nanda"))


//ARROW FUNCTION

// NOME DA CONST --- PARÂMETRO => oq ela faz

const apresentarArrow = nome => `Meu nome é ${nome}`;

console.log(apresentarArrow("Lucas"))

const soma = (num1, num2) => num1 + num2;

console.log(soma(20, 20))

// ARROW FUNCTION + de uma linha de instrução

// EXEMPLO CORRIGIDO 

// HOISTING : arrow function se comporta como expressão 

const somaNumerosPequenos = (num1, num2) => {
    if ((num1 < 10) && (num2 < 10)) {
        return num1 + num2;
    } else {
        return "Somente números de 1 a 9";
    }
}

console.log(somaNumerosPequenos(4, 4));