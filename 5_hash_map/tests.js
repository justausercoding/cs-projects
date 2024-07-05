import { HashMap } from "./hash_map.js";

let hashMap = new HashMap();
console.log("\n\n--------- set() ---------");
hashMap.set("bottle", "blue");
hashMap.set("keyboard", "white");
hashMap.set("ball", "green");
hashMap.set("computer", "black");
hashMap.set("apple", "red");
hashMap.set("banana", "yellow");
hashMap.set("carrot", "orange");
hashMap.set("dog", "brown");
hashMap.set("elephant", "gray");
hashMap.set("frog", "green");
hashMap.set("grape", "purple");
hashMap.set("hat", "black");
hashMap.set("ice cream", "white");
hashMap.set("jacket", "blue");
hashMap.set("kite", "pink");
hashMap.set("lion", "golden");
hashMap.set("table", "white");

console.log("\n\n--------- get() ---------");
console.log("Get value 'grape':", hashMap.get("grape"));
console.log("Get value 'keyboard':", hashMap.get("keyboard"));
console.log("Get value 'ball':", hashMap.get("ball"));
console.log("Get value 'elephant':", hashMap.get("elephant"));
console.log("Get value 'eleven':", hashMap.get("eleven"));

console.log("\n\n--------- has() ---------");
console.log("Has value 'hat':", hashMap.has("hat"));
console.log("Has value 'keyboard':", hashMap.has("keyboard"));
console.log("Has value 'ball':", hashMap.has("ball"));
console.log("Has value 'computer':", hashMap.has("computer"));
console.log("Has value 'eleven':", hashMap.has("eleven"));

console.log("\n\n--------- length() ---------");
console.log("Length of hash map:", hashMap.length());

console.log("\n\n------ keys() ---------");
console.log("Keys:", hashMap.keys());

console.log("\n\n--------- values() ---------");
console.log("Values:", hashMap.values());

console.log("\n\n--------- entries() ---------");
console.log("Entries:", hashMap.entries());

console.log("\n\n--------- remove() and entries() ---------");
console.log("Removing 'hat'");
hashMap.remove("hat");
console.log("Entries:", hashMap.entries());

console.log("\n\n--------- clear() and entries() ---------");
hashMap.clear();
console.log("Entries:", hashMap.entries());
