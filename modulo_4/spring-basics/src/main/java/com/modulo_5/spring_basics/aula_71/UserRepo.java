package com.modulo_5.spring_basics.aula_71;

import org.springframework.stereotype.Repository;

@Repository
public class UserRepo {
    // Verifica se o id existe
    public boolean exists(String id){
        return true;
    }
}
