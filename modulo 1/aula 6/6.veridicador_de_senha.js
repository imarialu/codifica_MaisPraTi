// Escreva um algoritmo para repetir a leitura de uma senha até que ela seja válida. Para cada leitura da senha incorreta imprimir a mensagem "SENHA INVÁLIDA". Quando a senha for correta deve ser impressa a mensagem "ACESSO PERMITIDO" e o algoritmo encerrado. Considere que a senha correta é o valor 2807.

const prompt = require('prompt-sync')();

let senha;

do{
    senha = Number(prompt("Iforme a senha: "));

    if(senha == 2807){
        console.log("ACESSO PERMITIDO");
        break;
    }else{
        console.log("SENHA INVÁLIDA")
    }
}while(senha !== 2807)