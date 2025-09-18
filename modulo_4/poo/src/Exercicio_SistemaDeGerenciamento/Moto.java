package Exercicio_SistemaDeGerenciamento;

public class Moto extends Veiculo{
    public Moto(String marca, String modelo, int ano){
        super(marca, modelo, ano);
    }

    @Override
    public void tipoDeVeiculo(){
        System.out.println("Tipo de veículo: Moto.");
    }
}

