import { useState } from "react";
import { Graph } from "./graph";
import { Vertex } from "./vertex";

export default function App() {

  let graph: Graph = new Graph();

  const [updatedGraph, setUpdatedGraph] = useState<Graph>(graph);
  const [newVertexName, setNewVertexName] = useState<string>("");
  const [linkFirstVertex, setLinkFirstVertex] = useState<Vertex | null>(null);
  const [linkSecondVertex, setLinkSecondVertex] = useState<Vertex | null>(null);
  const [linkWeight, setLinkWeight] = useState<number | null>(null);

  return (
    <>
      <table id="vertices" className="gs-vertices">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          {updatedGraph.getVertices().map((vertex: Vertex) => (
            <tr key={vertex.getId()} className="gs-vertex">
              <td className="gs-vertex-id">{vertex.getId()}</td>
              <td className="gs-vertex-name">{vertex.getName()}</td>
              <td className="gs-vertex-distance">{vertex.getDistance()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <hr />
        <div>
          <label htmlFor="gs-new-vertex-name">Name </label>
          <input
            id="gs-new-vertex-name"
            type="text"
            value={newVertexName}
            onChange={(e) => setNewVertexName(e.target.value)}
          />
          <button onClick={() => {
            if (newVertexName) {
              const newVertex = new Vertex(graph.getVertices().length, newVertexName);
              graph.addVertex(newVertex);
              setNewVertexName("");
              setUpdatedGraph(graph);
            }
          }}>
            Create Vertex
          </button>
        </div>
      </div>

      <div>
        <hr />
        <label htmlFor="gs-new-link-first-vertex">Vertex 1</label>
        <select
          value={linkFirstVertex?.getId()}
          onChange={(e) => setLinkFirstVertex(graph.getVertex(parseInt(e.target.value)))}
        >
          <option value="">Select Vertex 1</option>
          {graph.getVertices().map((vertex: Vertex) => (
            <option key={vertex.getId()} value={vertex.getId()}>
              {vertex.getName()}
            </option>
          ))}
        </select>
        <label htmlFor="gs-new-link-second-vertex">Vertex 2</label>
        <select
          value={linkSecondVertex?.getId()}
          onChange={(e) => setLinkSecondVertex(graph.getVertex(parseInt(e.target.value)))}
        >
          <option value="">Select Vertex 2</option>
          {graph.getVertices().map((vertex: Vertex) => (
            <option key={vertex.getId()} value={vertex.getId()}>
              {vertex.getName()}
            </option>
          ))}
        </select>
        <input
          value={linkWeight ?? ""}
          type="number"
          onChange={(e) => setLinkWeight(parseInt(e.target.value))}
        />
        <button onClick={() => {
          if (linkWeight === null) {
            alert("Link weight is null")
            return;
          }
          if (linkFirstVertex === null) {
            alert("Link first vertex is null")
            return;
          }
          if (linkSecondVertex === null) {
            alert("Link second vertex is null")
            return;
          }
          if (linkSecondVertex && linkWeight) {
            linkFirstVertex?.linkTo(linkSecondVertex, linkWeight);
            console.log(graph)
          }
        }}>
          Create Link
        </button>
      </div>
    </>
  )
}