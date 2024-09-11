/* 
* Given an m x n 2D binary grid grid which represents
* a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting
adjacent lands horizontally or vertically.
You may assume all four edges of the grid are all surrounded by water.

*/

const numberOfIslands = function(grid){
    if(!grid == null || grid.length <= 0){
        return -1;
    }

    let answer = 0;
    let row = grid.length;
    let col = grid[0].length;
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(grid[i][j] === 1){
                dfs(grid, i, j);
                answer++;
            }
        }
    }
    return answer;
}

const dfs = function(grid, i, j){
    if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] == 0){
        return ;
    }
    grid[i][j] = 0;

    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);

}