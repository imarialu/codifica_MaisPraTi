// Pesquisa binária
function binarySearch(arr, target){
    let left = 0; // Representa o primeiro elemento
    let right = arr.length - 1; // Representa o último elemento

    while(left <= right){
        let mid = Math.floor((left + right) / 2); // Divide o tamanho da array no meio

        // Se o valor procurado for igual ao meio, retorna a posição do valor
        if(arr[mid] === target){
            return mid;
        // Se o valor do meio for menor que o alvo, descarta a esquerda e continua andando até encontrar
        }else if(arr[mid] < target){
            left = mid + 1;
        // Se o valor do meio for maior que o alvo, descarta a direita e continua andando até encontrar
        }else{
            right = mid - 1;
        }
    }

    return -1;
}

let numeros = [1, 3, 5, 7, 9, 10, 12, 13, 16, 20];

console.log(binarySearch(numeros, 16));