// Gerar um número aleatório entre dois valores

function gerarNumero(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(gerarNumero(1, 6));