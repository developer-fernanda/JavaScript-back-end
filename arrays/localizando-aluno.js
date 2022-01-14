//  LOCALIZANDO ALUNOS 

const alunos = [`Melissa`, `Helena`, `Rodrigo`]

const mediaDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediaDosAlunos]

//INCLUDES -> BOLEANOS
// INDEXOF -> 2 (retorna o número do Indice)

const exibeNomeAluno = (nomeDoAluno) => {
    //Verifica se na lista de Alunos existe o nome do Aluno passado por parâmetro
    //Includes - busca se no Array existe o valor que está no parâmetro

    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){
       let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
                                //[0][2]                                              //[1][3]
        return listaDeNotasEAlunos[0][indice] + ', sua média é: ' + listaDeNotasEAlunos[1][indice]
    }else{
        return "Aluno não cadastrado!"
    }
}

console.log(exibeNomeAluno('Helena'))

// EXEMPLO 2

const existeAluno = (nomeAluno) => {
    let existe = false
    listaDeNotasEAlunos[0].forEach(nome => {

        if (nome == nomeAluno){
             existe = true
        }
    }) 
    return existe
}

const exibeNomeAluno2 = (nomeDoAluno) => {
    //Verifica se na lista de Alunos existe o nome do Aluno passado por parâmetro
    //Includes - busca se no Array existe o valor que está no parâmetro

    if(existeAluno(nomeDoAluno) == true ){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
                                //[0][2]                                              //[1][3]
        return listaDeNotasEAlunos[0][indice] + ', sua média é: ' + listaDeNotasEAlunos[1][indice]
    }else{
        return "Aluno não cadastrado!"
    }
}


console.log(exibeNomeAluno2('Melissa'))

