/*codevolution YT


collisions:
https://www.youtube.com/watch?v=kTh5nAqCkOA
*/

class HashTable {
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        // this.table[index] = value;  --> code below added to handle collisions (bucket)
        const bucket = this.table[index]
        if(!bucket) {
            this.table[index] = [[key, value]]; //array within smaller array
        } else {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem) {
                sameKeyItem[1] = value;
            } else {
                bucket.push([key, value])
            }
        }
    }

    get(key) {
        const index = this.hash(key);
        // return this.table[index];
        const bucket = this.table[index]
        if(bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem[1]) {
                return sameKeyItem[1]
            }
        }
        return undefined //indicates key does not exist
    }

    remove(key) {
        const index = this.hash(key);
        //this.table[index] = undefined;
        const bucket = this.table[index]
        if(bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem[1]) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
        return undefined //indicates key does not exist

    }

    display() {
        for(let i = 0; i < table.length; i++) {
            if(this.table[i]) {
                console.log(i, this.table[i])
            }
        }
    }
};

console.log('~~~~~~~~~~~~ HASHTABLE ~~~~~~~~~~~~~');


const table = new HashTable(50);

table.set("name", "Marco");
table.set("age", 35);

table.display();

console.log('Hash table:',table.get("name")); // Marco

table.set("mane", "Jane");
console.log('HashTable at current state:',table.display());


console.log('~~~~~~~~~~~~ HASHTABLE 2 ~~~~~~~~~~~~~');

class HashTable2 {
    constructor(size = 50) {
        this.table = new Array(size);  // Initialize the table
        this.size = size;
    }

    // Hash function to convert a key into an index. # --> private method.
    #hash(key) {
        let hash = 0;
        for(let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i); // Generate a hash based on character codes
        }
        return hash % this.size; // Ensure it fits within the size of the table
    }

    // Insert a key-value pair
    set(key, value) {
        const index = this.#hash(key);

        // Handle collisions using seperate chaining (linked List)
        if(!this.table[index]) {
            this.table[index] = []; // Initialize as an array to handle multiple entries
        }
        this.table[index].push([key, value]);
    }

    //Retrieve the value associated with a key
    get(key) {
        const index = this.#hash(key);
        const bucket = this.table[index];

        if(bucket) {
            for(let i = 0; i < bucket.length; i++) {
                if(bucket[i][0] === key) {
                    return bucket [i][1]; // Return value if key matches
                }
            }
        }
        return undefined; // Return undefined if key is not found
    }

    // Remove a key-value pair
    remove(key) {
        const index = this.#hash(key);
        const bucket = this.table[index];

        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    bucket.splice(i, 1);  // Remove the key-value pair
                    return true;
                }
            }
        }
        return false; // Return false if key was not found
    }
};

const hash = new HashTable2();

hash.set("name", "Marco");
hash.set("age", 35);
console.log('Hash table 2:',hash.get("name")); // Marco

hash.set("mane", "Jane");
hash.set("age", 25);
hash.set("career", "doctor");
console.log('Hash Table 2 at current key:', hash.get("mane"));


