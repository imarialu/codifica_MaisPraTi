const prompt = require('prompt-sync')(); // requisitando a bibliotea prompt-sync

let valor1 = Number(prompt("Insira o primeiro valor: "));
let valor2 = Number(prompt("Insira o segundo valor: "));
let op = prompt("Informe a operação desejada: (+, -, /, *): ");
let resultado = 0

if(op === '+'){
    resultado = valor1 + valor2;
}else if(op === '-'){
    resultado = valor1 - valor2;
}else if(op === '*'){
    resultado = valor1 * valor2;
}else if(op === '/'){
    if(valor2 !== 0){
        resultado = valor1/valor2;
    }else{
        console.log("Erro: divisão por zero");
        resultado = undefined;
    }
}else{
    console.log("Operação inválida");
    resultado = undefined;
}

if(resultado !== undefined){
    console.log("Resultado: ", resultado);
}