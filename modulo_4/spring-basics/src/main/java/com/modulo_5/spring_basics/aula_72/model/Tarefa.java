package com.modulo_5.spring_basics.aula_72.model;

public class Tarefa {
    private Long id;
    private String titulo;
    private boolean concluido;

    public Tarefa(Long id, String titulo, boolean concluido) {
        this.id = id;
        this.titulo = titulo;
        this.concluido = concluido;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public boolean isConcluido() {
        return concluido;
    }

    public void setConcluido(boolean concluido) {
        this.concluido = concluido;
    }
}
