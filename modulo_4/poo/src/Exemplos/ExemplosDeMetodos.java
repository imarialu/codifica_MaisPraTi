package Exemplos;

public class ExemplosDeMetodos {

    // Pode ser utilizado sem instanciar a classe
    public static void metodoEstatico(){
        System.out.println("Método estático.");
    }

    // Para utlizar é necessário instanciar a classe
    public void metodoDeInstancia(){
        System.out.println("Método tradicional.");
    }

    // Onde o método deve implementado pelo classe filha
    public abstract static class ClasseComMetodoAbstrato{
        public abstract void metodoAbstrato();
    }

    public static class SubClasseComMetodoAbstrato extends ClasseComMetodoAbstrato{
        @Override
        // Implementando o método abstrato
        public void metodoAbstrato(){
            System.out.println("Método abstrato.");
        }
    }

    public static void main(String[] args){
        // Método estático
        ExemplosDeMetodos.metodoEstatico();

        // Método de instancia
        ExemplosDeMetodos metodoDeInstancia = new ExemplosDeMetodos();
        metodoDeInstancia.metodoDeInstancia();

        // Método abstrato
        ExemplosDeMetodos.SubClasseComMetodoAbstrato metodoAbstrato = new SubClasseComMetodoAbstrato();
        metodoAbstrato.metodoAbstrato();
    }
}
