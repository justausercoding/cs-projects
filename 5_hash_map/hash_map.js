import { Node } from "./modules/node.js";

class HashMap {
    constructor() {
        this.totalBuckets = 16;
        this.list = new Array(this.totalBuckets).fill(null);
        this.loadFactor = 0.75;
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.totalBuckets;
        }
        return hashCode;
    }

    #growth() {
        this.totalBuckets = this.totalBuckets * 2;

        let entries = this.entries();

        this.list = new Array(this.totalBuckets).fill(null);

        for (let entry of entries) {
            this.set(entry[0], entry[1]);
        }
    }

    set(key, value) {
        if (this.length() > this.loadFactor * this.totalBuckets) {
            this.#growth();
        }

        let hashCode = this.hash(key);
        let head = this.list[hashCode];

        if (!head) {
            this.list[hashCode] = new Node(key, value);
            return;
        }

        let currentNode = head;
        while (true) {
            if (currentNode.key === key) {
                if (currentNode.value !== value) currentNode.value === value;
                return;
            }

            if (!currentNode.nextNode) {
                currentNode.nextNode = new Node(key, value);
                console.log("Just set:", key, value);
                return;
            }

            currentNode = currentNode.nextNode;
        }
    }

    get(key) {
        let hashCode = this.hash(key);
        let currentNode = this.list[hashCode];

        while (true) {
            if (!currentNode) return null;
            if (currentNode.key === key) return currentNode.value;
            currentNode = currentNode.nextNode;
        }
    }

    has(key) {
        let hashCode = this.hash(key);
        let currentNode = this.list[hashCode];

        while (true) {
            if (!currentNode) return false;
            if (currentNode.key === key) return true;
            currentNode = currentNode.nextNode;
        }
    }

    remove(key) {
        let hashCode = this.hash(key);
        let head = this.list[hashCode];

        if (!head) return false;
        if (head.key === key) {
            this.list[hashCode] = head.nextNode;
            return true;
        }

        let currentNode = head;

        while (true) {
            if (!currentNode.nextNode) return false;

            if (currentNode.nextNode.key === key) {
                currentNode.nextNode = currentNode.nextNode.nextNode;
                return true;
            }

            currentNode = currentNode.nextNode;
        }
    }

    length() {
        let sumNodes = 0;
        for (let i = 0; i < this.totalBuckets; i++) {
            let currentNode = this.list[i];

            while (true) {
                if (currentNode) sumNodes++;
                else break;
                currentNode = currentNode.nextNode;
            }
        }
        return sumNodes;
    }

    clear() {
        for (let i = 0; i < this.totalBuckets; i++) {
            this.list[i] = null;
        }
        this.totalBuckets = 16;
    }

    keys() {
        let entries = [];
        for (let i = 0; i < this.totalBuckets; i++) {
            let currentNode = this.list[i];

            while (true) {
                if (currentNode) entries.push(currentNode.key);
                else break;
                currentNode = currentNode.nextNode;
            }
        }
        return entries;
    }

    values() {
        let entries = [];
        for (let i = 0; i < this.totalBuckets; i++) {
            let currentNode = this.list[i];

            while (true) {
                if (currentNode) entries.push(currentNode.value);
                else break;
                currentNode = currentNode.nextNode;
            }
        }
        return entries;
    }

    entries() {
        let entries = [];
        for (let i = 0; i < this.totalBuckets; i++) {
            let currentNode = this.list[i];

            while (true) {
                if (currentNode) entries.push([currentNode.key, currentNode.value]);
                else break;
                currentNode = currentNode.nextNode;
            }
        }
        return entries;
    }
}

export { HashMap };
