class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor(value) {
		const newNode = new Node(value);
		this.top = newNode;
		this.length = 1;
	}
	push(value) {
		const node = new Node(value);
		let temp = this.top;
		this.top = node;
		this.top.next = temp;
		this.length++;
	}
	printStack() {
		let temp = this.top;
		while (temp) {
			console.log(temp.value);
			temp = temp.next;
		}
	}

	pop() {
		if (!this.top) return undefined;
		let temp = this.top;
		this.top = this.top.next;
		temp.next = null;
		this.length--;
		return temp;
	}
}

let myStack = new Stack(10);
console.log(myStack.push(5));
console.log(myStack.push(16));
console.log(myStack.push(20));

myStack.printStack();
