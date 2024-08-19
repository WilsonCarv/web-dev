class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.previous = null;
	}
}
class DoubleLinkedList {
	constructor(value) {
		const newNode = new Node(value);
		this.head = newNode;
		this.tail = this.head;
		this.length = 1;
	}
	printList() {
		let temp = this.head;
		while (temp !== null) {
			console.log(temp);
			temp = temp.next;
		}
	}
	push(node) {
		const newNode = new Node(node);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			newNode.previous = this.tail;
			this.tail = newNode;
		}
		this.length++;
	}
	pop() {
		if (!this.head) return undefined;
		let temp = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = this.tail.previous;
			this.tail.next = null;
			temp.previous = null;
		}
		this.length--;
		return temp;
	}
	unshift(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.head.previous = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
	}
}

let myLinkedList = new DoubleLinkedList(10);
myLinkedList.push(5);
myLinkedList.push(16);
myLinkedList.printList();
