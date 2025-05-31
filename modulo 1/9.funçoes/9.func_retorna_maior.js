// Faça uma função que retorne o maior número em um Array

function maiorValor(arr){
    let maior = arr[0]; 

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > maior){ // Testa um por um até achar o maior
            maior = arr[i];
        }
    }
    console.log(maior);
}

maiorValor([1, 100, 6, 55, 265, 3]);