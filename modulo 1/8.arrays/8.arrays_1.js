// Crie um array chamado "numeros" contendo 10 valores numéricos.
// Use métodos de array para calcular:
// A soma de todos os elementos e a média deles.

// Gere um novo array chamado "pares" que contenha apenas os números pares de números
// Imprima no console: 
// O array original "numeors", a soma, a média e o array "pares"

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Primeira maneira de se fazer:

// let soma = 0;
// let media = 0;
// let pares = [];

// for(i = 0; i < numeros.length; i++){
//    soma += numeros[i];
//    if(numeros[i] % 2 === 0){
//        pares.push(numeros[i]); // Adiciona os números pares na array
//    }
// }

// Segunda mandeira (menos código):

let soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0); // Reduz uma array em um único valor com base nos parâmentros
let pares = numeros.filter((num => num % 2 === 0)); // Retorna uma array com o que foi filtrado

media = soma/numeros.length;

console.log("A soma dos números é: ", soma);
console.log("A média dos números é: ", media);
console.log("Os números pares na array são: ", pares);

