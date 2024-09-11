/** Given two strings text1 and text2, return the length of their longest common subsequence.
If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original
string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

Example 1:

Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
**/

function answer(s, t){
    if(s[n] == t[n]){
        return 1 + answer(s[n-1],t[n-1])
    }else{
        return Math.max(answer )
    }
}

function longestcommonSubsequence(s, t){
    const memo = [];
    
    for(let i = 0; i < s.length; i ++){
        memo[i] = [];
        for(let j = 0; j < t.length; j++){
            memo[i][j] = -1;
        }
    }

    function solve(s, t, n, m){
        if( n < 0 || m < 0)
            return 0;

        if(memo[m][n] !== -1){
            return memo[m][n]
        }

        if(s[n] == t[m]){
            memo[m][n] = 1 + solve(s, t, n-1, m-1)
        }else{
            memo[m][n] = Math.max(solve(s, t, n-1, m), solve(s, t, n, m-1));
        }
        return memo[m][n];
    }
    return solve(s, t, s.length -  1, t.length - 1);
}

function longestcommonSubsequenceBT(s, t){
    const db = [];
    
    for(let i = 0; i < s.length; i ++){
        db[i] = [];
        for(let j = 0; j < t.length; j++){
            db[i][j] = -1;
        }
    }

    function solve(s1, s2){
        const m = s1.length;
        const n = s2.length;
        const dp = Array.from({length: m + 1}, () => Array.from({length: n + 1}), () => 0);
        for(let i = 0; i <= m; i++){
            for(let j = 0; j <= n; j++){
                if(s1[i-1] == s2[j-1]){
                    db[i][j] = 1 + dp[i-1][j-1]
                }else{
                    dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
                }
            }
        }
        return dp
    }
    return solve(s,t)
}


console.log(longestcommonSubsequenceBT("abcdef","sdfsda"));
console.log(longestcommonSubsequence("abcdef","sdfsda"));