package Exemplos;

public class ExemplosDeConstrutores {
    public ExemplosDeConstrutores(){
        System.out.println("Construtor padrão");
    }

    private int idade;
    private String nome;

    public ExemplosDeConstrutores(int idade, String nome){
        this.idade = idade;
        this.nome = nome;
        System.out.println("Construtor parametrizado. Nome: " + nome + " - Idade: " + idade);
    }

    public ExemplosDeConstrutores(String nome){
        this(19, nome);
    }

    // Cópia de outro construtor
    public ExemplosDeConstrutores(ExemplosDeConstrutores outro){
        this.nome = outro.nome;
        this.idade = outro.idade;
        System.out.println("Construtor cópia. Nome: " + nome + " - Idade: " + idade);
    }

    public static void main(String[] args){
        ExemplosDeConstrutores exemplo1 = new ExemplosDeConstrutores();
        ExemplosDeConstrutores exemplo2 = new ExemplosDeConstrutores(19, "Maria");
        ExemplosDeConstrutores exemplo3 = new ExemplosDeConstrutores( "André");
        ExemplosDeConstrutores exemplo4 = new ExemplosDeConstrutores( exemplo2);
    }
}
