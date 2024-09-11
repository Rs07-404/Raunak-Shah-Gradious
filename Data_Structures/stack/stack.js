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



function precedence(operator){
    if(operator === '+' || operator === '-'){
        return 0;
    }else if(operator === '*' || operator === '/'){
        return 1;
    }else{
        return 2;
    }
}

function apply_operator(operators, values){
    operator = operators.pop();
    let right = values.pop();
    let left = values.pop();

    if(operator === '+'){
        values.push(left + right);
    }else if(operator === '-'){
        values.push(left - right);
    }else if(operator === '*'){
        values.push(left * right);
    }else if(operator === '/'){
        values.push(left / right);
    }
}

function solve_infix(expression){
    expression = "(" + expression + ")";
    
    let operators = new Stack();
    let values = new Stack();

    let  i = 0;

    while(i < expression.length){
        if(!isNaN(parseInt(expression[i]))){
            let j = 1;
            while ((j < expression.length) && (!isNaN(parseInt(expression[j]))) || (parseInt(expression[j]) === '.')){
                j++;
            }
            values.push(parseFloat(expression.slice(i,j)));
            i = j-1;
        }else if("+-*/".includes(expression[i])){
            while (!operators.is_empty() && "+-*/".includes(operators.peek()) && precedence(operators.peek()) >= precedence(expression[i]) ){
                apply_operator(operators);
            }
            operators.push(expression[i]);
        }else if(expression[i] === '('){
            operators.push(expression[i])
        }else if(expression[i] === ')'){
            while(!operators.is_empty() && operators.peek() != '('){
                operators.pop();
            }
        }
        i++;
    }

    while(!operators.is_empty()){
        apply_operator(operators, values);
    }

    return values.pop();

}


let expression = "(2+23)";
console.log(solve_infix(expression));