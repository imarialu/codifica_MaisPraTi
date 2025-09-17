package Interface.Notificador;

public class Alerta {
    private final EnviadorNotificacao notificador;

    public Alerta(EnviadorNotificacao notificador){
        this.notificador = notificador;
    }

    public void disparar(String destino){
        notificador.enviar(destino, "Seu relatório está pronto!");
    }

    public static void main(String[] args){
        Alerta alertaEmail = new Alerta(new EmailNotificador());
        Alerta alertaSMS = new Alerta(new SmsNotificador());
        alertaEmail.disparar("jade@melhoresdogs.com");
        alertaSMS.disparar("andre@omaislindo.com");
    }
}


