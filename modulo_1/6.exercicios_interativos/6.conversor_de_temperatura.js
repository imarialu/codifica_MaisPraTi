// Escrevaum algoritmo que leia uma temperatura em graus Celsius e devolva em Fahrenheit

const prompt = require('prompt-sync')();

let temperatura = Number(prompt("Informe a temperatura em graus Celsius: "));

let fahrenheit = (temperatura * 9 / 5) + 32;

console.log("A temperatura em Fahrenheit é: ", fahrenheit);