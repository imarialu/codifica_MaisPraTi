package com.modulo_5.spring_basics.aula_70.desafio;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Primary
@Component
class SaborMaracuja implements Sabor{
    public String nome(){
        return "Maracujá";
    }
}

@Component
class SaborChocolate implements Sabor{
    public String nome(){
        return "Chocolate";
    }
}

@Component
public class MaquinaSorveteComIoC {
    private final Sabor sabor;

    public MaquinaSorveteComIoC(Sabor sabor){
        this.sabor = sabor;
    }

    public String servir(){
        return "Servindo sorvete de: " + sabor.nome();
    }

}
