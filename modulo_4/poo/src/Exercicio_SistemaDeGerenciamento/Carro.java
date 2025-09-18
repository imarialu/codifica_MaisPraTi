package Exercicio_SistemaDeGerenciamento;

public class Carro extends Veiculo{
    public Carro(String marca, String modelo, int ano){
        super(marca, modelo, ano);
    }

    @Override
    public void tipoDeVeiculo(){
        System.out.println("Tipo de veículo: Carro.");
    }
}

