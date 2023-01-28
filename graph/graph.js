class Graph {
    constructor(directed = true) {
      this.directed = directed;
      this.nodes = [];
      this.edges = new Map();
    }
  
    addNode(key, value = key) {
      this.nodes.push({ key, value });
    }
  
    addEdge(a, b, weight) {
      this.edges.set(JSON.stringify([a, b]), { a, b, weight });
      if (!this.directed)
        this.edges.set(JSON.stringify([b, a]), { a: b, b: a, weight });
    }
  
    removeNode(key) {
      this.nodes = this.nodes.filter(n => n.key !== key);
      [...this.edges.values()].forEach(({ a, b }) => {
        if (a === key || b === key) this.edges.delete(JSON.stringify([a, b]));
      });
    }
  
    removeEdge(a, b) {
      this.edges.delete(JSON.stringify([a, b]));
      if (!this.directed) this.edges.delete(JSON.stringify([b, a]));
    }
  
    findNode(key) {
      return this.nodes.find(x => x.key === key);
    }
  
    hasEdge(a, b) {
      return this.edges.has(JSON.stringify([a, b]));
    }
  
    setEdgeWeight(a, b, weight) {
      this.edges.set(JSON.stringify([a, b]), { a, b, weight });
      if (!this.directed)
        this.edges.set(JSON.stringify([b, a]), { a: b, b: a, weight });
    }
  
    getEdgeWeight(a, b) {
      return this.edges.get(JSON.stringify([a, b])).weight;
    }
  
    adjacent(key) {
      return [...this.edges.values()].reduce((acc, { a, b }) => {
        if (a === key) acc.push(b);
        return acc;
      }, []);
    }
  
    indegree(key) {
      return [...this.edges.values()].reduce((acc, { a, b }) => {
        if (b === key) acc++;
        return acc;
      }, 0);
    }
  
    outdegree(key) {
      return [...this.edges.values()].reduce((acc, { a, b }) => {
        if (a === key) acc++;
        return acc;
      }, 0);
    }
  }

  const g = new Graph();

g.addNode('a');
g.addNode('b');
g.addNode('c');
g.addNode('d');

g.addEdge('a', 'c');
g.addEdge('b', 'c');
g.addEdge('c', 'b');
g.addEdge('d', 'a');

g.nodes.map(x => x.value);  // ['a', 'b', 'c', 'd']
[...g.edges.values()].map(({ a, b }) => `${a} => ${b}`);
// ['a => c', 'b => c', 'c => b', 'd => a']

g.adjacent('c');            // ['b']

g.indegree('c');            // 2
g.outdegree('c');           // 1

g.hasEdge('d', 'a');        // true
g.hasEdge('a', 'd');        // false

g.removeEdge('c', 'b');

[...g.edges.values()].map(({ a, b }) => `${a} => ${b}`);
// ['a => c', 'b => c', 'd => a']

g.removeNode('c');

g.nodes.map(x => x.value);  // ['a', 'b', 'd']
[...g.edges.values()].map(({ a, b }) => `${a} => ${b}`);
// ['d => a']

g.setEdgeWeight('d', 'a', 5);
g.getEdgeWeight('d', 'a');  // 5

{/*Directed graph*/

function Edge(src, dest){
    this.src = src;
    this.dest = dest;
  }
  
  const Graph = function(edges){
    // A list of lists to represent an adjacency list
    let adj = new Map();
  
    // add edges to the directed graph
    for (let current of edges) {
      // allocate new node in adjacency list from src to dest
      const {src, dest} = current;
      if(adj.has(src)){
        adj.get(src).push(dest);
      }else{
        adj.set(src, [dest]);  
      }
    }
    
    this.add = function(edge) {
      const {src, dest} = edge;
      if(adj.has(src)){
        adj.get(src).push(dest);
      }else{
        adj.set(src, [dest]);  
      }
    }
    
    this.remove = function(edge) {
      const {src, dest} = edge;
      let srcList = adj.get(src);
      srcList = srcList.filter(e => e !== dest);
      
      if(srcList.length === 0){
        adj.delete(src);
      }else{
        adj.set(src, srcList);
      }
   
      return true;
    }
    
    this.print = function() {
      let n = adj.size;
   
      for (let src of adj.keys()) {
        // print current vertex and all its neighboring vertices
        let str = "";
        for (let dest of adj.get(src)) {
          str += "(" + src + " ——> " + dest + ")";
        }
        console.log(str);
      }
    }
  
    //Return graph
    this.getList = () => adj;
  }}

  {
    Input:
const arr = [new Edge(0, 1), new Edge(1, 2),
                new Edge(2, 0), new Edge(2, 1), new Edge(3, 2),
                new Edge(4, 5), new Edge(5, 4)];

const graph = new Graph(arr);
graph.add(new Edge('c', 'd'));
graph.print();

// Output:
// "(0 ——> 1)"
// "(1 ——> 2)"
// "(2 ——> 0)(2 ——> 1)"
// "(3 ——> 2)"
// "(4 ——> 5)"
// "(5 ——> 4)"
// "(c ——> d)"
  }

  {
    function Edge(src, dest){
        this.src = src;
        this.dest = dest;
      }
      
      const Graph = function(edges){
        // A list of lists to represent an adjacency list
        let adj = new Map();
      
        // add edges to the directed graph
        for (let current of edges) {
          // allocate new node in adjacency list from src to dest
          const {src, dest} = current;
          if(adj.has(src)){
            adj.get(src).push(dest);
          }else{
            adj.set(src, [dest]);  
          }
          
          // uncomment next lines for undirected graph
          // allocate new node in adjacency list from dest to src
          if(adj.has(dest)){
            adj.get(dest).push(src);
          }else{
            adj.set(dest, [src]);  
          }
        }
        
        this.add = function(edge) {
          const {src, dest} = edge;
          if(adj.has(src)){
            adj.get(src).push(dest);
          }else{
            adj.set(src, [dest]);  
          }
      
          // uncomment next lines for undirected graph
          // allocate new node in adjacency list from dest to src
          if(adj.has(dest)){
            adj.get(dest).push(src);
          }else{
            adj.set(dest, [src]); 
          }
          
        }
        
        this.remove = function(edge) {
          const {src, dest} = edge;
          let srcList = adj.get(src);
          srcList = srcList.filter(e => e !== dest);
          
          if(srcList.length === 0){
            adj.delete(src);
          }else{
            adj.set(src, srcList);
          }
      
          // uncomment next lines for undirected graph
           let destList = adj.get(dest);
           destList = destList.filter(e => e !== src);
          
           if(destList.length === 0){
             adj.delete(dest);
           }else{
             adj.set(dest, destList);
           }
          
          return true;
        }
        
        this.print = function() {
          let n = adj.size;
       
          for (let src of adj.keys()) {
            // print current vertex and all its neighboring vertices
            let str = "";
            for (let dest of adj.get(src)) {
              str += "(" + src + " ——> " + dest + ")";
            }
            console.log(str);
          }
        }
      
        //Return graph
        this.getList = () => adj;
      }
  }

  {
    Input:
const arr = [new Edge(0, 1), new Edge(2, 0), 
             new Edge(2, 1), new Edge(3, 2),
             new Edge(4, 5), new Edge(5, 4)];

const graph = new Graph(arr);
graph.add(new Edge('c', 'd'));
graph.print();

// Output:
// "(0 ——> 1)(0 ——> 2)"
// "(1 ——> 0)(1 ——> 2)"
// "(2 ——> 0)(2 ——> 1)(2 ——> 3)"
// "(3 ——> 2)"
// "(4 ——> 5)(4 ——> 5)"
// "(5 ——> 4)(5 ——> 4)"
// "(c ——> d)"
// "(d ——> c)"
  }



