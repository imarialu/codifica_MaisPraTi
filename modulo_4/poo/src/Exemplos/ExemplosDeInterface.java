package Exemplos;

public class ExemplosDeInterface {

    @FunctionalInterface
    interface InterfaceFuncional{
        void executar();
    }

    interface InterfaceTradicional{
        void metodo();
        void metodo2(String mensagem);
    }

    interface InterfaceComDefault{
        void metodoObrigatorio();

        default void metodoDefault(){
            metodoObrigatorio();
        }
    }

    interface InterfaceComConstante{
        String CONSTANTE = "valor";

        void usarConstante();
    }

    interface InterfaceComStatic{
        static void metodoEstatico(){
            System.out.println("Método Estático");
        }
    }

    interface InterfaceBase{
        void metodoBase();
    }

    interface InterfaceHerdada extends InterfaceBase{
        void metodoHerdado();
    }

    public static void main(String[] args){
        InterfaceFuncional funcional = () -> System.out.println("Interface Funcional");
        funcional.executar();

        InterfaceTradicional tradicional = new InterfaceTradicional() {
            @Override
            public void metodo() {
                System.out.println("Método 1");
            }

            @Override
            public void metodo2(String mensagem) {
                System.out.println("Método 2");
            }
        };

        tradicional.metodo();
        tradicional.metodo2("Método tradicional");
    }
}
