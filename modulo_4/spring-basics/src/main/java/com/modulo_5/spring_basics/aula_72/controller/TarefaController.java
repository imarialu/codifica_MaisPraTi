package com.modulo_5.spring_basics.aula_72.controller;

import com.modulo_5.spring_basics.aula_72.model.Tarefa;
import com.modulo_5.spring_basics.aula_72.service.TarefaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/tarefas")
public class TarefaController {
    private final TarefaService service;

    public TarefaController(TarefaService service){
        this.service = service;
    }

    @GetMapping
    public List<Tarefa> listar(){
        return service.listarTarefas();
    }

    @PostMapping
    public ResponseEntity<Tarefa> criar(String titulo){
        Tarefa t = service.criar(titulo);
        return ResponseEntity.ok(t);
    }
}
