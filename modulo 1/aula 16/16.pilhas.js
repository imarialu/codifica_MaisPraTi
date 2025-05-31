// As pilhas armazenam elementos de forma sequencial, seguindo o princípio LIFO (Last-In, First-Out), onde o último elemento inserido é o primeiro a ser removido. 

// Exemplo 
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
    }

    // Adiciona elementos a pilha
    push(value){
        let newNode = new Node(value); // Cria um novo elemento (ex: 10)
        newNode.next = this.top; // O próximo do novo elemento se torna o topo (nulo)
        this.top = newNode; // O topo se torna o novo elemento (10)
    }

    // Desempilha a pilha
    pop(){
        if(!this.top) return null; // Se não houver topo retorna nulo
        let poppedValue = this.top.value; // Desempilha o valor do topo 
        this.top = this.top.next; // O topo se torna o próximo do topo (ex: 11)
        return poppedValue; // Retorna o valor do topo (11)
    }

    // Retorna o valor do topo da pilha
    peek(){
        if(!this.top) return null;
        return this.top.value;
    }

    // Informa se a pilha está vazia
    isEmpty(){
        return this.top === null;
    }
}