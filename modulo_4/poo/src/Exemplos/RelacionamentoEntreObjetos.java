package Exemplos;

import java.util.ArrayList;
import java.util.List;

public class RelacionamentoEntreObjetos {
    // Associação
    static class Motorista{
        private String nome;

        public Motorista(String nome){
            this.nome = nome;
        }

        public void dirigir(Carro carro){
            System.out.println("Motorista " + nome + " dirigindo o " + carro.getModelo());
        }
    }

    static class Carro{
        private String modelo;

        public Carro(String modelo){
            this.modelo = modelo;
        }

        public String getModelo(){
            return this.modelo;
        }
    }

    // Agregação
    static class Curso{
        private String nome;
        private List<Aluno> alunos;

        public Curso(String nome){
            this.nome = nome;
            this.alunos = new ArrayList<>();
        }

        public void adicionarAluno(Aluno aluno){
            this.alunos.add(aluno);
            System.out.println(aluno.getNome() + " foi matriculado no curso de " + nome);
        }
    }

    static class Aluno{
        private String nome;

        public Aluno(String nome){
            this.nome = nome;
        }

        public String getNome() {
            return this.nome;
        }
    }

    // Composição - Onde os objetos não podem existir sem o outro
    static class Computador{
        private CPU processador;

        public Computador(String modeloCPU){
            this.processador = new CPU(modeloCPU);
        }

        public void ligar(){
            System.out.println("Ligando o computador com a CPU " + processador.getModelo());
        }
    }

    private static class CPU{
        private String modelo;

        public CPU(String modelo){
            this.modelo = modelo;
        }

        public String getModelo(){
            return this.modelo;
        }
    }

    public static void main(String[] args){
        Motorista motorista = new Motorista("Jade");
        Carro carro = new Carro("Jeep");
        motorista.dirigir(carro);

        Curso curso = new Curso("Gastronomia");
        Aluno aluno = new Aluno("Sandra");
        curso.adicionarAluno(aluno);

        Computador computador = new Computador("Intel Core 17");
        computador.ligar();
    }
}
