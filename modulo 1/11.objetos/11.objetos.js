// Três perguntas:
// O que o objeto tem?
// O que o objeto faz?
// Como o objeto está?

let livro = {
    nome: 'A pequena coreografia do adeus',
    autor: 'Aline Bei',
    anoLancamentp: '2020',
    nrPaginas: 200,
    atores: ['Mãe', 'Filha'],

    mostrarCaracteristicas: function(){
        return `${this.nome} é um livro para pensar.`
    }
}

console.log(livro.mostrarCaracteristicas());


// Fabrica de objetos
function Filme(nome, diretor, ano, genero){
    return {
        nome,
        diretor, 
        ano,
        genero
    }
}

let filme1 = Filme("Diário de uma paixão", "Nick Cassavetes", 2004, "Romance");

console.log(filme1)

// for in - itera sobre indices

let loona = ["jinsoul", "hyejuu", "yeojin"];

for(let meninas in loona){
    console.log(loona[meninas]);
}

// for of - pega o valor, só trabalha quando a estrutura é iteravel

let palavra = "Snoopy";

for(let char of palavra){
    console.log(palavra);
}