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
	shift() {
		if (!this.head) return undefined;
		let temp = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
			this.head.previous = null;
			temp.next = null;
		}
		this.length--;
		return temp;
	}
	get(index) {
		if (index < 0 || index >= this.length) return undefined;
		let temp = this.head;
		if (index < this.length / 2) {
			for (let i = 0; i < index; i++) {
				temp = temp.next;
			}
		} else {
			temp = this.tail;
			for (let i = this.length - 1; i > index; i--) {
				temp = temp.previous;
			}
		}
		return temp;
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
		if (index === this.length) return !!this.push(value);
		if (index === 0) return !!this.unshift(value);
		const newNode = new Node(value);
		const before = this.get(index - 1);
		const after = before.next;
		before.next = newNode;
		newNode.previous = before;
		newNode.next = after;
		after.previous = newNode;
		this.length++;
		return true;
	}
	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === this.length - 1) return this.pop();
		if (index === 0) return this.shift();
		const removeNode = this.get(index);
		const before = removeNode.previous;
		const after = removeNode.next;
		before.next = after;
		after.previous = before;
		removeNode.next = null;
		removeNode.previous = null;
		this.length--;
		return removeNode;
	}
}

let myLinkedList = new DoubleLinkedList(10);
myLinkedList.push(5);
myLinkedList.push(16);
myLinkedList.push(20);
myLinkedList.push(30);
myLinkedList.push(40);
myLinkedList.push(50);
myLinkedList.printList();
