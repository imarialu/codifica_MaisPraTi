const prompt = require('prompt-sync')();

let ano = Number(prompt("Insira o ano desejado: "));

if((ano % 4 === 0) && (ano % 100 !== 0)){
    console.log("Esse ano é bissexto!")
}else{
    console.log("Esse ano não é bissexto!")
}