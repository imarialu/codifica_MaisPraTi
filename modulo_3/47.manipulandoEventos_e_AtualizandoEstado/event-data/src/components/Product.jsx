import { useState } from "react";

function Product(){

    const [nomeProduto, setNomeProduto] = useState('');
    const [preco, setPreco] = useState('');
    const [categoria, setCategoria] = useState('Moda');
    const [descricao, setDescricao] = useState('');

    const [produtos, setProdutos] = useState([]);
    const [error, setError] = useState('');

    const [filtroPorCategoria, setFiltroPorCategoria] = useState('Todos');

    const alteraNome = (event) => setNomeProduto(event.target.value);
    const alteraPreco = (event) => setPreco(event.target.value);
    const alteraCategoria = (event) => setCategoria(event.target.value);
    const alteraDescricao = (event) => setDescricao(event.target.value);

    const adiocionaProduto = (event) => {
        event.preventDefault();

        if(!nomeProduto || !preco || !descricao){
            setError("Por favor, preencha todos os campos corretamente!");
            return;
        }

        if(isNaN(preco) || Number(preco) <= 0){
            setError("O preço deve ser um valor positivo.");
            return;
        }

        setError('');

        const novoProduto = {
            id: Date.now(),
            nome: nomeProduto,
            preco: parseFloat(preco).toFixed(2),
            categoria,
            descricao
        }

        setProdutos([...produtos, novoProduto]);

        setNomeProduto('');
        setPreco('');
        setDescricao('');
    }

    const removeProduto = (id) => {
        setProdutos(produtos.filter((produto) => produto.id != id));
    }

    const produtosFiltrados = produtos.filter((produto) => filtroPorCategoria === 'Todos' || produto.categoria === filtroPorCategoria);

    return(
        <div>
            <h1>Cadastre o seu produto!</h1>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={adiocionaProduto}>
                
                <label>
                    Nome do Produto:
                    <input type="text" value={nomeProduto} onChange={alteraNome}/>
                </label>
                <br/>

                <label>
                    Preço:
                    <input type="text" value={preco} onChange={alteraPreco}/>
                </label>
                <br/>

                <label>
                    Categoria:
                    <select value={categoria} onChange={alteraCategoria}>
                        <option value="Moda">Moda</option>
                        <option value="Beleza">Beleza</option>
                        <option value="Leitura">Leitura</option>
                        <option value="Eletrônicos">Eletrônicos</option>
                    </select>
                </label>
                <br/>

                <label>
                    Descrição:
                    <input type="text" value={descricao} onChange={alteraDescricao}/>
                </label>
                <br/>

                <button type="submit">Adicionar Produto</button>
            </form>

            <label >
                Filtrar por categoria:
                <select value={filtroPorCategoria} onChange={(event) => setFiltroPorCategoria(event.target.value)}>
                    <option value="Todos">Todos</option>
                    <option value="Moda">Moda</option>
                    <option value="Beleza">Beleza</option>
                    <option value="Leitura">Leitura</option>
                    <option value="Eletrônicos">Eletrônicos</option>
                </select>
            </label>

            <ul>
                {produtosFiltrados.map((produto) => (
                    <li key={produto.id}>
                        <strong>{produto.nome}</strong>
                        <br/>
                        R${produto.preco} - {produto.categoria}
                        <p>{produto.descricao}</p>

                        <button onClick={() => removeProduto(produto.id)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Product