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
}

let myLinkedList = new LinkedList(4);
myLinkedList.push(5);
myLinkedList.push(6);
myLinkedList.push(7);
myLinkedList.printList();
