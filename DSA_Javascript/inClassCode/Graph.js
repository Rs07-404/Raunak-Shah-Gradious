class Graph{
    constructor(){
        this.adjacencyList = [];
    }
    
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set();
        }
    }
    
    addEdge(v1, v2){
        if(!this.adjacencyList[v1]){
            this.addVertex(v1);
        }
        if(!this.adjacencyList[v2]){
            this.addVertex(v2);
        }

        this.adjacencyList[v1].add(v2);
        this.adjacencyList[v2].add(v1);
    }

    removeEdge(v1, v2){
        if(this.adjacencyList[v1].has(v2)){
            this.adjacencyList[v1].delete(v2);
        }
        if(this.adjacencyList[v2].has(v1)){
            this.adjacencyList[v2].delete(v1);
        }
    }

    displayGraph(){
        for(let vertex in this.adjacencyList){
            console.log(`${vertex} -> ${[...this.adjacencyList[vertex]]}`);
        }
    }

}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('F', 'A');
graph.addEdge('F', 'B');
graph.addEdge('F', 'C');
graph.addEdge('F', 'D');
graph.removeEdge("D","F");
console.log(`DFS -> [${dfs("A", graph.adjacencyList)}]`);
console.log(`BFS -> [${bfs("A", graph.adjacencyList)}]`);
graph.displayGraph();

function dfs(start, adjacencyList, visited = {}){
    visited[start] = true;
    let result = [start];
    for(let neighbhor of adjacencyList[start]){
        if(!visited[neighbhor]){
            result.push(...dfs(neighbhor, adjacencyList, visited));
        }
    }
    return result;
}

// function dfs(start, adjacencyList, visited = {}){
//     visited[start] = true;
//     const result = [start];
//     for (const neighbhor of adjacencyList[start]){
//         if(!visited[neighbhor]){
//             visited[neighbhor] = true;
//             result.push(...dfs(neighbhor, adjacencyList, visited));
//         }
//     }
//     return result;
// }


function bfs(start,adjacencyList){
    let visited = {};
    let queue = [start];
    let result = [];
    visited[start] = true;
    while(queue.length != 0){
        let v = queue.shift();
        result.push(v);
        adjacencyList[v].forEach(neighbhor => {
            if(!visited[neighbhor]){
                visited[neighbhor] = true;
                queue.push(neighbhor)
            }
        });
    }
    return result;
}


// function bfs(start, adjacencyList){
//     const queue = [start];
//     const visited = {};
//     const result = [];
//     visited[start] = true;
//     while(queue.length){
//         let v = queue.shift();
//         result.push(v);
//         adjacencyList[v].forEach((neighbhor)=>{
//             if(!visited[neighbhor]){
//                 visited[neighbhor] = true;
//                 queue.push(neighbhor)
//             }
//         });
//     }
//     return result;
// }