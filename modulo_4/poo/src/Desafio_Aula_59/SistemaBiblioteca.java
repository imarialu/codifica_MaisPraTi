package Desafio_Aula_59;

public class SistemaBiblioteca {
    public static void main(String[] args){
        Biblioteca biblioteca = new Biblioteca();

        Livro livro1 = new Livro("Pequena Coreografia do Adeus", "Aline Bei", 2021);
        Livro livro2 = new Livro("Antes que o café esfrie", "Toshikazu Kawaguchi", 2022);
        Livro livro3 = new Livro("A hora da estrela", "Clarice Lispector", 1977);
        Livro livro4 = new Livro("Tudo é rio", "Carla Madeira", 2014);
        Livro livro5 = new Livro("Battle Royale", "Koushun Tamaki", 2014);
        Livro livro6 = new Livro("Os sete maridos de Evelyn Hugo", "Taylor Jenkins Reid", 2019);
        Livro livro7 = new Livro("A cachorra", "Pilar Quintana", 2020);
        Livro livro8 = new Livro("Um homem chamado Ove", "Fredrik Backman", 2012);
        Livro livro9 = new Livro("Olhos d'água", "Conceição Evarito", 2014);
        Livro livro10 = new Livro("jogos Vorazes", "Suzanne Collins", 2012);

        biblioteca.adicionarLivro(livro1);
        biblioteca.adicionarLivro(livro2);
        biblioteca.adicionarLivro(livro3);
        biblioteca.adicionarLivro(livro4);
        biblioteca.adicionarLivro(livro5);
        biblioteca.adicionarLivro(livro6);
        biblioteca.adicionarLivro(livro7);
        biblioteca.adicionarLivro(livro8);
        biblioteca.adicionarLivro(livro9);
        biblioteca.adicionarLivro(livro10);

        biblioteca.alterarDisponibilidade("Tudo é rio", false);
        biblioteca.listarLivros();
    }
}

