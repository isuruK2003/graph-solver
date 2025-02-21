import java.util.List;

public class Main {

    private static final Graph graph = new Graph();

    private static void loadVertices() {
        graph.addVertex(new Vertex(0, "S"));
        graph.addVertex(new Vertex(1, "A"));
        graph.addVertex(new Vertex(2, "B"));
        graph.addVertex(new Vertex(3, "C"));
        graph.addVertex(new Vertex(4, "D"));
        graph.addVertex(new Vertex(5, "E"));
        graph.addVertex(new Vertex(6, "F"));
        graph.addVertex(new Vertex(7, "G"));
        graph.addVertex(new Vertex(8, "H"));
        graph.addVertex(new Vertex(9, "I"));
        graph.addVertex(new Vertex(10, "J"));
        graph.addVertex(new Vertex(11, "K"));
        graph.addVertex(new Vertex(12, "L"));
    }

    private static void loadEdges() throws VertexNotFound {
        graph.getVertexByName("S").linkTo(graph.getVertexByName("A"), 7.0);
        graph.getVertexByName("S").linkTo(graph.getVertexByName("B"), 2.0);
        graph.getVertexByName("A").linkTo(graph.getVertexByName("B"), 3.0);
        graph.getVertexByName("A").linkTo(graph.getVertexByName("D"), 4.0);
        graph.getVertexByName("B").linkTo(graph.getVertexByName("D"), 4.0);
        graph.getVertexByName("D").linkTo(graph.getVertexByName("F"), 5.0);
        graph.getVertexByName("B").linkTo(graph.getVertexByName("H"), 1.0);
        graph.getVertexByName("H").linkTo(graph.getVertexByName("F"), 3.0);
        graph.getVertexByName("H").linkTo(graph.getVertexByName("G"), 2.0);
        graph.getVertexByName("G").linkTo(graph.getVertexByName("E"), 2.0);
        graph.getVertexByName("E").linkTo(graph.getVertexByName("K"), 5.0);
        graph.getVertexByName("K").linkTo(graph.getVertexByName("I"), 4.0);
        graph.getVertexByName("K").linkTo(graph.getVertexByName("J"), 4.0);
        graph.getVertexByName("I").linkTo(graph.getVertexByName("J"), 6.0);
        graph.getVertexByName("I").linkTo(graph.getVertexByName("L"), 4.0);
        graph.getVertexByName("J").linkTo(graph.getVertexByName("L"), 4.0);
        graph.getVertexByName("L").linkTo(graph.getVertexByName("C"), 2.0);
        graph.getVertexByName("C").linkTo(graph.getVertexByName("S"), 3.0);
    }

    public static void main(String[] args) {
        try {
            loadVertices();
            loadEdges();
            List<Vertex> shortestPath = graph.findShortestPath(graph.getVertexByName("S"), graph.getVertexByName("E"));
            String[] result = new String[shortestPath.size()];
            for (int i = 0; i < shortestPath.size(); i++) {
                Vertex v = shortestPath.get(i);
                result[i] = "[" + v.getName() + " | " + v.getValue() + "]";
            }
            System.out.println(String.join(" ---> ", result));
        } catch (VertexNotFound e) {
            System.out.println(e.getMessage());
        }
    }
}
