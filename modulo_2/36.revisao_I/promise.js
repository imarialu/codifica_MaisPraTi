const minhaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const sucesso = true;
        if(sucesso){
            resolve("Dados carregados com sucesso!");
        }else{
            reject(new Error("Falha ao carregar os dados."))
        }
    }, 3000);
});

minhaPromise.then(resultado => { // Retorna caso sucesso
    console.log(resultado); 
}).catch(error => { // Retorna caso falhe
    console.error("Erro: ", error); 
}).finally(() => { // Rerona independente do resultado
    console.log("Operação concluída."); 
})