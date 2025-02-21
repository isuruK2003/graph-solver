"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vertex = void 0;
var Vertex = /** @class */ (function () {
    function Vertex(id, name) {
        this.id = id;
        this.name = name;
        this.distance = Infinity;
        this.previous = null;
        this.links = [];
    }
    Vertex.prototype.getId = function () {
        return this.id;
    };
    Vertex.prototype.getDistance = function () {
        return this.distance;
    };
    Vertex.prototype.getPrevious = function () {
        return this.previous;
    };
    Vertex.prototype.getLinks = function () {
        return this.links;
    };
    Vertex.prototype.getName = function () {
        return this.name;
    };
    Vertex.prototype.setDistance = function (distance) {
        this.distance = distance;
    };
    Vertex.prototype.setPrevious = function (previous) {
        this.previous = previous;
    };
    Vertex.prototype.setName = function (name) {
        this.name = name;
    };
    Vertex.prototype.linkTo = function (vertex, weight) {
        var link = { vertex: vertex, weight: weight };
        this.links.push(link);
    };
    return Vertex;
}());
exports.Vertex = Vertex;
