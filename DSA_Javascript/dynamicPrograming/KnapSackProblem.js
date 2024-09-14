//Recursion with memoization
function knapsackNithMemo(weight, value, n, w) {
    const memo = Array.from(Array(n+1), () => Array(w+1).fill(0));
    function knapSackUtil(weight, value, n, w) {
    if(n == 0)
        return 0;
    
    if(memo[n][w] != 0)
        return memo[n][w];
    
    if(weight[n-1] > w) {
        memo[n-1] [w] = knapSackUtil(weight, value, n-1, w);
        return memo[n-1][w];
    }
    else {
        memo[m-1][w] = Math.max(knapsack(weight, value, n-1, w - weight[n-1]), knapsack(weight, value, n-1, w));
        return meno[n-1][w];
    }
    }
    return memo[n+1][w+1];
}
    //Top down approch

// console.log(knapsackNithMemo())