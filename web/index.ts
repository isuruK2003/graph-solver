import { Graph } from "./graph";
import { Link } from "./link";
import { Vertex } from "./vertex";

function updateDistances(graph: Graph, startVertexId: number): Graph {
    const updatedGraph = new Graph();
    try {
        graph.getVertex(startVertexId).setDistance(0);
        while (!graph.isEmpty()) {
            const vertex = graph.removeVertex();
            vertex.getLinks().forEach((link: Link) => {
                const currentDistance = link.vertex.getDistance();
                const updatedDistance = link.weight + vertex.getDistance();
                if (updatedDistance < currentDistance) {
                    link.vertex.setDistance(updatedDistance);
                    link.vertex.setPrevious(vertex);
                }
            });
            updatedGraph.addVertex(vertex);
        }
    }
    catch (e) {
        console.error(e)
    }
    finally {
        return updatedGraph
    }
}

function getShortestPath(destination: Vertex): Vertex[] {
    const path: Vertex[] = [];
    let currentVertex: Vertex | null = destination;
    path.push(destination)
    while (currentVertex) {
        const previous: Vertex | null = currentVertex.getPrevious();
        if (previous) {
            path.push(previous);
        }
        currentVertex = currentVertex.getPrevious();
    }
    return path.reverse();
}

function main(): void {
    const graph = new Graph();

    graph.addVertex(new Vertex(1, "A"));
    graph.addVertex(new Vertex(2, "B"));
    graph.addVertex(new Vertex(3, "C"));
    graph.addVertex(new Vertex(4, "D"));
    graph.addVertex(new Vertex(5, "E"));

    graph.getVertex(1).linkTo(graph.getVertex(2), 1);
    graph.getVertex(1).linkTo(graph.getVertex(4), 3);
    graph.getVertex(1).linkTo(graph.getVertex(3), 2);

    graph.getVertex(2).linkTo(graph.getVertex(4), 2);

    graph.getVertex(3).linkTo(graph.getVertex(4), 4);
    graph.getVertex(3).linkTo(graph.getVertex(5), 2);

    graph.getVertex(4).linkTo(graph.getVertex(5), 3);

    const updatedGraph: Graph = updateDistances(graph, 1);
    const path: Vertex[] = getShortestPath(updatedGraph.getVertex(5));

    let pathString: string[] = [];
    path.forEach((p) => {
        pathString.push(p.getName());
    });
    console.log(pathString.join(" -> "));
    console.log("Total Distance: " + path[path.length - 1].getDistance());
}

main();