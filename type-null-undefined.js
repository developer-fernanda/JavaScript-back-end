// --------------------------------------
// NULL 

// O null é um tipo especial, pois pode ser traduzido como “ausência de valor” 

let input = null;

if (input === null) {
    console.log('não há informação');
} else {
    console.log(input);
}

// Null x Undefined

let input2 = null;
let input3;

console.log(input2); // null
console.log(input3); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false