function infixToPostix(expression){
    let precedence = {
        "+": 1,
        "-": 1,
        "*": 2,
        "/": 2
    };
    let stack = [];
    let output = "";
    for(let char of expression){
        if(/[a-zA-Z0-9]/.test(char)){
            output += char;
        }else if(char === '('){
            stack.push(char);
        }else if(char === ')'){
            while(stack.length > 0 && stack[stack.length-1]!='('){
                output += stack.pop();
            }
            stack.pop();
        }else if(["+","-","*","/"].includes(char)){
            if(stack.length === 0){
                stack.push(char);
            }else{
                while(precedence[stack[stack.length - 1]] > precedence[char] && stack.length > 0){
                    output += stack.pop();
                }
                stack.push(char);
            }
        }
    }
    while(stack.length > 0){
        output += stack.pop();
    }
    return output;
}

function evaluatePostfix(expression){
    let precedence = {
        "+": 1,
        "-": 1,
        "*": 2,
        "/": 2
    };
    let stack = [];
    for(let char of expression){
        if(/[0-9]/.test(char)){
            stack.push(Number(char));
        }else if(['+','-','*','/'].includes(char)){
            let result = 0;
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            switch(char){
                case '+': {
                    result = operand1 + operand2;
                    break;
                }
                case '-': {
                    result = operand1 - operand2;
                    break;
                }
                case '*': {
                    result = operand1 * operand2;
                    break;
                }
                case '/': {
                    result = operand1 / operand2;
                    break;
                }
            }
            stack.push(result);
        }
    }
    return stack.pop();
}

let expression = "(5+8)*(8-2)";
let postfix = infixToPostix(expression);
console.log(evaluatePostfix(postfix));