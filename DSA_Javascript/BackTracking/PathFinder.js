/* You are given a square matrix of order N x N where each cell contains
either a 0 or a 1. A 0 indicates that the cell is blocked and cannot be
traversed by the rat, while a 1 indicates that the cell is open and the
rat can move through it. The rat starts at the top-left corner of the
matrix (position (0, 0)) and needs to find all possible paths to reach
the bottom-right corner (position (N-1, N-1)). The rat can move in four
directions: up (U), down (D), left (L), and right (R).

Medium

. The rat cannot move outside the bounds of the matrix.
. The rat cannot visit any cell more than once on the same path.
. The rat can only move to adjacent cells that contain a 1.
. If the starting or ending cell is blocked (0), there should be no
paths returned.
. The paths should be returned as a list of strings in
lexicographical order.

Write a code that takes a matrix as input and returns all possible
paths from the top-left to the bottom-right corner as described
above.

Go through the following examples below to understand the
problem better:

Example 1 :

matrix : [[0, 1], [1, 1]]

Output 1 : []

*/

function findAllPaths(m){
    let result = [];
    let n = m.length;
    let visited = Array.from({length:n},()=>Array.from({length:n},()=>0));
    function solve(i,j,move){
        if(i < 0 || j < 0 || i >= n || j >= n || visited[i][j] === 1 || m[i][j] === 0){
            return
        }
        if(i === n - 1 && j === n - 1){
            result.push(move);
            return;
        }
        visited[i][j] = 1;
        solve(i+1,j, move+'D');
        solve(i-1,j, move+'U');
        solve(i,j+1, move+'R');
        solve(i,j-1, move+'L');
        visited[i][j] = 0;
    }

    if(m[0][0] === 1){
        solve(0,0,'');
    }
    return result;
}

let m = [[1, 1, 1],[0, 1, 1],[0, 1, 1]];
console.log(findAllPaths(m));