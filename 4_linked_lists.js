class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    // represents the full list
    constructor() {
        this.next = null;
    }

    append(value, next) {
        // adds a new node containing value to the end of the list
        if (next === undefined && this.next === null) {
            this.next = new Node(value);
            return;
        } else if (next === undefined && this.next !== null) {
            this.append(value, this.next);
        } else if (next !== undefined && next.next === null) {
            next.next = new Node(value);
            return;
        } else {
            this.append(value, next.next);
        }
    }

    prepend(value) {
        // adds a new node containing value to the start of the list
        if (this.next !== null) {
            let node = new Node(value);
            node.next = this.next;
            this.next = node;
        } else if (this.next === null) {
            this.next = new Node(value);
        }
    }

    size(next) {
        // returns the total number of nodes in the list
        if (this.next === null) {
            return 0;
        } else if (next === undefined && this.next !== null) {
            return 1 + this.size(this.next);
        } else if (next !== undefined && next.next === null) {
            return 0;
        } else {
            return 1 + this.size(next.next);
        }
    }

    head() {
        // returns the first node in the list
        return this.next;
    }

    tail(next) {
        // returns the last node in the list
        if (this.next === null) {
            return this.next;
        } else if (next === undefined && this.next !== null) {
            return this.tail(this.next);
        } else if (next !== undefined && next.next === null) {
            return next;
        } else {
            return this.tail(next.next);
        }
    }

    at(index, next, counter = 0) {
        // returns the node at the given index
        if (this.next === null) {
            return this.next;
        } else if (next === undefined && this.next !== null) {
            let resultNextNode = this.at(index, this.next, counter);
            if (resultNextNode !== null) {
                return resultNextNode;
            } else {
                let valueOfIndex = index === counter ? this.value : null;
                return valueOfIndex;
            }
        } else if (next !== undefined && next.next === null) {
            let valueOfIndex = index === counter ? next.value : null;
            return valueOfIndex;
        } else {
            let resultNextNode = this.at(index, next.next, counter + 1);
            if (resultNextNode !== null) {
                return resultNextNode;
            } else {
                let valueOfIndex = index === counter ? next.value : null;
                return valueOfIndex;
            }
        }
    }

    pop(next) {
        // removes the last element from the list
        if (this.next === null) {
            return;
        } else if (next === undefined && this.next !== null) {
            let nodeBeforeLast = this.pop(this.next);
            if (nodeBeforeLast === true) {
                this.next = null;
            }
        } else if (next !== undefined && next.next === null) {
            return true;
        } else {
            let nodeBeforeLast = this.pop(next.next);
            if (nodeBeforeLast === true) {
                next.next = null;
            }
        }
    }

    contains(value, next) {
        // returns true if the passed in value is in the list and otherwise returns false
        if (this.next === null) {
            return false;
        } else if (next === undefined && this.next !== null) {
            let contains = this.contains(value, this.next);
            if (contains === true) {
                return true;
            } else {
                let testResult = this.value === value ? true : false;
                return testResult;
            }
        } else if (next !== undefined && next.next === null) {
            let testResult = next.value === value ? true : false;
            return testResult;
        } else {
            let contains = this.contains(value, next.next);
            if (contains === true) {
                return true;
            } else {
                let testResult = next.value === value ? true : false;
                return testResult;
            }
        }
    }

    find(value, next, counter = 0) {
        // returns the index of the node containing value, or null if not found
        if (this.next === null) {
            return null;
        } else if (next === undefined && this.next !== null) {
            let resultNextNode = this.find(value, this.next, counter);
            let index = this.value === value ? counter : resultNextNode;
            return index;
        } else if (next !== undefined && next.next === null) {
            let index = next.value === value ? counter : null;
            return index;
        } else {
            let resultNextNode = this.find(value, next.next, counter + 1);
            let index = next.value === value ? counter : resultNextNode;
            return index;
        }
    }

    toString(next) {
        // represents the LinkedList objects as strings
        if (this.next === null) {
            return "null";
        } else if (next === undefined && this.next !== null) {
            return `${this.toString(this.next)}`;
        } else if (next !== undefined && next.next === null) {
            return `( ${next.value} ) -> null`;
        } else {
            return `( ${next.value} ) -> ${this.toString(next.next)}`;
        }
    }
}

// ---- Test data ----
// -- Create new LinkedList --
let list = new LinkedList();
console.log("*** No data ***");
console.log("LinkedList without data:", list.toString());

// -- Add data --
list.append("one");
list.append("two");
list.append("three");
list.append("four");
console.log("LinkedList with data.", list.toString());

// -- Prepend data --
list.prepend("five");
console.log("LinkedList after prepending data:", list.toString());

// -- Size --
console.log("Size of the LinkedList:", list.size());

// -- Pop data --
list.pop();
console.log("LinkedList after popping off data:", list.toString());

// -- Find --
console.log("Is 'one' in LinkedList:", list.find("one"));
console.log("Is 'three' in LinkedList:", list.find("three"));

// -- Contains --
console.log("LinkedList contains 'one':", list.contains("one"));
console.log("LinkedList contains 'six':", list.contains("six"));

// -- At --
console.log("At index 0 in LinkedList", list.at(0));
console.log("At index 1 in LinkedList", list.at(1));
console.log("At index 3 in LinkedList", list.at(3));

// -- Head --
console.log("LinkedList head:", list.head());

// -- Tail --
console.log("LinkedList tail:", list.tail());
