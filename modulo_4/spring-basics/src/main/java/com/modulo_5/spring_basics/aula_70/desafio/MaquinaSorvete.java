package com.modulo_5.spring_basics.aula_70.desafio;

// Construir uma mini-aplicação que imprime o sabor do sorvete servido por uma máquina.
// Você fará Parte A (sem IoC) e Parte B (com IoC/Spring), trocando a implementação no meio para ver o impacto.


// Parte A - sem IoC
interface Sabor{
    String nome();
}

class SaborBaunilha implements Sabor{
    public String nome(){
        return "Baunilha";
    }
}

class SaborMorango implements Sabor{
    public String nome(){
        return "Morango";
    }
}

public class MaquinaSorvete {
    private final Sabor sabor;

    public MaquinaSorvete(Sabor sabor){
        this.sabor = sabor;
    }

    public String servir(){
        return "Servindo sorvete de: " + sabor.nome();
    }
}
