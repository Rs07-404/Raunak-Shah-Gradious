// Given an array containing only Os and 1s
// find the length of the longest subarray with an equal
// number of Os and 1s. Implement a function that
// returns the length of the longest such subarray.

// Easy

// Go through the following examples below to understand the
// problem better:

// Example 1 :
// nums : [0, 1, 0, 1]
// Output 1 :
// 4

// Example 2 :
// nums : [0, 1, 0]
// Output 2 :
// 2

// Example 3 :
// nums : [0, 1, 0, 1, 0, 0, 1, 1]
// Output 3 :
// 8

// Example 4 :
// nums : [1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1]
// Output 4 :
// 10
function findMaxLength (nums ){// Don't change the number of parameters 
    //Please write your return statement here 
    let hash = new Map (); 
    hash .set (- 1 , 0 ); 
    let max = 0 ; 
    for (let i = 0 ; i <nums .length ; i ++ ){
        let sum = 0 ; 
        if (nums [i ]=== 0 ){
            sum = - 1 + hash .get (i - 1 ); 
            hash .set (i , sum ); 
        }else {
            sum = 1 + hash .get (i - 1 ); 
            hash .set (i , sum ); 
        }
        for (let j = - 1 ; j <hash .size ; j ++ ){
            if (sum === hash .get (j )) {
                max = Math .max (max , (i )- (j + 1 )) ; 
                break ; 
            }
    }
    
}
return max + 1 ; 
}

