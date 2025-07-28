// Crie uma função que soma os elementos de um Array e retorna esse valor

function somaArray(arr){
    return arr.reduce((acumulador, valor) => acumulador + valor);
}

console.log("A soma da primeira lista é: ", somaArray([2, 5, 8]));

// OU

function somaArray2(arr){
    let soma = 0;

    for(let i = 0; i < arr.length; i++){
        soma += arr[i];
    }

    return soma;
}

console.log("A soma da segunda lista é: ", somaArray2([5, 15, 10]));