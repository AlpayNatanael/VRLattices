# VRLattices

**Helping students visualize abstract mathematical structures through interactive 3D models.**

[Explore the gallery](https://alpaynatanael.github.io/VRLattices/) · [View the project poster](https://alpaynatanael.github.io/VRLattices/misc/poster/VR_Lattices_2021.pdf)

Built with JavaScript and Babylon.js, it represents finite lattices as interactive three-dimensional diagrams, with functionality for exploration in a browser and virtual reality.

## Mathematical background

A **lattice** is a partially ordered set in which every pair of elements has:

- A **meet**: their greatest lower bound.
- A **join**: their least upper bound.

A familiar example is the collection of all subsets of a set, ordered by inclusion. In this lattice, the meet of two subsets is their intersection, and their join is their union:

$$
A \wedge B = A \cap B,
\qquad
A \vee B = A \cup B.
$$

For a three-element set, there are eight subsets. Connecting each subset to those obtained by adding one element produces the edges of a cube. Larger sets give Boolean lattices whose diagrams have the structure of higher-dimensional hypercubes.

Lattices are commonly represented using **Hasse diagrams**: vertices represent elements, and edges connect elements that are immediately related in the order, with no intermediate element between them. VRLattices draws these vertices and edges in three dimensions so that users can rotate the diagram and inspect its structure.

The project also includes lattices of **preorders**, which are reflexive and transitive relations. In these examples, each vertex represents an entire relation, and the relations are ordered by inclusion.

## Educational motivation

Abstract mathematics often asks students to reason about objects they cannot easily picture. Definitions involving sets, relations, and algebraic structures can be difficult to connect with concrete examples, especially when a diagram contains many overlapping edges.

VRLattices was developed to help students **build visual intuition for abstract mathematical objects**. By rotating a model and examining it from different viewpoints, students can follow connections, recognize patterns, and relate a formal definition to a visible structure.

The project is intended to support teaching and exploration in abstract algebra and order theory. Its goal is to give students an interactive companion to definitions, examples, and proofs, making unfamiliar structures easier to investigate and discuss.

## Explore the models

The main gallery includes the following interactive examples:

| Model | Elements | Description |
| --- | ---: | --- |
| [Cube](https://alpaynatanael.github.io/VRLattices/src/cube.html) | 8 | Boolean lattice of subsets of a three-element set. |
| [4D hypercube](https://alpaynatanael.github.io/VRLattices/src/Hypercube4.html) | 16 | Three-dimensional representation of the Boolean lattice of subsets of a four-element set. |
| [5D hypercube](https://alpaynatanael.github.io/VRLattices/src/HyperCube5.html) | 32 | Three-dimensional representation of the Boolean lattice of subsets of a five-element set. |
| [Preorder lattice](https://alpaynatanael.github.io/VRLattices/src/preorder_lattice_29.html) | 29 | Lattice of all preorders on a three-element set, ordered by inclusion. |

These examples connect familiar set operations with increasingly complex structures. In the Boolean lattices, each vertex represents a subset; in the preorder lattice, each vertex represents an entire reflexive and transitive relation.

The repository also contains experimental scenes for larger structures, including a **64-element Boolean lattice** and the **355-element lattice of preorders on a four-element set**.
