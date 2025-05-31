// Ordene o array numeros em ordem crescente

let num = [5, 2, 9, 1, 4, 8, 3, 7, 6, 10];
let n = numeros.length;

console.log("Lista desordenada: ", num)

for(let i = 0; i < n; i++){
    for(let j = 0; j < n - i; j++){
        if(numeros[j] > numeros[j + 1]){ // Verifica se o primeiro número é maior que o seguinte
            let temp = numeros[j];       // Se sim, o número é alocado temporariamente e depois também será testado
            numeros[j] = numeros[j + 1]; // Até se formar a array com os mesmos em ordem crescente
            numeros[j + 1] = temp;
        }
    }
}

console.log("Lista em ordem crescente: ", numeros)