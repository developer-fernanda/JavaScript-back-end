//MÉTODO SPLICE
const listaDeChamada = [` Nanda`, ` Joaquim`, ` Lucas`, ` Adryan`, ` Maria`, ` Suzane`]

//1) Indice que inicia a alteração
//2) Numero de elementos a remover
//3) O que vai ser colocado no lugar do item removido - este parâmetro não é obrigatório
listaDeChamada.splice(1,2,' Ingrid')
// listaDeChamada.splice(2, 0,' Ingrid')

console.log(`Lista de chamada ${listaDeChamada}`)