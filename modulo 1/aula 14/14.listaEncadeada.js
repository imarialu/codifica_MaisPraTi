/* listas linear e dinâmicas, composta por nós, onde cada nó contém:
   Valor: valor ou informação a ser armazenado
   Próximo: uma referência para o próximo nó na sequência
*/

// Representa cada posição da lista
class Node{ 
    constructor(valor){
        this.valor = valor;
        this.proximo = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null; // Primeiro elemento da lista
    }

    inserirInicio(v){
        let novo = new Node(v); // Cria um novo elemento
        novo.proximo = this.head; // Proximo recebe o valor do head
        this.head = novo; // head se torna o novo valor
        /* Ex: Cria o número 10, então próximo se torna null e após head se torna 10.
           Em seguida cria 9, então próximo se torna 10 e head se torna 9 (9, 10) */
    }

    imprimir(){
        let atual = this.head; // atual recebe head (9)
        let str = ""; // string vazia
        while(atual){ // Enquanto atual existir
            str += atual.valor + " --> "; // Inclui a seta após o valor de atual (9) 
            atual = atual.proximo; // atual se torna proximo (10) e o loop se repete até o valor de atual for null
        } 
        // Quando o loop acabar, inclui null ao final (9 --> 10 --> null)
        str += 'null'; 
        console.log(str);
    }
}

let lista = new LinkedList(); // Instacia a class

lista.inserirInicio(10);
lista.inserirInicio(9);

lista.imprimir();