function lengthOfLongestSubstring (s){// Don't change the number of parameters 
     //Please write your return statement here 
     let hash = new Map (); 
     let max = 0 ; 
     i = 0 
     for (let j = 0 ; j <s .length ; j ++ ){
          let n = 0 ; 
          for (let j = i ; j <s .length ; j ++ ){
               if (hash .has (s .charAt (j )) && hash .get (s .charAt (j )) >= i ){
                    i = hash .get (s .charAt (j )) + 1 ; 
               }
               
               hash .set (s .charAt (j ), j ); 
               max = Math .max (max , j - i + 1 )
          }
     }
     
     return max ; 
     }

console.log(lengthOfLongestSubstring("qwerty"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("abcdabcdabcd"));
console.log(lengthOfLongestSubstring("abcd"));