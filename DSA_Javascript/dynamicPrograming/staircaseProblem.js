// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Top-Bottom Approach
function stairMemo(n, memo = {}){
    if(n in memo)
        return memo[n];
    if(n <= 1)
        return 1;

    memo[n] = stairMemo(n-1, memo) + stairMemo(n-2, memo);
    return memo[n];
}

// Bottom-Top Approach
function stairMemoBT(n, memo = {}){
    const dp = [1, 1];
    for(let i = 2; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}
console.log(stairMemo(10));
console.log(stairMemoBT(10));
