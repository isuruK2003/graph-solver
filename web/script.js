"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graph_1 = require("./graph");
var vertex_1 = require("./vertex");
function updateDistances(graph, startVertexId) {
    var updatedGraph = new graph_1.Graph();
    try {
        graph.getVertex(startVertexId).setDistance(0);
        var _loop_1 = function () {
            var vertex = graph.removeVertex();
            vertex.getLinks().forEach(function (link) {
                var currentDistance = link.vertex.getDistance();
                var updatedDistance = link.weight + vertex.getDistance();
                if (updatedDistance < currentDistance) {
                    link.vertex.setDistance(updatedDistance);
                    link.vertex.setPrevious(vertex);
                }
            });
            updatedGraph.addVertex(vertex);
        };
        while (!graph.isEmpty()) {
            _loop_1();
        }
    }
    catch (e) {
        console.error(e);
    }
    finally {
        return updatedGraph;
    }
}
function getShortestPath(destination) {
    var path = [];
    var currentVertex = destination;
    path.push(destination);
    while (currentVertex) {
        var previous = currentVertex.getPrevious();
        if (previous) {
            path.push(previous);
        }
        currentVertex = currentVertex.getPrevious();
    }
    return path.reverse();
}
function main() {
    var graph = new graph_1.Graph();
    graph.addVertex(new vertex_1.Vertex(1, "A"));
    graph.addVertex(new vertex_1.Vertex(2, "B"));
    graph.addVertex(new vertex_1.Vertex(3, "C"));
    graph.addVertex(new vertex_1.Vertex(4, "D"));
    graph.addVertex(new vertex_1.Vertex(5, "E"));
    graph.getVertex(1).linkTo(graph.getVertex(2), 1);
    graph.getVertex(1).linkTo(graph.getVertex(4), 3);
    graph.getVertex(1).linkTo(graph.getVertex(3), 2);
    graph.getVertex(2).linkTo(graph.getVertex(4), 2);
    graph.getVertex(3).linkTo(graph.getVertex(4), 4);
    graph.getVertex(3).linkTo(graph.getVertex(5), 2);
    graph.getVertex(4).linkTo(graph.getVertex(5), 3);
    var updatedGraph = updateDistances(graph, 1);
    var path = getShortestPath(updatedGraph.getVertex(1));
    var pathString = [];
    path.forEach(function (p) {
        pathString.push(p.getName());
    });
    console.log(pathString.join(" -> "));
    console.log("Total Distance: " + path[path.length - 1].getDistance());
}
main();
