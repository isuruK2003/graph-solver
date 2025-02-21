import { Link } from "./link";


export class Vertex {
    private id: number;
    private name: string;
    private distance: number;
    private previous: Vertex | null;
    private links: Link[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.distance = Infinity;
        this.previous = null;
        this.links = [];
    }

    public getId(): number {
        return this.id;
    }

    public getDistance(): number {
        return this.distance;
    }

    public getPrevious(): Vertex|null {
        return this.previous;
    }

    public getLinks(): Link[] {
        return this.links;
    }

    public getName(): string {
        return this.name;
    }

    public setDistance(distance: number) {
        this.distance = distance;
    }

    public setPrevious(previous: Vertex) {
        this.previous = previous
    }

    public setName(name: string) {
        this.name = name;
    }

    public linkTo(vertex: Vertex, weight: number) {
        const link: Link = {vertex: vertex, weight: weight};
        this.links.push(link);
    }
}