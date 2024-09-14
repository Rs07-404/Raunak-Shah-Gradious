class Queue{
    constructor(){
        this.items = [];
    }

    isEmpty(){
        return (this.items.length === 0);
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        if(this.isEmpty){
            return "Underflow";
        }
        return this.items.shift();
    }

    size(){
        return this.items.length;
    }

    printQueue() {
        let str = "";
        for(let i = 0; i < this.items; i++){
            str = str + this.items[i] + " ";
        }
        console.log(str);
    }
}