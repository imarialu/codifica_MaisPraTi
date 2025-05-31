// Faça uma função que retorna um array ordenado

function ordenaArray(arr){
    return arr.sort((a, b) => a - b); // Ordena que o primeiro elemento (a) seja menor que o seguinte (b)
}

console.log(ordenaArray([2, 4, 1, 3, 6, 5]));