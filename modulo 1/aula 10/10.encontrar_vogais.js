// Encontre o números de vogais de uma String

function encontraVogais(str){
    let vogais = str.match(/[aeiou]/gi); // match verifica se a string corresponde com algum dos valores passados 
    return vogais ? vogais.length : 0; // Se vogais for verdadeiro, retorna a quantidade, senão retorna 0
}

console.log(encontraVogais("Maria Luiza"));