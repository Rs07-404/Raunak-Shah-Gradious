function TreeNode (val ){
    this .val = val ; 
    this .left = this .right = null ; 
    }
    
    function getHeight (root ){// Don't change the number of parameters 
        //Please write your return statement here 
        function heightValue (root ){
             if (root === null ){
                  return 0 ; 
             }
             let left = heightValue (root .left ); 
             let right = heightValue (root .right ); 
             return Math .max (left , right )+ 1 ; 
        }
        return root === null ? - 1 : heightValue (root )- 1 ; 
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
    const input = [1,2,3,4,5,6,7,8,9,0] ; 
    const tree = arrayToBinaryTree (input ); 
    
    console .log (getHeight (tree )) ; 
    }) (); 