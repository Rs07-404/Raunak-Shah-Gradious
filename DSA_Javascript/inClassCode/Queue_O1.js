class Queue{
    constructor(){
        this.items = [];
        this.rear = 0;
        this.front = 0;
    }

    isEmpty(){
        return (this.front === this.rear);
    }

    enqueue(element){
        this.items[this.rear] = element;
        this.rear++;
    }

    dequeue(){
        if(this.isEmpty()){
            return "Underflow";
        }
        let value = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return value;
        
    }

    peek(){
        return this.items[this.front];
    }

    size(){
        return this.rear - this.front;
    }

    printQueue() {
        let str = "";
        for(let i = this.front; i < this.rear; i++){
            str = str + this.items[i] + " ";
        }
        console.log(str);
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.printQueue();
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.printQueue();
console.log(queue.size());
console.log(queue.peek());