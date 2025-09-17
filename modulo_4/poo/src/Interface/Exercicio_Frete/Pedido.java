package Interface.Exercicio_Frete;

import java.math.BigDecimal;
import java.util.Objects;

public record Pedido(BigDecimal pesoKg, BigDecimal distanciaKM) {
    public Pedido {
        Objects.requireNonNull(pesoKg);
        Objects.requireNonNull(distanciaKM);

        if (pesoKg.compareTo(BigDecimal.ZERO) <= 0) {
            try {
                throw new IllegalAccessException("É necessário que o peso seja maior que zero.");
            } catch (IllegalAccessException e) {
                throw new RuntimeException(e);
            }
        }

        if (distanciaKM.compareTo(BigDecimal.ZERO) <=0){
            try {
                throw new IllegalAccessException("É necessário que a distância seja maior que zero.");
            } catch (IllegalAccessException e) {
                throw new RuntimeException(e);
            }

        };
    }
}
