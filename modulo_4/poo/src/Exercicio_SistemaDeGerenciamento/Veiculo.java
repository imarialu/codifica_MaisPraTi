//Implemente um sistema de gerenciamento de veículos e seus proprietários.
// O sistema deve utilizar os conceitos de associação, agregação, composição, herança e polimorfismo.

//O sistema deve ter uma classe abstrata chamada Veiculo, com atributos básicos como marca, modelo e ano, e um método para exibir essas informações.
// Além disso, o método tipoDeVeiculo() deverá ser implementado nas subclasses Carro e Moto, que devem herdar de Veiculo.
// Cada tipo de veículo deve exibir seu tipo específico.

//Crie uma classe Proprietario, que possui informações como nome e endereço, e que pode ter múltiplos veículos associados a ele.
// A relação entre proprietário e veículos deve ser uma associação.

//Implemente uma classe Servico, que tem informações sobre a descrição e o preço dos serviços realizados,
// e uma classe Oficina, que é responsável por adicionar e listar serviços realizados.

//Entre as classes, estabeleça as relações necessárias, como agregação entre oficina e serviços e associação entre proprietário e veículos.
// Utilize herança e polimorfismo para organizar e expandir o sistema de forma eficiente.

package Exercicio_SistemaDeGerenciamento;

public abstract class Veiculo {
    protected String marca;
    protected String modelo;
    protected int ano;

    public Veiculo(String marca, String modelo, int ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    public void exibir(){
        System.out.println("Marca do veículo: " + marca);
        System.out.println("Modelo do veículo: " + modelo);
        System.out.println("Ano do veículo: " + ano);
    }

    public abstract void tipoDeVeiculo();
}
