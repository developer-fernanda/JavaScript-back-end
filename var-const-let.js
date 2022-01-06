// --------------------------------------
// CONST / VAR / LET


//VAR

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area);
// var area;


//LET
// let forma = 'retangulo';
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retangulo') {
//     area = altura * comprimento
// } else {
//     area = (altura * comprimento) / 2
// }

// console.log(area);


//CONST
const forma = 'quadrado';
const altura = 5;
const comprimento = 7;
// O valor de área irá mudar, por esse motivo não pode ser declarado como constante 
let area;

if (forma === 'test') {
    area = altura * comprimento
} else {
    area = (altura * comprimento) / 2
}

console.log(area);