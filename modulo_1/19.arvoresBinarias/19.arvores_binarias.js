// Estrutura de dados onde cada nó pode ter no máximo dois filhos
// E os valores da esquerda são menores que os da direita

// Representa cada posição da árvore
class Node{
    constructor(value){
        this.value = value;
        this.left = null; // Ponteiro para o filho da esquerda
        this.right = null; // Ponteiro para o filho da direita
    }
}

class BinaryTree{
    constructor(){
        this.root = null; // Raiz
    }

    insert(value){
        let newNode = new Node(value); // Cria um novo nó 

        // Caso não haja raiz, o novo elemento se torna a raiz
        if(this.root === null){
            this.root = newNode;
            return
        }

        // Caso haja raiz, insere o novo elemento seguindo as condições da função insertNode
        this.insertNode(this.root, newNode);
    }

    insertNode(currentNode, newNode){ // currentNode = raiz atual

        // Se o novo nó for menor que a raiz ou nó, ele é direcionado para a esquerda
        if(newNode.value < currentNode.value){
            if(currentNode.left === null){
                currentNode.left = newNode;
            // Se a esquerda da raiz não for nulo, adiciona o novo nó depois da esquerda da raiz
            }else{
                this.insertNode(currentNode.left, newNode);
            }
        // Se o novo nó for maior ou igual a raiz ou nó, ele é direcionado para a direita
        }else{
            if(currentNode.right === null){
                currentNode.right = newNode;
            }else{
                this.insertNode(currentNode.right, newNode);
            }
        }
    }

    // Imprime em ordem crescente
    inorderTraversal(node = this.root){
        if(node != null){ // Se o nó for diferente de nulo
            this.inorderTraversal(node.left); // Chama a função passando o nó da esquerda até chegar no nulo
            console.log(node.value); // Desempinha os valores os imprimindo crescentemente, verificando até o nulo
            this.inorderTraversal(node.right); // Chama a função passando o nó da direita até chegar no nulo
        }
    }
}

let tree = new BinaryTree();

tree.insert(10);
tree.insert(5);
tree.insert(11);
tree.insert(3);
tree.insert(6);
tree.insert(10);
tree.insert(9);


tree.inorderTraversal();

