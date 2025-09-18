package TratamentoDeErros;

import java.io.FileReader;
import java.io.IOException;

public class ExemplosTratamentoErros {
    public static void main(String[] args) {
        try {
            int [] numeros = {1, 2, 3};
            System.out.println(numeros[5]); // Tenta acessar um index que não existe
        }catch (ArrayIndexOutOfBoundsException e){ // index fora dos limites do array
            System.out.println(e.getMessage());
        }finally {
            System.out.println("Ocorrerá, independentemente de haver ou não uma exceção");
        }

        try {
            throw new MyException("Testando erros personalizados");
        }catch (MyException e){
            System.out.println(e.getMessage());
        }
    }

    // Define o que método pode utilizar o IOException
    public void lerArquivo() throws IOException {
        FileReader arquivo = new FileReader("arquivo.txt");
    }
}
