import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
class Vertex implements Comparable<Vertex> {
    private Integer id;
    private String name;
    private Double value;
    private Vertex parent;
    private List<Edge> edges;

    public Vertex(Integer id, String name) {
        this.id = id;
        this.name = name;
        this.edges = new ArrayList<>();
        this.value = Double.POSITIVE_INFINITY;
    }

    public void linkTo(Vertex vertex, Double weight) {
        this.edges.add(new Edge(this, vertex, weight));
    }

    @Override
    public int compareTo(Vertex vertex) {
        return Double.compare(this.value, vertex.value);
    }

    @Override
    public String toString() {
        return "Vertex{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", value=" + value +
                ", parent=" + parent +
                ", edges=" + edges +
                '}';
    }
}