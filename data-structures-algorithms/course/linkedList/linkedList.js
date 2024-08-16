class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
class LinkedList {
	constructor(value) {
		const newNode = new Node(value);
		this.head = newNode;
		this.tail = this.head;
		this.length = 1;
	}
	printList() {
		let currentNode = this.head;
		while (currentNode !== null) {
			console.log(currentNode.value);
			currentNode = currentNode.next;
		}
	}
	getTail() {
		return this.tail;
	}
	getHead() {
		return this.head;
	}
	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	}
	pop() {
		if (!this.head) return undefined;
		let temp = this.head;
		let pre = this.head;
		while (temp.next) {
			pre = temp;
			temp = temp.next;
		}
		this.tail = pre;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return temp;
	}
	unshift(value) {
		const node = new Node(value);
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
		this.length++;
	}
	shift() {
		if (!this.head) return undefined;
		let temp = this.head;
		if (this.head === this.tail) {
			temp = this.head;
			this.head = null;
			this.tail = null;
		} else {
			temp = this.head;
			this.head = this.head.next;
		}
		this.length--;
		return temp;
	}
	get(index) {
		if (index < 0 || index >= this.length) return undefined;
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}
	set(index, value) {
		let temp = this.get(index);
		if (temp) {
			temp.value = value;
			return true;
		}
		return false;
	}
	insert(index, value) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return this.push(value);
		if (index === 0) return this.unshift(value);
		const newNode = new Node(value);
		const temp = this.get(index - 1);
		newNode.next = temp.next;
		temp.next = newNode;
		this.length++;
		return true;
	}
	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === this.length - 1) return this.pop();
		if (index === 0) return this.shift();
		const before = this.get(index - 1);
		const temp = before.next;
		before.next = temp.next;
		temp.next = null;
		this.length--;
		return temp;
	}
	reverse() {
		if (!this.head) return undefined;
		let temp = this.head;
		this.head = this.tail;
		this.tail = temp;
		let next = temp.next;
		let prev = null;
		for (let i = 0; i < this.length; i++) {
			next = temp.next;
			temp.next = prev;
			prev = temp;
			temp = next;
		}
		return this;
	}
	findMiddleNode() {
		let slow = this.head;
		let fast = this.head;
		while (fast !== null && fast.next !== null) {
			slow = slow.next;
			fast = fast.next.next;
		}
		return slow;
	}
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);
myLinkedList.printList();
console.log(myLinkedList.findMiddleNode());
