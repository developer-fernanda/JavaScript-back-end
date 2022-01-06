// --------------------------------------
// TIPOS DE VARIAVEIS 

// camelCase: Inicia com letra minúscula e a primeira letra de cada palavra em seguida é escrita com letra maiúscula. Por exemplo: minhaVar ou senhaDoUsuario. Esta é a convenção utilizada pelo JavaScript para variáveis e funções.

// snake_case: Os espaços são substituídos pelo caractere _ (underline), com todas as palavras em letra minúscula. Por exemplo: minha_variavel ou senha_do_usuario.

// kebab-case: Similar ao anterior, porém com os espaços substituídos por hífens. Por exemplo: minha-var ou senha-do-usuario.

//PascalCase: Similar ao CamelCase, porém neste caso todas as palavras começam com letra maiúscula. Por exemplo: MinhaVar ou SenhaDoCliente.


// TIPOS DE ERROS

//  RangeError: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. Por exemplo, um processamento que só pode ser feito com números inteiros maiores ou iguais a zero, mas recebe -1.

// ReferenceError: Normalmente ocorre quando o código tenta acessar algo que não existe, como uma variável que não foi definida; muitas vezes é causado por erros de digitação ou confusão nos nomes utilizados, mas também pode indicar um erro no programa.

// SyntaxError: Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não consegue executá-lo. Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta, por exemplo, operadores ou sinais gráficos com elementos a menos, como esquecer de fechar chaves ou colchetes.

// TypeError: Indica que o código esperava receber um dado de um determinado tipo, tal qual uma string de texto, mas recebeu outro, como um número, booleano ou null.

// TIPOS DE CONSOLE 

// console.error() para exibir mensagens de erro;
// console.table() para visualizar de forma mais organizada informações tabulares;
// console.time() e console.timeEnd() para temporizar período que uma operação de código leva para ser iniciada e concluída;
// console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.

//new ERROR
console.log("deu erro");
console.error(new Error("deu erro"));

// OPERADORES
// ||: Operador“ ou”, retorna true caso uma condição seja válida; 
// &&: Operador“ e”, retorna true somente se todas as condições forem válidas; 
// != e !==: Operadores“ não igual” e“ estritamente não igual”, utilizados para comparação, da mesma forma que == e === retornam true ou false.