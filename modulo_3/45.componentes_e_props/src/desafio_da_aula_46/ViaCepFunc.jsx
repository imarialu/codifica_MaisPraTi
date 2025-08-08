// Desenvolva um componente que consome a API viacep para buscar e exibir o endereço correspondente a um CEP recebido por prop, 
// de modo a evidenciar as fases de montagem, atualização e desmontagem.

import React, {useState, useEffect} from "react";

function ViaCepFunc({cep}){
    const [endereco, setEndereco] = useState("");
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        setCarregando(true);
        setErro(null);

        console.log("useEffect executado (montagem ou atualização do CEP)");

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => {
            if(!res.ok) throw new Error("Erro na resposta da API.")
            return res.json();
        })
        .then(data => setEndereco(data))
        .catch(err => {
            setErro(err.message)
        })
        .finally(() => setCarregando(false))
    }, [cep]);


    return(
        <div>
            <h2>Endereço:</h2>
            <p><strong>CEP: </strong> {endereco.cep}</p>
            <p><strong>Cidade: </strong>{endereco.localidade}</p>
            <p><strong>Estado: </strong>{endereco.uf}</p>
            <p><strong>Bairro: </strong>{endereco.bairro}</p>
            <p><strong>Logradouro: </strong>{endereco.logradouro}</p>
        </div>
    )
}

export default ViaCepFunc;