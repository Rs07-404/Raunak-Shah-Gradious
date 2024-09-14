function TreeNode(val){
    this.val=val;
    this.left=this.right=null;
    }
    
function inorderTraversal(root){// Don't change the number of parameters
    //Please write your return statement here
    
    if(root!==undefined && root!==null){
        let stack=[];
        let output=[];
        let pointer=root;
        
        while(pointer != null||stack.length > 0){
            while(pointer!=null){
                stack.push(pointer);
                pointer = pointer.left;
            }
            pointer=stack.pop();
            output.push(pointer.val);
            
            pointer = pointer.right;
        }
        return output
    }
    }
    
    
    //Please don't modify the below code
    
    function arrayToBinaryTree(data){
    if(!data.length) return null;
    
    const root=new TreeNode(data[0]);
    const queue=[root];
    let i=1;
    
    while(queue.length && i < data.length){
        const current=queue.shift();
        if(data[i]!==null){
            current.left=new TreeNode(data[i]);
            queue.push(current.left);
        }
        i++;
        if(i < data.length && data[i]!==null){
            current.right=new TreeNode(data[i]);
            queue.push(current.right);
        }
        i++;
    }
    
    return root;
    }
    
    (function(){
    const input=[1,2,3,4,5,6,7,8,9];
    const tree=arrayToBinaryTree(input);
    
    console.log(inorderTraversal(tree));
    })();