// Recursividade - onde uma função chama a si mesma.

// Exemplo - Pilha de chamadas
// Empilha 5 funções e quando chegar na condição base, começa a desempilhar e o último processamento que entrou foi o primeiro a sair
function fatorial(n){
    if(n === 0){
        return 1;
    }else{
        return n * fatorial(n - 1);
    }
}

console.log("Fatorial: ", fatorial(6));


// Soma dos números de 1 até N
function soma(n){
    if(n === 1){
        return 1;
    }else{
        return n + soma(n - 1);
    }
}

console.log("Soma: ", soma(5));

// Fibonacci

function fibo(n){
    if(n === 0){
        return 0;
    }else if(n === 1){
        return 1;
    }else{
        return fibo(n - 1) + fibo(n - 2);
    }
}

// Retorna o número que está na posição do parâmentro
console.log("Fibonacci: ", fibo(8));

let categorias = [
    {
        id: 1, 
        nome: "Eletrônicos",
        filhos: [
            {id: 2, nome: "Celulares", filhos: []},
            {id: 3, nome: "Computadores", filhos: [
                {id: 4, nome: "Tablets", filhos: []}
            ]},

        ]
    },
    {
        id: 5,
        nome: "Louças",
        filhos: []
    }
]
// Imprime as categorias e seus  filhos com espaço no inicio
function imprimeCategorias(lista, nivel = 0){
    for(let categoria of lista){
        console.log(" ".repeat(nivel * 2) + categoria.nome);
        if(categoria.filhos.length > 0){
            imprimeCategorias(categoria.filhos, nivel + 1);
        }
    }
}

console.log(imprimeCategorias(categorias));