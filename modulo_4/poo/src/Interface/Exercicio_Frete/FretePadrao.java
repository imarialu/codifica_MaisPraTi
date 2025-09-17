package Interface.Exercicio_Frete;

import java.math.BigDecimal;

public final class FretePadrao implements Frete{
    @Override
    public BigDecimal calcular(Pedido pedido){
        var total = new BigDecimal("10.00")
                .add(pedido.pesoKg().multiply(new BigDecimal("1.20")))
                .add(pedido.distanciaKM().multiply(new BigDecimal("0.10")));
        return arredonda(total);
    }
}
