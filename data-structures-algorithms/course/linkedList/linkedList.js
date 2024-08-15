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
}

let myLinkedList = new LinkedList(10);
myLinkedList.push(5);
myLinkedList.push(6);
myLinkedList.push(7);
console.log(myLinkedList.shift());
myLinkedList.printList();