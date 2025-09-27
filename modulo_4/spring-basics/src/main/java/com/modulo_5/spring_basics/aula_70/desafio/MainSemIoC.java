package com.modulo_5.spring_basics.aula_70.desafio;

// Parte A - sem IoC
public class MainSemIoC {
    public static void main(String[] args) {
        Sabor sabor = new SaborBaunilha();
        MaquinaSorvete maquina = new MaquinaSorvete(sabor);
        System.out.println(maquina.servir());
    }
}
