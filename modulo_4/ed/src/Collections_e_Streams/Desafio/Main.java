package Collections_e_Streams.Desafio;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args){
        List<Funcionario> funcionarios = Arrays.asList(
                new Funcionario("Sandra", 2800, "Atriz", 25),
                new Funcionario("Sofia", 1800, "Coordenadora", 30),
                new Funcionario("Miguel", 1550, "Estágiario", 21),
                new Funcionario("Jade", 2400, "Gerente", 26),
                new Funcionario("Ana", 1600, "Estágiaria", 18),
                new Funcionario("Solange", 3000, "Chef de cozinha", 32),
                new Funcionario("Otávio", 5000, "CEO", 45),
                new Funcionario("Milena", 6400, "Design", 29),
                new Funcionario("Thais", 2500, "Psicologa", 22),
                new Funcionario("Luan", 1500, "Desenvolvedor Júnior", 23),
                new Funcionario("Ari", 1550, "Enfermeira", 27)
        );

        // Exibe os nomes e cargos dos funcionários com mais de 30 anos
        System.out.println("Funcionários com mais de 30 anos:");
        funcionarios.stream()
                .filter(funcionario -> funcionario.getIdade() >= 30) // Filtra os funcionarios com mais de 30 anos
                .forEach(funcionario -> System.out.println("Nome: " + funcionario.getNome() + " - Cargo: " + funcionario.getCargo())); // Exibe os nomes e cargos de cada um

        System.out.println("--------------------------");

        // Ordena os funcionários por salário em ordem crescente e exibe seus nomes e salários
        System.out.println("Ordem dos funcionários de forma crescente: ");
        funcionarios.stream()
                .sorted(Comparator.comparingDouble(Funcionario::getSalrio)) // Compara os valores
                .forEach(funcionario -> System.out.println("Nome: " + funcionario.getNome() + " - Salário: " + funcionario.getSalrio()));

        System.out.println("--------------------------");

        // Calcula e exibe a média salarial dos funcionários
        System.out.println("Média salarial dos funcionários: ");
        double mediaSalarial = funcionarios.stream()
                .mapToDouble(Funcionario::getSalrio)
                .average()
                .orElse(0.0);
        System.out.println(mediaSalarial);

        System.out.println("--------------------------");

        // Exibe o total de funcionários com salário superior a R$ 4.000,00
        System.out.println("Total de funcionários com salário superior a R$ 4.000.00: ");
        long totalFunc = funcionarios.stream()
                .filter(f -> f.getSalrio() > 4000)
                .count();
        System.out.println(totalFunc);


        System.out.println("--------------------------");

        // Cria uma lista com os nomes dos funcionários e a exibe
        List<String> nomes = funcionarios.stream()
                .map(Funcionario::getNome)
                .collect(Collectors.toList());
        System.out.println("Lista com os nomes dos funcionários: ");
        nomes.forEach(System.out::println);
    }
}
