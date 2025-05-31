const prompt = require('prompt-sync')();

let valor = Number(prompt("Insira o valor desejado: "));

if(valor > 1){
    console.log("O valor é positivo");
}else if(valor < 0){
    console.log("O valor é negativo");
}else{
    console.log("O valor é 0");
}