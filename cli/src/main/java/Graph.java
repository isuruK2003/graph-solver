import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.PriorityQueue;

@Getter
@Setter
class Graph {
    private List<Vertex> vertices;

    public Graph() {
        this.vertices = new ArrayList<>();
    }

    public void addVertex(Vertex vertex) {
        this.vertices.add(vertex);
    }

    public Vertex getVertexById(Integer id) throws VertexNotFound {
        for (Vertex v : this.vertices) {
            if (v.getId().equals(id)) return v;
        }
        throw new VertexNotFound("Node with the ID " + id + ", not found");
    }

    public Vertex getVertexByName(String name) throws VertexNotFound {
        for (Vertex v : this.vertices) {
            if (v.getName().equals(name)) return v;
        }
        throw new VertexNotFound("Node with the name " + name + ", not found");
    }

    public List<Vertex> findShortestPath(Vertex start, Vertex end) throws VertexNotFound {
        start.setValue(0.0);
        PriorityQueue<Vertex> pq = new PriorityQueue<>();
        pq.addAll(this.vertices);
        while (!pq.isEmpty()) {
            Vertex v = pq.poll();
            for (Edge e: v.getEdges()) {
                Vertex to = e.getTo();
                Double newValue = e.getWeight() + v.getValue();
                if (newValue < to.getValue()) {
                    to.setValue(newValue);
                    to.setParent(v);
                }
            }
        }
        List<Vertex> shortestPath = new ArrayList<>();
        Vertex temp = end;
        while (temp != null) {
            shortestPath.add(temp);
            temp = temp.getParent();
        }
        return shortestPath.reversed();
    }
}