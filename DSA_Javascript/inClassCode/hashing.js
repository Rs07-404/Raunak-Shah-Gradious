// in => India



class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){ //in
        let total = 0;
        for(let i = 0; i < key.length; i ++){
            total += key.charCodeAt(i); // charCode of i + charcode of n = 105 + 110 = 235
        }
        return total % this.size; // 235 % 10 = 5
    }
    
    set(key, value){
        let index = this.hash(key);
        this.table[index] = value;
    }

    get(key){
        let index = this.hash(key);
        return this.table[index];
    }

    remove(key){
        let index = this.hash(key);
        if(this.table[index]){
            this.table[index] = undefined;
        }
    }

    display(){
        for(let i = 0; i < this.size; i++){
            if(this.table[i] !== undefined){
                console.log(`${i} : ${this.table[i]}`);
            }
        }
    }
}

const table = new HashTable(10);
table.set("in", "India");
table.set("au", "Australia");
table.set("us", "United States");
table.set("uk", "United Kingdom");
table.display();
console.log(table.get("in"));
console.log(table.get("uk"));
table.remove("uk");
table.display();