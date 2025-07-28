// Pareccida com a lista encadeada, porém além de possuir o valor do próximo elemento, também possui a do anterior

// Representa cada posição da lista
class Node{ 
    constructor(valor){
        this.valor = valor;
        this.anterior = null;
        this.proximo = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null; // Primeiro elemento da lista
        this.tail = null; // Último elemento da lista
        this.length = 0;
    }

    inserirInicio(v){
        let novo = new Node(v); // Cria um novo elemento
        if(!this.head){ // // Se a lista estiver vazia, o primeiro e o ultimo elemento se tornam o mesmo
            this.head = this.tail = novo;
        }else{
            novo.proximo = this.head; // Se já houver estrutura, o primeiro elemento se torna o próximo
            this.head.anterior = novo; // O elemento anterior se torna o novo
            this.head = novo; // O primeiro elemento se torna o novo
        }

        this.length++; // Cresce a lista
    }

    inserirFim(v){
        let novo = new Node(v); // Cria um novo elemento
        if(!this.head){ // Se a lista estiver vazia, o primeiro e o ultimo elemento se tornam o mesmo
            this.head = this.tail = novo;
        }else{ 
            this.tail.proximo = novo; // Se já houver estrutura, o novo elemento se torna o próximo
            novo.anterior = this.tail; // O anterior se torna o último elemento antes da inserção
            this.tail = novo; // O último elemento se torna o novo
        }

        this.length++;
    }

    inserirEm(indice, valor){
        if(indice < 0 || indice > this.length) throw RangeError("Índice está fora dos limites!");
        if(indice === 0) return this.inserirInicio(valor); // Se quiser inserir no inicio, retorna a função inserirInicio()
        if(indice === this.length) return this.inserirFim(valor); // Se quiser inserir no fim, retorna a função inserirFim()

        let atual = this.head; // Atual aponta para o proximo elemento

        // Vai rodar de acordo com o indice inserido
        for(let i = 0; i < indice; i++){ 
            atual = atual.proximo; // a cada indice inserido, atual se torna proximo desse elemneto novo
        }

        let novo = new Node(valor); // Cria um novo elemento
        let noAnterior = atual.anterior; // noAnterior aponta para o anterior de atual

        noAnterior.proximo = novo; // O proximo do anterior de atual se torna o novo elemento
        novo.anterior = noAnterior; // O anterior de novo se torna o nó anterior
        novo.proximo = atual; // O proximo de novo se torna o elemento atual
        atual.anterior = novo; // O anterior de atual se torna o novo

        this.length++; 
    }

    removerEm(indice){
        if(indice < 0 || indice > this.length) throw RangeError("Índice está fora dos limites!");

        let removido;

        if(this.length === 1){ // Se houver apenas um elemento na lista, head e tail se tornam null
            removido = this.head;
            this.head = this. tail = null;
        }else if(indice === 0){ // Se for o primeiro elemento (indice 0)
            removido = this.head; 
            this.tail = this.head.proximo; // O primeiro elemento (0) passa a ser o proximo (1) 
            this.head.anterior = null; // O anterior do primeiro elemento (agora sendo o próximo), se torna null
        }else if(indice === this.length - 1){ //  Se for o último elemento
            removido = this.tail;
            this.tail = this.tail.anterior; // O último elemento se torna o seu anterior
            this.tail.proximo = null; // O próximo de do último elemento (anterior) se torna null
        }else{
            let atual = atual.proximo; // atual aponta para o proximo elemento

            for(let i = 0; i < indice; i++){
                atual = atual.proximo;
            }

            removido = atual; // Removido vai ser o atual
            const {proximo, anterior} = atual; // O proximo e o anterior se tornam o atual
            anterior.proximo = proximo; // O proximo de anterior se torna o próximo elemento
            proximo.anterior = anterior; // O anterior de proximo se torna o elemento anterior
        }

        this.length--; // Diminui a lista
    }
}
