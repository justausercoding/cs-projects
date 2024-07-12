import { Tree } from "./binary_search_tree.js";

let bst = new Tree([100, 8, 2, 4, 4, 5, 6, 7]);
console.log("Is balanced?", bst.isBalanced());

bst.insert(10);
bst.insert(20);
bst.insert(40);
bst.insert(7);
bst.prettyPrint();

console.log("find 10", bst.find(10));
console.log("find 11", bst.find(11));
console.log("levelOrder", bst.levelOrder());
console.log("inOrder", bst.inOrder());
console.log("preOrder", bst.preOrder());
console.log("postOrder", bst.postOrder());

console.log("height of node with value 10", bst.height(bst.find(10)));
console.log("height of node with value 4", bst.height(bst.find(4)));

console.log("depth of root node", bst.depth());
console.log("depth of node with value 10", bst.depth(bst.find(10)));
console.log("depth of node with value 4", bst.depth(bst.find(4)));

bst.delete(10);
bst.prettyPrint();

console.log("Is balanced?", bst.isBalanced());
bst.rebalance();
bst.prettyPrint();
