// Captura os elementos pelo ID
const formAdicionar = document.getElementById('form-adicionar');
const inputItem = document.getElementById('input-item');
const listaItens = document.getElementById('lista-itens');
const btnLimpar = document.getElementById('btn-limpar');

// Array vazio
let itens = [];

// Quando a janela for recarregada
window.addEventListener('DOMContentLoaded', () => {
    const dados = localStorage.getItem('listaCompras'); // Verifica se no LocalStorage tem dados
    // Caso tenha dados
    if(dados){
        itens = JSON.parse(dados); // O array de itens recebe o JSON - transforma em objeto JS
        renderizarLista();
    }
})

function salvarDados(){
    // O LocalStorage armazena informações do lado do cliente
    localStorage.setItem('listaCompras', JSON.stringify(itens)); // Armazena a string no array
}

function renderizarLista(){
    let exibicao = [...itens];

    listaItens.innerHTML = ''; 
    exibicao.forEach((item, index) => { // Para cada item no array
        const li = document.createElement('li'); // Cria uma li 

        const span = document.createElement('span'); // Cria o texto (o conteudo) da li
        span.textContent = item;

        const btnRemover = document.createElement('button'); // Cria o botão para remover
        btnRemover.textContent = "X"; // Conteudo textual do botão
        btnRemover.title = "Remover item"; 
        btnRemover.id = "remover";

        // Quando o botão for clicado, chama a função removerItem e deleta o item pelo index
        btnRemover.addEventListener('click', () => {
            removerItem(index);
        });

        // Renderiza dentro da tag li o span e o botão de remover
        li.append(span, btnRemover);
        listaItens.appendChild(li); // adiciona a li como filho em listaItens
        
    })
}

// Será executado sempre que o formulário for enviado (botão clicado)
formAdicionar.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que a página seja recarregada
    const novoItem = inputItem.value.trim(); // novoItem recebe o valor inserido no inputItem
    
    // Se não existir itens
    if(!novoItem) return 

    itens.push(novoItem) // Adiciona o novo item na lista vazia
    salvarDados()
    renderizarLista()

    inputItem.value = ''; // Limpa o input após o valor ser inserido na lista
}); 


function removerItem(indice){
    itens.splice(indice, 1); // Detela pelo indice, um elemento
    salvarDados(); // Salva os dados sem o elemento removido
    renderizarLista(); // Renderiza a lista novamente
}

btnLimpar.addEventListener('click', () => {
    // Caso a resposta seja sim
    if(confirm('Deseja limpar toda a lista?')){
        itens = []; // Esvazia a lista
        salvarDados(); // Salva a lista vazia
        renderizarLista(); // Renderiza a lista vazia
    }
})
