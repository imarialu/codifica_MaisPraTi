package Threads;

public class ExemploConcorrencia {
    public static void main(String[] args) {
        Thread t1 = new Thread(() -> {
            for(int i = 0; i < 5; i++){
                System.out.println("Tarefa 1 - Passo " + i);
                try {
                    Thread.sleep(1000);
                }catch (InterruptedException e){
                    Thread.currentThread().interrupt();
                }
            }
        });

        Thread t2 = new Thread(() -> {
            for(int i = 0; i < 5; i++){
                System.out.println("Tarefa 2 - Passo " + i);
                try {
                    Thread.sleep(1000);
                }catch (InterruptedException e){
                    Thread.currentThread().interrupt();
                }
            }
        });

        t1.start();
        t2.start();
    }
}
