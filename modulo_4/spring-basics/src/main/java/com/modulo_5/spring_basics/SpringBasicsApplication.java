package com.modulo_5.spring_basics;

import com.modulo_5.spring_basics.aula_70.Carro;
import com.modulo_5.spring_basics.aula_70.desafio.MaquinaSorveteComIoC;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SpringBasicsApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBasicsApplication.class, args);
	}

	// Aula 70 - básico de IoC
//	@Bean
//	CommandLineRunner init(Carro carro){
//		return args -> {
//			System.out.println(carro.tipo());
//		};
//	}

	// Testando o desafio da aula 70 - Parte B
//	@Bean
//	CommandLineRunner init(MaquinaSorveteComIoC maquina){
//		return args -> {
//			System.out.println(maquina.servir());
//		};
//	}
}
