package Grafos;

import java.util.*;

public class Grafo<T> {
    private final boolean directed;
    private final Map<T, Set<T>> adj = new HashMap<>();

    Grafo(boolean directed){
        this.directed = directed;
    }

    // Garante que o vertice exista
    public void addVertex(T v){
        adj.putIfAbsent(v, new LinkedHashSet<>()); // o putIfAbsent permite que não haja sobrescrita caso já exista
    }

    public void addEdge(T v, T u){
        addVertex(u); addVertex(v);
        adj.get(u).add(v);
        if (!directed) adj.get(v).add(u);
    }

    public Set<T> getNeighbors(T v){
        return adj.getOrDefault(v, Set.of());
    }

    public List<T> bfsShortesPath(T start, T goal){
        Map<T, T> prev = new HashMap<>();
        Set<T> visited = new HashSet<>();
        Deque<T> queue = new ArrayDeque<>();

        visited.add(start);
        queue.add(start);

        while (!queue.isEmpty()){
            T current = queue.removeFirst();
            if (current.equals(goal)) break;
            for (T nb : getNeighbors(current)){
                if (visited.add(nb)){
                    prev.put(nb, current);
                    queue.addLast(nb);
                }
            }
        }

        if (!start.equals(goal) && !prev.containsKey(goal)){
            return List.of();
        }

        List<T> path = new ArrayList<>();
        for (T at = goal; at != null; at = prev.get(at)){
            path.add(at);
            if (at.equals(start)) break;;
        }

        Collections.reverse(path);
        return path;
    }

    @Override public String  toString() { return adj.toString(); }

    public static void main(String[] args) {
        Grafo<String> g = new Grafo<>(false);
        g.addEdge("A", "B");
        g.addEdge("A", "C");
        g.addEdge("B", "D");
        g.addEdge("C", "E");
        g.addEdge("D", "F");
        g.addEdge("E", "F");

        System.out.println("Grafo: " + g);

        System.out.println("Caminho minimo A -> F: " + g.bfsShortesPath("A", "F"));
    }
}


