class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

/**
 *
 *      a
 *      /\
 *     b  c
 *    /\   \
 *   d  e   f
 */

const depthFirstSearch = root => {
	if (!root) return [];
	const stack = [root];
	const result = [];
	while (stack.length > 0) {
		const current = stack.pop();
		result.push(current.val);
		if (current.right) {
			stack.push(current.right);
		}
		if (current.left) {
			stack.push(current.left);
		}
	}
	return result;
};

//recursive
const depthFirstSearchRecursive = root => {
	if (!root) return [];
	const leftValues = depthFirstSearchRecursive(root.left);
	const rightValues = depthFirstSearchRecursive(root.right);
	return [root.val, ...leftValues, ...rightValues];
};

console.log(depthFirstSearch(a)); // a b d e c f

console.log(depthFirstSearchRecursive(a)); // a b d e c f

// Breadth First Search

const breadthFirstSearch = root => {
	if (!root) return [];
	const queue = [root];
	const result = [];
	while (queue.length > 0) {
		const current = queue.shift();
		result.push(current.val);
		if (current.left) {
			queue.push(current.left);
		}
		if (current.right) {
			queue.push(current.right);
		}
	}
	return result;
};

//recursive
const breadthFirstSearchRecursive = (queue, result) => {
	if (queue.length === 0) return result;
	const current = queue.shift();
	result.push(current.val);
	if (current.left) {
		queue.push(current.left);
	}
	if (current.right) {
		queue.push(current.right);
	}
	return breadthFirstSearchRecursive(queue, result);
};

console.log(breadthFirstSearch(a)); // a b c d e f

console.log(breadthFirstSearchRecursive([a], [])); // a b c d e f

// tree level order traversal
const levelOrder = root => {
	if (!root) return [];
	const queue = [root];
	const result = [];
	while (queue.length > 0) {
		const level = [];
		const size = queue.length;
		for (let i = 0; i < size; i++) {
			const current = queue.shift();
			level.push(current.val);
			if (current.left) {
				queue.push(current.left);
			}
			if (current.right) {
				queue.push(current.right);
			}
		}
		result.push(level);
	}
	return result;
};

console.log(levelOrder(a)); // [ [ 'a' ], [ 'b', 'c' ], [ 'd', 'e', 'f' ] ]

//Tree Height of a binary tree
const height = root => {
	if (!root) return 0;
	return 1 + Math.max(height(root.left), height(root.right));
};

console.log(height(a)); // 3

// swap nodes array store the data in array level order

const swapNodes = root => {
	if (!root) return [];
	const queue = [root];
	const result = [];
	while (queue.length > 0) {
		const current = queue.shift();
		result.push(current.val);
		if (current.right) {
			queue.push(current.right);
		}
		if (current.left) {
			queue.push(current.left);
		}
	}
	return result;
};
console.log(swapNodes(a)); // a c b f e d
console.log(swapNodes(a).reverse()); // d e f b c a

// Invert a binary tree
const invertTree = root => {
	if (!root) return null;
	const left = invertTree(root.left);
	const right = invertTree(root.right);
	root.left = right;
	root.right = left;
	return root;
};

//Tree includes
const includes = (root, val) => {
	if (!root) return false;
	if (root.val === val) return true;
	return includes(root.left, val) || includes(root.right, val);
};

console.log(includes(a, 'f')); // true

const nodea = new Node(1);
const nodeb = new Node(5);
const nodec = new Node(4);
const noded = new Node(4);
const nodee = new Node(6);
const nodef = new Node(7);

nodea.left = nodeb;
nodea.right = nodec;
nodeb.left = noded;
nodeb.right = nodee;
nodec.right = nodef;

// tree sum
const sum = root => {
	if (!root) return 0;
	return root.val + sum(root.left) + sum(root.right);
};

console.log(sum(nodea)); // 21

// tree max
const max = root => {
	if (!root) return -Infinity;
	return Math.max(root.val, max(root.left), max(root.right));
};

console.log(max(nodea)); // f

//max root to leaf path sum
const maxPathSum = root => {
	if (!root) return 0;
	return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
};

console.log(maxPathSum(nodea)); // 15
