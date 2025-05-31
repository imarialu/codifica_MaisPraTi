let livraria = [
    {titulo: "Jogos Vorazes", autor: "Suzane Collins", ano: 2010},
    {titulo: "Tudo é rio", autor: "Carla Madeira", ano: 2015},
    {titulo: "Daisy Jones and The six", autor: "Taylor Jenkins Reid", ano: 2010},
    {titulo: "Um homem chamado Ove", autor: "fredrik Backman", ano: 2012},
    {titulo: "A pequena coreografia do adeus", autor: "Aline Bei", ano: 2014}
]

// Informa os livros publicados antes de 2015
// for(let livro of livraria){ 
//     if(livro.ano < 2015){
//         console.log(livro);
//     }
// }

let filmes = [
    {titulo: "O diário de uma paixão", genero: "De chorar"},
    {titulo: "Sinners", genero: "Drama"},
    {titulo: "Aristogatas", genero: "Comédia, animação"},
    {titulo: "Ilha dos cachorros", genero: "Drama"},
    {titulo: "Jogos Vorazes", genero: "Ação"},
    {titulo: "Notting Hill", genero: "Romance"},
    {titulo: "Robô Selvagem", genero: "Ficção Cientifica"},
    {titulo: "Challengers", genero: "Romance"},
]


let contagemFilmes = {}; // Objeto vazio
// Verifica se existe genero, se encontrar ele irá somar, senão ele criará um novo
filmes.forEach((filme) => {
    if(contagemFilmes[filme.genero]){
        contagemFilmes[filme.genero]++;
    }else{
        contagemFilmes[filme.genero] = 1;
    }
})

console.log(contagemFilmes);
