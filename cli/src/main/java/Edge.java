import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
class Edge implements Comparable<Edge> {
    private Vertex from;
    private Vertex to;
    private Double weight;

    public Edge(Vertex from, Vertex to, Double weight) {
        this.from = from;
        this.to = to;
        this.weight = weight;
    }

    @Override
    public int compareTo(Edge o) {
        return Double.compare(weight, o.weight);
    }
}