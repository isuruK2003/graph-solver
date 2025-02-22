import { Vertex } from "./vertex";

export class Graph {
    private vertices: Vertex[];

    constructor() {
        this.vertices = [];
    }

    private sort(): void {
        this.vertices.sort((a: Vertex, b: Vertex) => {
            return a.getDistance() - b.getDistance()
        });
    }

    public addVertex(vertex: Vertex) {
        this.vertices.push(vertex);
        this.sort();
    }

    public removeVertex(): Vertex {
        const vertex = this.vertices.shift();
        if (!vertex) throw new Error("No vertices available to remove.");
        return vertex;
    }

    public getVertex(id: number): Vertex {
        for (let i = 0; i < this.vertices.length; i++) {
            if (this.vertices[i].getId() === id) {
                return this.vertices[i];
            }
        }
        throw new Error(`No vertex found for the id of ${id}`);
    }

    public getVertices(): Vertex[] {
        return this.vertices;
    }

    public isEmpty(): boolean {
        return this.vertices.length > 0 ? false : true;
    }
}