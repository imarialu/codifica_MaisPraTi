// Implemente uma function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), 
// retornando resultados instantâneos em repetidas invocações.

function memoize(fn){
    const cache = new Map(); // Armazena chaves e valores
    return function(...args){
        const key = JSON.stringify(args); 

        if(cache.has(key)){
            return cache.get(key);
        }

        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    }
}

function fibonaacci(n){
    if(n < 2) return n;
    return fibonaacci(n - 1) + fibonaacci(n - 2);
}

const fastFib = memoize(function fibonaacci(n){
    if(n < 2) return n;
    return fastFib(n - 1) + fastFib(n - 2);
});

console.log(fastFib(47));
console.log(fibonaacci(47));