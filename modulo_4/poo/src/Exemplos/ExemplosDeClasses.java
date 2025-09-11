package Exemplos;

public class ExemplosDeClasses {
    // Pode ser usada sem ser instanciada
    public static class ClasseEstatica{
        public static void  mostrarMensagem(){
            System.out.println("Mensagem da Classe Estatica");
        }
    }

    // Tem acesso a outros membros
    public class ClasseInterna {
        public void  mostrarMensagem(){
            System.out.println("Mensagem interna.");
        }
    }

    // A classe só pode ser instanciada dentro do contexto do método
    public void exemploClasseLocal(){
        class ClasseLocal{
            public void  mostrarMensagem(){
                System.out.println("Mensagem da Classe Local.");
            }
        }

        ClasseLocal classeLocal = new ClasseLocal();
        classeLocal.mostrarMensagem();
    }

    // Não pode ser instanciada diretamente, mas sim herdada
    public abstract static class ClasseAbstrata{
        public abstract void mostrarMensagem();
    }

    // Filha da classe abstrata utilizando o seu método
    public static class SubClasseAbstrata extends ClasseAbstrata{
        @Override
        public void mostrarMensagem(){
            System.out.println("Mensagem da SubClasse Abstrata");
        }
    }

    // Impõe que a ClasseSelada seja herdada apenas pela SubClasseSelada
    public sealed class ClasseSelada permits SubClasseSelada {
        public void mostratMensagem(){
            System.out.println("Mensagem da Classe Selada");
        }
    }

    public final class SubClasseSelada extends ClasseSelada {
        @Override
        public void mostratMensagem(){
            System.out.println("Mensagem da SubClasse Selada");
        }
    }

    // Usada para representar dados que são imutáveis
    public record ClasseRecord(String nome){}

    public static void main(String[] args){
        ClasseEstatica.mostrarMensagem();

        SubClasseAbstrata c1 = new SubClasseAbstrata();
        c1.mostrarMensagem();

        ClasseRecord c2 = new ClasseRecord("Jade");
        System.out.println(c2.nome);
    }

}
