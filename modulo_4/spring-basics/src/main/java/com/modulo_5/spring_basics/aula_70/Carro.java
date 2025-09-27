package com.modulo_5.spring_basics.aula_70;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
// Informa ao spring que quer que a classe seja tratada como componente
import org.springframework.stereotype.Component;

interface Motor {
    String tipo();
}

@Primary
@Component
class MotorGasolina implements Motor{
    public String tipo(){
        return "Motor a Gasolina.";
    }
}

@Component
class MotorEletrico implements Motor{
    public String tipo(){
        return "Motor Elétrico.";
    }
}

@Component
public class Carro{
    private final Motor motor;

    @Autowired
    public Carro(Motor motor){
        this.motor = motor;
    }

    public String tipo(){
        return "Carro com motor a gasolina.";
    }
}


