// As filas (ou queues) são estruturas de dados que seguem o princípio FIFO (First In, First Out), onde o primeiro elemento a ser inserido é o primeiro a ser retirado. 

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(value){
        let newNode = new Node(value); // Cria um novo valor
        // Se existir um último elemento, adiciona o novo elemento depois dele
        if(this.rear){
            this.rear.next = newNode;
        }

        this.rear = newNode; // O último elemento se torna o novo elemento

        // Se não houver um primeiro elemento (nenhum), adiciona o novo elemento como primeiro (único)
        if(!this.front){
            this.front = newNode;
        }

        this.size++; // Itera a fila
    }
}

