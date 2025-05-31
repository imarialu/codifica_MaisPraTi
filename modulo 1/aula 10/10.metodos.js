let nome = 'Maria Luiza';

console.log(nome.length); // Retorna a quantidade de caracter 
console.log(nome.charAt(0)); // Retorna o caracter da posição solicitada
console.log(nome.indexOf('L')); // Retorna a posição do caracter solicitado
console.log(nome.replace('Maria', 'Ana')); // Troca o Maria por Ana
console.log(nome.substr(6, 5)); // Extrai uma parte da string - A partir da posição 6, conte mais 5
console.log(nome.toUpperCase()); // Transforma tudo em maiusculo
console.log(nome.toLowerCase()); // Transforma tudo em minusculo
console.log("     Maria".trim()); // Elimina o espaço em branco

console.log(Math.ceil(100.2)); // Arredonda para cima
console.log(Math.floor(100.2)); // Arredonda para baixo
console.log(Math.round(100.2)); // Joga para o inteiro mais proximo

console.log(Math.sqrt(81)); // Raiz quadrada
console.log(Math.cbrt(81)); // Raiz cubica
console.log(Math.pow(9, 2)); // Potencia
console.log(Math.abs(-100.2)); // Número absoluto

// Datas
console.log(date.getDate()); // Retorna o dia
console.log(date.getMonth() + 1); // Retorna o mês, inicia do 0
console.log(date.getFullYear); // Retorna o ano
console.log(date.toString); // Retorna a data em texto

let date = new Date(2015, 7, 7);
let date1 = new Date(2025, 7, 7);