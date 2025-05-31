// Estrutura de dados não-linear que permite modelar ramificações e escolhas.
// Composta por nós, com um nó especial chamado de raiz, e os demais nós particionados em subárvores.

class TreeNode{
    constructor(value){
        this.value = value; // Valor
        this.children = []; // Array vazio
    }

    // Recebe um valor e o adiciona à árvore
    addChild(node){
    this.children.push(node); 
    }

    // Recebe o valor que vai ser removido
    removeChild(value){
        // Filtra: para cada elemento no array verifica se o valor é diferente do valor atual
        // E depois devolve o array sem o valor removido
        this.children = this.children.filter(child => child.value != value);
    }
}

class Tree{
    constructor(rootValue){
        this.root = new TreeNode(rootValue); // Raiz da árvore (primeiro valor)
    }

    // Percorre a árvore
    traverseDFS(callback){
        function recurse(node){
            // Chama a callback (printNode), que imprime o primeiro elemento (root) e depois se repete até o nulo
            callback(node);
            // Para cada filho do nó, retorna o seu filho até o nulo
            node.children.forEach(child => recurse(child));
        }
        recurse(this.root);
    }
}

const tree = new Tree('A');

// Cria os nós
const B = new TreeNode('B');
const C = new TreeNode('C');
const D = new TreeNode('D');
const E = new TreeNode('E');
const F = new TreeNode('F');
const G = new TreeNode('G');
const H = new TreeNode('H');

// Adiciona os filhos da raiz
tree.root.addChild(B);
tree.root.addChild(C);
tree.root.addChild(D);

// Adiciona os filhos de B
B.addChild(E);
B.addChild(F);

// Adiciona o filho de C
C.addChild(G);

// Adiciona o filho de G
G.addChild(H);

function printNode(node){
    console.log(node.value);
}

tree.traverseDFS(printNode);      

