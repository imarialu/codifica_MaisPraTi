// A turma C é composta por 60 alunos, e a turma D por 20 alunos. Escreva um algoritmo que leia o percentual de alunos reprovado na turma C, o percentual de aprovados na turma D, calcule e escreva:

// a) O número de alunos reprovados da turma C.
// b) O número de alunos reprovados da turma D.
// c) A porcentagem de alunos reprovados em relação ao total de alunos das duas turmas.

const prompt = require('prompt-sync')();

let turmaC = 60;
let turmaD = 20;
let totalAlunos = turmaC + turmaD;

let reprovadosC = Number(prompt("Informe o percentual de alunos reprovados na turma C: "));
let aprovadosD = Number(prompt("Informe o percentual de alunos aprovados na turma D: "));

let qtReprovadosC = (turmaC*reprovadosC) / 100;
let qtAprovadosD = ((100 - aprovadosD) * turmaD) / 100;
let relacaoReprovadosTotal = ((qtReprovadosC + qtAprovadosD) / totalAlunos) * 100;

console.log("A quantidade de alunos reprovados na turma C é: ", qtReprovadosC);
console.log("A quantidade de alunos aprovados na turma D é: ", qtAprovadosD);
console.log("A percentual de alunos reprovados em relação ao total de alunos das duas turmas é: ", relacaoReprovadosTotal);
