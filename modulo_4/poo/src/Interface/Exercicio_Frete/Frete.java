// Implemente um cálculo de frete para dois tipos: padrão e expresso.
//
// O usuário informa peso (kg) e distância (km).
//
//        - Cada tipo tem uma fórmula própria.
//
//        - Use uma interface Frete com:
//
//        - BigDecimal calcular(Interface.Exercicio_Frete.Pedido p)
//
// default BigDecimal arredonda(BigDecimal v) (2 casas, HALF_UP)
//
//        - static InterfaceExamples.Frete of(String tipo) que retorna a implementação correta ("padrao" ou "expresso")
//
// Padrão: base R$10, + R$1,20 por kg, + R$0,10 por km

// Expresso: base R$20, + R$1,80 por kg, + R$0,15 por km

package Interface.Exercicio_Frete;

import java.math.BigDecimal;

public interface Frete {
    BigDecimal calcular(Pedido p);

    default BigDecimal arredonda(BigDecimal valor){
        return valor.setScale(2, BigDecimal.ROUND_HALF_UP);
    }

    static Frete of(String tipo) throws IllegalAccessException {
        return switch (tipo.toLowerCase()){
            case "padrao" -> new FretePadrao();
            case "expresso" -> new FreteExpresso();
            default -> throw new IllegalAccessException("Tipo inválido.");
        };
    }
}
