package Desafio_Aula_59;

// Crie um sistema simples de biblioteca utilizando conceitos básicos de classes em Java.
// O sistema deve ser composto por uma classe que represente um livro e uma classe para a biblioteca.

// A classe ExercicioBiblioteca.Livro deve ter os atributos título, autor, ano de publicação e disponibilidade (se o livro está disponível ou emprestado).
// Além disso, ela deve permitir a alteração da disponibilidade e a exibição das informações do livro.

// A classe ExercicioBiblioteca.Biblioteca deve conter um conjunto de livros e permitir adicionar novos livros, além de listar todos os livros cadastrados.
// O sistema deve possibilitar também a alteração da disponibilidade de um livro.

// Implemente uma classe principal para testar a funcionalidade do sistema, criando instâncias de livros e de uma biblioteca, e alterando as disponibilidades dos livros.

import java.util.ArrayList;
import java.util.List;

public class Biblioteca {
    // Lista de livros
    private List<Livro> livros = new ArrayList<>();

    public Biblioteca(){
        // Cria uma lista vazia de livros
        this.livros = new ArrayList<>();
    }

    // Método de adicionar livro na lista
    public void adicionarLivro(Livro livro){
        this.livros.add(livro);
    }

    // Método de listar livros
    public void listarLivros(){
        // Verifica se a lista está vazia
        if(this.livros.isEmpty()){
            System.out.println("Não há livros na Biblioteca.");
        }else{
            // Chama o método de exibir livro para cada livro na lista
            for(Livro livro : this.livros){
                livro.exibirInfoLivro();
            }
        }
    }

    public void alterarDisponibilidade(String titulo, boolean disponibilidade){

        for(Livro livro : this.livros){
            // Verifica se o titulo indicado é encontrado
            if(livro.getTitulo().equals(titulo)){
                // Se o título for encontrado, modifica a disponibilidade de acordo com o indicado
                livro.setDisponibilidade(disponibilidade);
                System.out.println("Disponibilidade do livro: " + livro.getTitulo() + " foi alterada para " + ((disponibilidade) ? "disponivel" : "emprestado"));
            }
        }

        System.out.println("Livro não encontrado.");
        System.out.println(" ");
    }
}

