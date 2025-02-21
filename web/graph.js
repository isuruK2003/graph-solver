"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = void 0;
var Graph = /** @class */ (function () {
    function Graph() {
        this.vertices = [];
    }
    Graph.prototype.sort = function () {
        this.vertices.sort(function (a, b) {
            return a.getDistance() - b.getDistance();
        });
    };
    Graph.prototype.addVertex = function (vertex) {
        this.vertices.push(vertex);
        this.sort();
    };
    Graph.prototype.removeVertex = function () {
        var vertex = this.vertices.shift();
        if (!vertex)
            throw new Error("No vertices available to remove.");
        return vertex;
    };
    Graph.prototype.getVertex = function (id) {
        for (var i = 0; i < this.vertices.length; i++) {
            if (this.vertices[i].getId() === id) {
                return this.vertices[i];
            }
        }
        throw new Error("No vertex found for the id of ".concat(id));
    };
    Graph.prototype.getVertices = function () {
        return this.vertices;
    };
    Graph.prototype.isEmpty = function () {
        return this.vertices.length > 0 ? false : true;
    };
    return Graph;
}());
exports.Graph = Graph;
