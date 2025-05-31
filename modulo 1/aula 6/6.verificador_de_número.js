// Escreva um algoritmo para repetir a leitura de um número enquanto o valor fornecido for diferente de 0. Para cada número fornecido, imprimir se ele é NEGATIVO ou POSITIVO. Quando o número 0 for fornecido a repetição deve ser encerrada sem imprimir mensagem alguma.

const prompt = require('prompt-sync')();

do{
    valor = Number(prompt("Insira o número desejado: "));

    if(numero > 0){
        console.log("Esse número é positivo!");
    }else if(valor == 0){
        break;
    }else{
        console.log("Esse número é negativo!");
    }
}while(valor !== 0)