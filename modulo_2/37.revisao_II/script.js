// Insere o valor pressionado na tela da calculadora
function inserir(valor){
    let tela = document.formulario.tela;
    // Limita a quantidade de caracteres inseridos
    if(tela.value.length < 12){
        // Verifica se o valor é um operador e se o último caractere também é um operador
        // Caso seja, impede a inserção
        if(isOperador(valor) && isOperador(tela.value.length - 1)){
            return;
        }
    }

    // Caso seja um valor válido, é inserido ao final do valor atual
    tela.value += valor;
}

// Limpa a tela da calculadora por completo
function limpar(){
    document.formulario.tela.value = '';
}

// Remove o último elemento inserido na calculadora
function deletar(){
    let tela = document.formulario.tela;
    tela.value = tela.value.slice(0, -1);
}

function calcular(){
    let tela = document.formulario.tela;

    // Salva a expressão atual da tela em uma constante
    const expressao = tela.value;
    
    // Verifica se a expressão está vazia e se o último elemento é um operador
    if(expressao && !isOperador(expressao[expressao.length - 1])){
        try{
            let resultado = calcularExpressao(expressao); // Tenta realizar o calculo chamando a função calcularExpressão
            tela.value = resultado; // Imprime o resultado na tela
            console.log(resultado)
        }catch(error){
            alert("Expressão inválida.");
            limpar();
        }
    }
}

// Verifica se o caracterer é um operador
function isOperador(char){
    return ['+', '-', '*', '/'].includes(char);
}

// Avalia a expressão e retorna o resultado
function calcularExpressao(expressao){
    return eval(expressao); // Executa a expressão passada como uma string e retorna o valor calculado
    // O eval interpreta tudo como uma string
}

