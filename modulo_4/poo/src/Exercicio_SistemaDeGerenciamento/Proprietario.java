package Exercicio_SistemaDeGerenciamento;

import java.util.ArrayList;
import java.util.List;

public class Proprietario {
    private String nome;
    private String endereco;
    private List<Veiculo> veiculos;

    Proprietario(String nome, String endereco){
        this.nome = nome;
        this.endereco = endereco;
        this.veiculos = new ArrayList<>();
    }

    public void adicionarVeiculo(Veiculo veiculo){
        this.veiculos.add(veiculo);
    }

    public void exibirVeiculo(){
        System.out.println("Proprietário: " + this.nome);
        System.out.println("Endereço: " + this.endereco);
        for (Veiculo veiculo : this.veiculos){
            veiculo.exibir();
            veiculo.tipoDeVeiculo();
            System.out.println();
        }
    }
}
