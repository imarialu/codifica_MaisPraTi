const prompt = require('prompt-sync')();

let idade = Number(prompt("Insira a sua idade atual: "));

if(idade <= 12){
    idade = 'crianca';
}else if(idade > 12 && idade <= 18){
    idade = 'adolescente';
}else if(idade > 18 && idade <= 60){
    idade = 'adulto';
}else{
    idade = 'idoso';
}

switch(idade){
    case 'crianca':
        console.log("Você é uma criança!");
        break
    case 'adolescente':
        console.log("Você é um adolescente!");
        break
    case 'adulto': 
        console.log("Você é um adulto!");
        break
    case 'idoso':
        console.log("Você é idoso!");
        break
    default:
        console.log("Idade inválida");
        break
}