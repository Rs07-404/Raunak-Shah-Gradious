// Backtracking is to find all solution to a problem
// It is a methodological way to try out various sequences of choices

class BackTracking{
    solution(nums){
        const result = [];
        if(nums === null){
            return result;
        }
        this.backTracking(nums, [], result);
        return result;
    }

    backTracking(nums, answer, result){
        if(answer.length === nums.length){
            result.push(...answer);
            return
        }
        for(let i = 0; i < nums.length; i++){
            if(answer.includes(nums[i])){
                continue;
            }
            answer.push(nums[i]);
            this.backTracking(nums, answer, result);
            answer.pop();
        }

    }

    solveQueen(n){
        const result = [];
        const board = Array.from({length : n}, ()=> Array.from({length : n}, ()=> '.')); //Create a board with . in all cells
        

        function isSafe(row, col){
            for(let i = 0; i < row; i ++){
                if(board[i][col] == 'Q'){
                    return false
                }
            }

            // For left Diagonal
            for (let i = row, j = col; i >= 0 && j >= 0; i--, j--){
                if(board[i][j] === 'Q'){
                    return false;
                }
            }

            // For right Diagonal
            for (let i = row, j = col; i >= 0 && j < n; i--, j++){
                if(board[i][j] === 'Q'){
                    return false;
                }
            }
            return true;
        }

        function backTrack(row){
            if(row == n){
                result.push(board.map(row => row.join(' ')));
            }

            for(let i = 0; i < n; i ++){
                if(isSafe(row, i)){
                    board[row][i] = 'Q';
                    backTrack(row+1);
                    board[row][i] = '.';
                }
            }
        }

        backTrack(0);
        return result;
    }
}


const bt = new BackTracking();
console.log(bt.solution([1,2,3]));
console.log(bt.solveQueen(8));