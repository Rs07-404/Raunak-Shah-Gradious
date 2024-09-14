// in => India



class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){
        let total = 0;
        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key,value){
        let index = this.hash(key);
        let bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key, value]];
        }else{
            let keyExist = bucket.find((item,key)=>item[0] === key)
            console.log(keyExist);
            if(keyExist){
                keyExist[1] = value
            }else{
                bucket.push([key, value])
            }
        }
    }

    get(key){
        let index = this.hash(key);
        const bucket = this.table[index];
        if(bucket){
            const samekey = bucket.find((item)=>item[0] === key);
            if(samekey){
                return samekey[1];
            }
        }
        return null;
    }

    remove(key){
        let index = this.hash(key);
        const bucket = this.table[index];
        if(bucket){
            const samekey = bucket.find(item=>item[0] === key);
            if(samekey){
                bucket.splice(bucket.indexOf(samekey), 1)
            }
        }
    }

    display(){
        for(let i = 0; i < this.size; i++){
            if(this.table[i] !== undefined){
                const bucket = this.table[i];
                for(let item of bucket){
                    console.log(`${item[0]}: ${item[1]}`);
                }
            }
        }
    }
}

const table = new HashTable(10);
table.set("in", "India");
table.set("in", "Indonesia");
table.set("ni", "India");
table.set("au", "Australia");
table.set("us", "United States");
table.set("uk", "United Kingdom");
table.display();
console.log(table.get("in"));
console.log(table.get("uk"));
console.log(table.get("ni"));
console.log(table.get("in"));
table.remove("uk");
table.display();