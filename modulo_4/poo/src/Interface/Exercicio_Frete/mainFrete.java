package Interface.Exercicio_Frete;

import java.math.BigDecimal;

public class mainFrete {
    public static void main(String[] args) throws IllegalAccessException {
        var pedido = new Pedido(new BigDecimal("4.5"), new BigDecimal("100"));

        var padrao = Frete.of("padrao");
        var expresso = Frete.of("expresso");

        System.out.println("Padrão: R$" + padrao.calcular(pedido));
        System.out.println("Expresso: R$" + expresso.calcular(pedido));
    }
}
