// MÉTODO SLICE (CORTAR)
const nomes = [` Nanda`, ` Joaquim`, ` Lucas`, ` Adryan`, ` Maria`, ` Suzane`, ` Hercules`, ` Fatima`, ` Johnny`, ` Ingrid`, ` Severino`, ` Lucia`, ` Rita`, ` Geraldo`]

console.log(`Tamanho do Array: `, nomes.length)

//Método que Divide - posição inicio - Comprimento/
// Primeiro Parâmetro - Onde começa 
// Sem primeiro parametro do meio para o final 
const sala1 = nomes.slice(0, nomes.length/2) 
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)