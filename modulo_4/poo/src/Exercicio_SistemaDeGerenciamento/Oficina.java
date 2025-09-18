package Exercicio_SistemaDeGerenciamento;

import java.util.ArrayList;
import java.util.List;

public class Oficina {
    private List<Servico> servicos;

    public Oficina(){
        this.servicos = new ArrayList<>();
    }

    public void adicionarServico(Servico servico){
        this.servicos.add(servico);
    }

    public void listarServicos(){
        for (Servico servico : this.servicos){
            servico.exibirServico();
            System.out.println();
        }
    }
}
