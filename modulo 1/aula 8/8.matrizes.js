let matriz = [];
let soma = 0

// Cria uma matriz com 3 colunas e 3 linhas, todas preenchidas com 10
for(let i = 0; i < 3; i++){
    matriz[i] = [];

    for(let j = 0; j < 3; j++){
        matriz[i][j] = 10;
        if(i == j){ // Calcula a diagonal
            soma += matriz[i][j];
        }
    }
}

console.log(matriz);
console.log("A soma da diagonal da matriz é: ", soma);