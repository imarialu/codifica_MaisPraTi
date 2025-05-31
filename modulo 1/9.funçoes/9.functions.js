// ** Função - Retorna um valor
// function RetornaParOuImpar(valor){
//     let  resultado 
    
//     if(valor % 2 === 0){
//         resultado = "PAR";   
//     }else{
//         resultado = "IMPAR";
//     }  

//     return resultado;
// }

// ** Procedimento - Não retorna nenhum valor
// function RetornaParOuImpar(valor){
//     let  resultado 
    
//     if(valor % 2 === 0){
//         resultado = "PAR";   
//     }else{
//         resultado = "IMPAR";
//     }  

//     console.log(resultado);
// }

// ** Segundo exemplo
// function calculaArea(altura, largura){
//     return altura * largura;
// }

// console.log(calculaArea(10, 10));


// ** Função anônima

// let exibeNome = function(nome){ 
//     console.log(nome);
// }

// let exibeNome1 = (nome) => console.log(nome); // ARROW FUNCTION

// exibeNome('Maria');
// exibeNome1('Jade');

// ** Callbacks são funções que são passadas por parâmetros para outras funções

// Exemplo:

let sucesso = () => console.log('Requisição foi um sucesso');
let erro = () => console.log('Requisição deu errado');

function requisicao(sucesso, erro){
    if(true){ // Se true: sucesso, se false: erro
        sucesso();
    }else{
        erro();
    }
}

requisicao(sucesso, erro);








