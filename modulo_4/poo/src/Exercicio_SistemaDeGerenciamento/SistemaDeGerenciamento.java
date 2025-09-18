package Exercicio_SistemaDeGerenciamento;

public class SistemaDeGerenciamento {
    public static void main(String[] args){
        Veiculo carro = new Carro("Jeep", "Renegade", 2019);
        Veiculo moto = new Moto("Yamaha", "R1", 2020);

        Proprietario proprietario = new Proprietario("Maria", "Logo ali");

        proprietario.adicionarVeiculo(carro);
        proprietario.adicionarVeiculo(moto);

        proprietario.exibirVeiculo();

        Servico servico = new Servico("Troca de óleo", 100.00);
        Servico servico2 = new Servico("Troca de pivô", 300.00);

        Oficina oficina = new Oficina();

        oficina.adicionarServico(servico);
        oficina.adicionarServico(servico2);

        oficina.listarServicos();
    }
}
