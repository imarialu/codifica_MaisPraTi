const prompt = require('prompt-sync')();

resposta = null;
let contador = 0;
let soma = 0;

while(resposta != 0){ 
    resposta = Number(prompt("Insira o número desejado ou 0 para calcular a média: "));

    soma += resposta; // Contabiliza a quantidade de números digitados no prompt
    contador ++; // Incrementa o valor a cada número digitado
}

let mediaFional = soma/(contador-1); // Divide o valor pela quantidade de números menos o último (0)
console.log(`A média final é: ${mediaFional}`);
