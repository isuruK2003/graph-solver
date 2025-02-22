import { Graph } from "./graph";
import { Link } from "./link";
import { Vertex } from "./vertex";

export function updateDistances(graph: Graph, startVertexId: number): Graph {
    const updatedGraph = new Graph();
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
    return updatedGraph;
}

export function getShortestPath(destination: Vertex): Vertex[] {
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