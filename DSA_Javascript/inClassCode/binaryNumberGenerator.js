function generateBinaryNumbers(n){
    let queue = ["1"];
    let numbers = [];
    while(n > 0){
        let num = queue.shift();
        numbers.push(num);
        queue.push(num+"0");
        queue.push(num+"1");
        n--;
    }
    return numbers;
}

console.log(generateBinaryNumbers(10));