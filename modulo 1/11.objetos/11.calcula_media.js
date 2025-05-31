// Calcule as médias das notas dos alunos de um professor e digam se a turma dele está na média.

let professor = {
    nome: "Daiane",
    materia: "Matemática",
    notas: {
        aluno1: [10, 5],
        aluno2: [10, 7]
    }
}

let somaNotas = 0;
let numeroAlunos = 0;

for(let aluno in professor.notas){
    somaNotas += Array.isArray(professor.notas[aluno]) ? professor.notas[aluno].reduce((acc, nota) => acc + nota, 0) / professor.notas[aluno].length : professor.notas[aluno];

    numeroAlunos++;
}

let media = somaNotas/numeroAlunos;

if(media >= 6){
    console.log(`A média da turma é ${media} e está acima do padrão.`);
}else{
    console.log(`A média da turma é ${media} e está abaixo do padrão.`);
}