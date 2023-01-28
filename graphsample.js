// const testInput = [
//     [1, 0, 0, 1, 0],
//     [1, 0, 1, 0, 0],
//     [0, 0, 1, 0, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 1, 1, 0],
//     ];
//     function riverSizes(matrix) {
//     // Write your code here.
//     for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//     if (matrix[i][j] === 0) {
//     matrix[i][j] = "";
//     }
//     }
//     }
//     return matrix
//     }

//     console.log(riverSizes(testInput))


{
    const riverSizes = input => {
        let results = [];
        input.forEach((row, y) => {
            row.forEach((cell, x) => {
                if (input[y][x] === 1) {
                    results.push(checkAdjacent(x, y, input));
                }
            });
        });
        return results;
    };


    const checkAdjacent = (x, y, input) => {
        input[y][x] = 0; // mark cell as visited
        let size = 1;

        [[x + 1, y], [x, y + 1], [x - 1, y], [x, y - 1]].forEach(([i, j]) => {

            if (input[j] && input[j][i]) {
                size += checkAdjacent(i, j, input);
            }
        });

        return size;
    };






    const input = [
        [1, 0, 0, 1, 0],
        [1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 1, 0]
    ];

    console.log(riverSizes(input));
}
{
const riverSizes = (input) => {
    let results = []
    input.forEach((row, y) => {
        input.forEach((cell, x) => {
            if (input[y][x] === 1) {
                results.push(checkAdjacent(x, y, input))
            }
        })
    })
    return results
}




const checkAdjacent = (x, y, input) => {
    input[y][x] = 0; // mark cell as visited
    let size = 1;

    [[x + 1, y], [x, y + 1], [x - 1, y], [x, y - 1]].forEach(([i, j]) => {

        if (input[j] && input[j][i]) {
            size += checkAdjacent(i, j, input);
        }
    });

    return size;
};

const input = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
];

console.log(riverSizes(input))}

const riverSizes=(input)=>{
    let results=[]
    input.forEach((row,y)=>{
        input.forEach((cell,x)=>{
          if(input[y][x]===1){
            results.push(checkAdjacent(x,y,input))
          }
        })
    })
    return results
}

const checkAdjacent=(x,y,input)=>{
    input[y][x]=0
    let size=1
    [[x + 1, y], [x, y + 1], [x - 1, y], [x, y - 1]].forEach(([i, j]) => {

        if (input[j] && input[j][i]) {
            size += checkAdjacent(i, j, input);
        }
    });

    return size;
}
const input = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
];

console.log(riverSizes(input))
// class Graph{
//     constructor(){
//         this.adjecencyList={}
//     }

//     addVertex(vertex){
//         if(!this.adjecencyList[vertex]){
//             this.adjecencyList[vertex]=new Set()
//         }
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjecencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjecencyList[vertex2]){
//             this.addVertex(vertex2)
//         }

//         this.adjecencyList[vertex1].add(vertex2)
//         this.adjecencyList[vertex2].add(vertex1)
//     }

//     removeEdge(vertex1,vertex2){
//         this.adjecencyList[vertex1].delete(vertex2)
//         this.adjecencyList[vertex2].delete(vertex1)
//     }

//     removeVertex(vertex){
//         if(!this.adjecencyList[vertex]){
//             return
//         }
//         for(let adjacentVertex of this.adjecencyList[vertex]){
//             this.removeEdge(vertex,adjacentVertex)
//         }

//         delete this.adjecencyList[vertex]
//     }

//     hasEdge(vertex1,vertex2){
//         return(
//             this.adjecencyList[vertex1].has(vertex2) &&
//             this.adjecencyList[vertex2].has(vertex1)
//         )
//     }

//     display(){
//         for(let vertex in this.adjecencyList){
//             console.log(vertex +"-->"+[...this.adjecencyList[vertex]]);
//         }
//     }
// }

// const graph=new Graph()

// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")

// graph.addEdge("A","B")
// graph.addEdge("B","C")


// graph.display()
// console.log(graph.hasEdge("A","B"));
// console.log(graph.hasEdge("A","C"));
// // graph.removeEdge("A","B")
// graph.removeVertex("B")
// graph.display()

