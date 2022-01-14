//FOR 

const numeros = [100, 200, 300, 400, 500, 600]
                     // 6
for ( let i = 0; i < numeros.length; i++){
                          //0 
    console.log(i, numeros[i]) //i inicia com valor 0 e é incrementado a cada volta 
}

// NUMERO DE 0 A 10  

for (let i = 1; i <= 10; i++){
    console.log(i)

}

// O código executa corretamente e o programa é capaz de encerrar o loop, pois a condição de parada i <= 10 está correta, a variável i que faz o controle do loop começa em 0 e ao fim de cada ciclo do loop, é aumentada em 1 (i++). Quando o valor da variável de controle i chega a 11, depois de imprimir o número 10 no terminal, a comparação i <= 10 retorna false e isso encerra o loop.

// NUMEROS DE 0 A 10 

for (let i = 0; i <= 10; i++){
    console.log(i)
   }
