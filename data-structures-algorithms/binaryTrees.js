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
