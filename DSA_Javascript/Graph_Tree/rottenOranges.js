let mapsack = [[2,1,0,2,1],[1,0,1,2,1],[1,0,0,2,1]];
console.log(mapsack[0].length);
let r = mapsack.length;
let c = mapsack[0].length;

function isSafe(i,j){
    if((i >= 0) && (i < r) && (j >= 0) && (j <= 0) ){
        return true;
    }
    return false;
}

function rote(map){
    let change = false;
    let no = 2;
    while(true){
        for(let i = 0; i < r; i ++){
            for(let j = 0; j < c; j++){
                if(map[i][j] === no){
                    if(!isSafe(i+1,j) && map[i+1][j] === 1){
                        map[i+1][j] = map[i][j] + 1;
                        change = true;
                    }
                    if(!isSafe(i,j+1) && map[i][j+1] === 1){
                        map[i][j+1] = map[i][j+1] + 1;
                        change = true;
                    }
                    if(!isSafe(i-1,j) && map[i-1][j] === 1){
                        map[i-1][j] = map[i][j] + 1;
                        change = true;
                    }
                    if(!isSafe(i,j-1) && map[i][j-1] === 1){
                        map[i][j-1] = map[i][j] + 1;
                        change = true;
                    }
                }
            }
        }

    if(!change){
        break;
    }
    change = false;
    no++;

    }

    for(let  i = 0; i < r; i ++){
        for(let j = 0; j < c; j ++){
            if(map[i][j] === 1){
                return -1;
            }
        }
    }
    return no - 2;
}

console.log(rote(mapsack));