import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        // 1º Exercicio: Conversão de Celsius para Fahrenheit
//         System.out.print("Digite a temperatura em Celsius: ");
//         double celsius = input.nextDouble();
//        double fahrenheit = celsius * 1.8 + 32;
//         System.out.println("A temperatura em farenheit é: " + fahrenheit);

        // 2º Ecericio: Verificação de maior idade
//        System.out.println("Informe a sua idade: ");
//        int idade = input.nextInt();
//
//        if(idade < 18){
//            System.out.println("Você é menor de idade");
//        }else{
//            System.out.println("Você é maior de idade");
//        }

        // 3º Exercicio: Par ou Impar
//        System.out.println("Digite um valor: ");
//        int numero = input.nextInt();
//
//        if(numero % 2 == 0){
//            System.out.println("Esse número é PAR");
//        }else{
//            System.out.println("Esse número é IMPAR");
//        }

        // 4º Exercicio: Dia da semana usando SWITCH-CASE
//        System.out.println("Digite o numero da semana: ");
//        int dia = input.nextInt();
//
//        switch (dia){
//            case 1:
//                System.out.println("Segunda-feira");
//                break;
//            case 2:
//                System.out.println("Terça-feira");
//                break;
//            case 3:
//                System.out.println("Quarta-feira");
//                break;
//            case 4:
//                System.out.println("Quinta-feira");
//                break;
//            case 5:
//                System.out.println("Sexta-feira");
//                break;
//            case 6:
//                System.out.println("Sábado");
//                break;
//            case 7:
//                System.out.println("Domingo");
//                break;
//            default:
//                System.out.println("Dia inválido");
//                break;
//        }

        // 5º Exercicio: Calculadora simples
//        System.out.println("Informe o primeiro valor: ");
//        int valor1 = input.nextInt();
//        System.out.println("Informe o segundo valor: ");
//        int valor2 = input.nextInt();
//        System.out.println("Informe o operador (+, -, *, /): ");
//        char operador = input.next().charAt(0);
//
//        if(operador == '+'){
//            System.out.println("O resultado do cálculo é: " + (valor1 + valor2));
//        }else if(operador == '-'){
//            System.out.println("O resultado do cálculo é: " + (valor1 - valor2));
//        }else if(operador == '*'){
//            System.out.println("O resultado do cálculo é: " + (valor1 * valor2));
//        }else if(operador == '/'){
//            System.out.println("O resultado do cálculo é: " + (valor1 / valor2));
//        }else{
//            System.out.println("Operador inválido.");
//        }

        // 6º Exercicio: Contar de 1 ao 10 utilizando for
//        for(int i = 1; i <= 10; i++){
//            System.out.println(i);
//        }

        // COm while
//        int i = 1;
//        while(i <= 10){
//            System.out.println(i);
//            i++;
//        }

        // 7º Exercicio: Encontrar o maior número em um array
        int [] vetor = new int[6];
        vetor[0] = 5;
        vetor[1] = 17;
        vetor[2] = 8;
        vetor[3] = 24;
        vetor[4] = 11;
        vetor[5] = 7;
//
//        int max = vetor[0];
//
//        for (int i = 1; i < vetor.length; i++){
//            // Se o valor da posição i for maior que max, max passa a ser o valor i
//            if (vetor[i] > max){
//                max = vetor[i];
//            }
//        }
//
//        System.out.println(max);

        // 8º Exercicio: Adicione um elemento ao array
//        int [] newVetor = new int[vetor.length];
//        for (int i = 0; i < vetor.length; i++){
//            newVetor[i] = vetor[i];
//        }
//        newVetor[vetor.length] = 1;

        //Matrizes

        // 9º Exercicio: Soma das diagonais da matriz
//        int res = 0;
//        int [][] matriz = {
//                {1, 5, 7},
//                {9, 2, 4},
//                {3, 8, 6}
//        };
//
//        for(int i = 0; i < matriz.length; i++){
//            for (int j = 0; j < matriz[i].length; j++){
//                if (i == j){
//                    res += matriz[i][j];
//                    System.out.println(res);
//                }
//            }
//        }

    }
}





























