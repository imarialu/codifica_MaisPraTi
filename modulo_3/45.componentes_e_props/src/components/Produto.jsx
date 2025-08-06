// Crie um componente que exibe as informações de um produto. 
// O componente pai (App) vai passar os dados do produto (nome, preço e descrição) como props para o componente filho (Produto), 
// e o componente filho vai exibir essas informações.

function Produto(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.price}</p>
            <p>{props.description}</p>
        </div>
    )
}

function App(){
    const product = {
        name: "Crespo + Power - Apise",
        price: "52,00",
        description: "Melhor creme de pentear do mundo"
    }

    return(
        <Produto name={product.name} price={product.price} description={product.description}/>
    )
}

export default App