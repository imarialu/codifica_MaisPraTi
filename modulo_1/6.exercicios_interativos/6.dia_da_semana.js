// Faça um programa que leia o dia da semana em texto. Se for Sábado ou Domingo, imprimir "Final de semana", senão imprimir "Dia útil."

const prompt = require('prompt-sync')();

let diaSemana = prompt("Informe o dia da semana em forma de texto: ");

switch(diaSemana){
    case 'Sabado':
        console.log("Final de semana");
        break
    case 'Domingo':
        console.log("Final de semana");
        break
    default:
        console.log("Dia útil")
        break
}