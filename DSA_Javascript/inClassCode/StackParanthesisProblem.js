class Node{
    constructor(){
        this.data = 0;
        this.back = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.size = 0;
    }

    is_empty(){
        return this.top === null;
    }

    push(element){
        if(this.size === 0){
            this.top = new Node();
            if(this.top === null){
                console.log("Heap Overflow");
                return -1;
            }
            this.top.data = element;
            this.size++;
        }else{
            let temp = new Node();
            if(temp === null){
                console.log("Heap Overflow")
                return -1;
            }
            temp.data = element
            temp.back = this.top
            this.top = temp;
            this.size++;
        }
    }

    pop(){
        if(!this.is_empty()){
            let temp = this.top;
            this.top = this.top.back;
            let data = temp.data;
            this.size--;
            return data;
        }else{
            console.log("Stack is Empty. Pop action cannot be done.\n")
        }
    }

    peek(){
        if(!this.is_empty()){
            return this.top.data===null?false:this.top.data;
        }else{
            console.log("Stack is Empty. Peek action cannot be done.\n")
        }
    }

    size(){
        return this.size;
    }

}

function is_expression_balanced(expression){
    let openeing_brackets = "{[(";
    let closing_brackets = "}])";
    let is_open = false, is_close = false;
    let stack = new Stack();
    let top;

    for(let  i = 0; i < expression.length; i++){
        is_close = is_open = false;
        for(let j = 0; j < 3; j ++){
            if(openeing_brackets[j] === expression[i]){
                is_open = true;
                break;
            }
        }
        if(is_open){
            stack.push(expression[i]);
        }else{
            for(let j = 0; j < 3; j ++){
                if(closing_brackets[j] === expression[i]){
                    is_close = true;
                    break;
                }
            }
            if(is_close){
                if(stack.is_empty()){
                    return false;
                }else{
                    top = stack.pop();
                    if(openeing_brackets.indexOf(top) !== closing_brackets.indexOf(expression[i])){
                        return false;
                    }
                }
            }
        }
    }
    return stack.is_empty();
}

function isValid(paren){
    if(paren === ""){
        return true;
    }else{
        let stack = new Stack();
        let size = paren.length;
        let openeing_brackets = "({[";
        let closing_brackets = ")}]";
        for(let i = 0; i < size; i++){
            if(openeing_brackets.includes(paren[i])){
                stack.push(paren[i]);
            }else{
                if(closing_brackets.includes(paren[i])){
                    if(stack.is_empty()){
                        return false;
                    }else{
                        let top = stack.pop();
                        if(openeing_brackets.indexOf(top) !== closing_brackets.indexOf(paren[i])){
                            return false;
                        }
                    }
                }
            }
        }
        return stack.size === 0;
    }
}



console.log(isValid("([]{})"));

// function isValid(paren){
//     let stack = [];
//     let map = {
//         '(': ')',
//         '{': '}',
//         '[': ']'
//     };
//     for(let char in paren){
//         if(paren[char] === '(' || paren[char] === '{' || paren[char] === '['){
//             stack.push(paren[char]);
//         }else{
//             if(stack.length === 0){
//                 return false;
//             }
//             let top = stack.pop();
//             if(map[top] !== paren[char]){
//                 return false;
//             }
//         }
//     }

//     return stack.length === 0;
// }
