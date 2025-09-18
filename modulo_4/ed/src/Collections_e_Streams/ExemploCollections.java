package Collections_e_Streams;

import java.util.*;

public class ExemploCollections {
    public static void main(String[] args){
        Collection<String> colecao = new ArrayList<>();
        colecao.add("JavaScript");
        colecao.add("React");
        colecao.add("Tailwind");

        System.out.println(colecao.contains("JavaScript"));

        List<String> lista = new ArrayList<>();
        lista.add("JavaScript");
        lista.add("React");
        lista.add("Tailwind");

        System.out.println(lista.get(1));
        lista.remove(2);
        System.out.println(lista);

        Set<String> set = new HashSet<>();
        set.add("JavaScript");
        set.add("React");
        set.add("Tailwind");
        set.add("React");

        System.out.println(set);

        Queue<String> queue = new LinkedList<>();
        queue.offer("Primeiro");
        queue.offer("Segundo");
        queue.offer("Terceiro");

        System.out.println(queue.poll());
        System.out.println(queue.peek());

        Map<String, Integer> map = new HashMap<>();
        map.put("A", 1);
        map.put("B", 2);
        map.put("C", 3);

        System.out.println(map.get("A"));
        System.out.println(map.keySet());
        System.out.println(map);

        String[] nomes = {"Phil", "Claire", "Cam"};
        for (String nome : nomes){
            System.out.println(nome);
        }

        List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        int somaPares = numeros.stream().filter(num -> num % 2 == 0).reduce(0, Integer::sum);
        System.out.println(somaPares);
    }
}
