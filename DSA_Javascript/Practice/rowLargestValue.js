function TreeNode (val ){
    this .val = val ; 
    this .left = this .right = null ; 
    }

function largestValues (root ){// Don't change the number of parameters 
    //Please write your return statement here 
    let result = []; 
    let rows = []; 
    if (root === null ){
         return rows ; 
    }
    const queue = [root , null ]; 
    let currentRow = []; 
    
    while (queue .length >0 ){
         let current = queue .shift (); 
         if (current === null ){
              rows .push (currentRow ); 
              currentRow = []; 
              if (queue .length >0 ){
                   queue .push (null ); 
              }
         }else {
              currentRow .push (current .val ); 
              if (current .left !== null ){
                   queue .push (current .left ); 
              }
              if (current .right !== null ){
                   queue .push (current .right ); 
              }
         }
    }
    for (let row of rows ){
         result .push (Math .max (... row )) ; 
    }
    return result ; 
    }

   
function arrayToBinaryTree (data ){
    if (! data .length )return null ; 
    
    const root = new TreeNode (data [0 ]) ; 
    const queue = [root ]; 
    let i = 1 ; 
    
    while (queue .length &&i <data .length ){
         const current = queue .shift ();
         if (data [i ]!== null ){
              current .left = new TreeNode (data [i ]) ; 
              queue .push (current .left ); 
         }
         i ++ ; 
         if (i <data .length &&data [i ]!== null ){
              current .right = new TreeNode (data [i ]) ; 
              queue .push (current .right ); 
         }
         i ++ ; 
    }
    
    return root ; 
    }
    
    (function (){
    const input = [3,9,20,null,null,15,7] ; 
    const tree = arrayToBinaryTree (input ); 
    
    console .log (largestValues (tree )) ; 
    }) (); 