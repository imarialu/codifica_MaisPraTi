package TratamentoDeErros.Desafio;

public class SistemaDeVendas {
    public static void main(String[] args) {
        try {
            Evento evento = new Evento(50);

            // Resulta em compra realizada com sucesso
            evento.comprarIngresso(4);
            // Resulta em erro
            evento.comprarIngresso(25);
        }catch (ingressosDisponiveisException | LimiteDeCompraExcedidoException e){
            System.out.println("Erro: " + e.getMessage());
        }

        try {
            Evento evento = new Evento(50);

            // Resulta em erro
            evento.comprarIngresso(75);
        }catch (ingressosDisponiveisException | LimiteDeCompraExcedidoException e){
            System.out.println("Erro: " + e.getMessage());
        }
    }
}
