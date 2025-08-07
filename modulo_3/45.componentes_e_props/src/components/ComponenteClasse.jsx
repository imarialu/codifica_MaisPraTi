import { Component } from "react";

class ComponenteClasse extends Component{
    // contrutor recebe as props passadas pelo componente pai
    constructor(props){
        super(props); // Chama o construtor da classe Component (pai)
        // O super(props) passa as props que a ComponenteClasse (filho) recebeu para o construtor da classe Component (do React)
        // O React trata e distribui essas props internamente, permitindo que o componente acesse elas via this.props
        this.state = {count: 0}; // Define o estado inicial com 'count' igual a 0
    }

    // Será chamado assim que o botão for clicado
    incrementCount = () => {
        // Atualiza o estado de 'count' somando 1 ao valor atual
        this.setState({count: this.state.count + 1});
    }

    // Define o que será exibido no DOM
    render(){
        return(
            <div>
                <p>Contagem: { this.state.count }</p>
                <button onClick={this.incrementCount}>Incrementar</button>
            </div>
        );
    }
}

export default ComponenteClasse