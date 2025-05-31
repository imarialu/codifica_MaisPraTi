// Escreva um algotitmo para ler o número de eleitores de um município, o número de votos em brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

const prompt = require('prompt-sync')();

let eleitores = Number(prompt("Informe o número de eleitores: "));
let votosEmBranco = Number(prompt("Informe o número de votos em brancos: "));
let votosNulos = Number(prompt("Informe o número de votos nulos: "));
let votosValidos = Number(prompt("Informe o número de votos válidos: "));

console.log("O percentual de votos em branco é: ", (votosEmBranco/eleitores) * 100);
console.log("O percentual de votos em branco é: ", (votosNulos/eleitores) * 100);
console.log("O percentual de votos em branco é: ", (votosValidos/eleitores) * 100);


