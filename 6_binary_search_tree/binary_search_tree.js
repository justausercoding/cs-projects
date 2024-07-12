import { Node } from "./modules/node.js";

class Tree {
    constructor(array) {
        this.array = array;
        this.root = this.buildTree(array);
    }

    buildTree(array) {
        // sort array
        array.sort((a, b) => a - b);

        // remove duplicates
        let arraySorted = [...new Set(array)];

        // build a balanced binary tree and return the root node (level 0)
        let end = arraySorted.length - 1;
        return this.#balancedBinaryTree(arraySorted, 0, end);
    }

    #balancedBinaryTree(arr, start, end) {
        if (start > end) return null;

        let mid = Math.floor((start + end) / 2);
        let node = new Node(arr[mid]);

        node.left = this.#balancedBinaryTree(arr, start, mid - 1);
        node.right = this.#balancedBinaryTree(arr, mid + 1, end);

        return node;
    }

    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
            return;
        }

        let previous = null;
        let current = this.root;

        while (current !== null) {
            if (current.value > value) {
                previous = current;
                current = current.left;
            } else if (current.value < value) {
                previous = current;
                current = current.right;
            } else if (current.value === value) {
                break;
            }
        }

        if (previous.value > value) {
            previous.left = new Node(value);
        } else if (previous.value < value) {
            previous.right = new Node(value);
        }
    }

    delete(value, node = this.root) {
        if (node === null) return;

        if (value < node.value) {
            node.left = this.delete(value, node.left);
        } else if (value > node.value) {
            node.right = this.delete(value, node.right);
        } else {
            if (node.left === null) return node.right;
            else if (node.right === null) return node.left;

            node.value = this.#minValue(node.right);
            node.right = this.delete(node.value, node.right);
        }
        return node;
    }

    #minValue(node) {
        let min = node.value;
        while (node.left !== null) {
            min = node.left.value;
            node = node.left;
        }
        return min;
    }

    find(value) {
        let node = this.root;

        while (true) {
            if (!node) return null;

            if (node.value === value) {
                return node;
            } else if (node.value > value) {
                node = node.left;
            } else if (node.value < value) {
                node = node.right;
            }
        }
    }

    levelOrder() {
        let queue = [];
        let valueArray = [];
        let currentNode = this.root;

        while (true) {
            valueArray.push(currentNode.value);

            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);

            if (queue.length !== 0) {
                currentNode = queue[0];
                queue.shift();
            } else {
                break;
            }
        }
        return valueArray;
    }

    inOrder(node = this.root, array = []) {
        if (!node) return;

        this.inOrder(node.left, array);
        array.push(node.value);
        this.inOrder(node.right, array);

        return array;
    }

    preOrder(node = this.root, array = []) {
        if (!node) return;

        array.push(node.value);
        this.inOrder(node.left, array);
        this.inOrder(node.right, array);

        return array;
    }

    postOrder(node = this.root, array = []) {
        if (!node) return;

        this.inOrder(node.left, array);
        this.inOrder(node.right, array);
        array.push(node.value);

        return array;
    }

    height(node) {
        // height: node --> leaf (longest path)
        if (node === null) return -1;
        return Math.max(this.height(node.left), this.height(node.right)) + 1;
    }

    heightShort(node) {
        // height: node --> leaf (shortest path)
        if (node === null) return -1;
        return Math.min(this.height(node.left), this.height(node.right)) + 1;
    }

    depth(node = this.root) {
        // depth: root --> node
        let depth = 0;
        let currentNode = this.root;

        while (true) {
            if (!node) return null;
            if (currentNode.value === node.value) return depth;

            depth++;

            if (currentNode.value > node.value) {
                currentNode = currentNode.left;
            } else if (currentNode.value < node.value) {
                currentNode = currentNode.right;
            }
        }
    }

    isBalanced() {
        let longestPath = this.height(this.root);
        let shortestPath = this.heightShort(this.root);
        let path = longestPath - shortestPath;

        if (path === 0 || path == -1 || path == 1) return true;
        else return false;
    }

    rebalance() {
        let array = this.levelOrder();
        this.root = this.buildTree(array);
    }

    prettyPrint(node = this.root, prefix = "", isLeft = true) {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }
}

export { Tree };
