// Implemente um sistema de vendas de ingressos para um evento.
// Crie uma classe Evento que tenha um número limitado de ingressos.
// Quando um ingresso for comprado, o número de ingressos disponíveis deve ser decrementado.
// Caso o número de ingressos disponíveis seja insuficiente para uma nova compra, lance uma exceção personalizada chamada IngressosIndisponiveisException.
// Além disso, se um usuário tentar comprar um número de ingressos maior que o permitido (máximo de 10 ingressos por compra),
// lance uma exceção personalizada chamada LimiteCompraExcedidoException.

package TratamentoDeErros.Desafio;

public class Evento {
    private int ingressosDisponiveis;
    private final int limiteCompra = 10;

    public Evento(int ingressosIniciais){
        this.ingressosDisponiveis = ingressosIniciais;
    }

    public void comprarIngresso(int quantidade) throws LimiteDeCompraExcedidoException, ingressosDisponiveisException{

        if (quantidade > limiteCompra){
            throw new LimiteDeCompraExcedidoException("Você não pode comprar mais de 10 ingressos.");
        }

        if (quantidade > this.ingressosDisponiveis){
            throw new ingressosDisponiveisException("Não há ingressos disponíveis.");
        }

        this.ingressosDisponiveis -= quantidade;
        System.out.println("Compra realizada com sucesso! Ingressos disponíveis: " + this.ingressosDisponiveis);
    }
}
