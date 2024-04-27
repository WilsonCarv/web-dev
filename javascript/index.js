class Node {
	constructor(root) {
		this.root = root;
	}

	add(node) {
		this.root = new Node(node);
		if (this.root.left) {
			this.root.left.add(node);
		} else {
			this.root.left = new Node(node);
		}
		console.log(this.root.left);
	}
}
const node = new Node(1);
node.add(2);

//JS string methods
const person = 'John Doe 12';
const secondName = 'David';
console.log(person.length);
console.log(person.charAt(0));
for (let i = 0; i <= person.length; i++) {
	console.log(person.charAt(i));
}
for (let i = person.length - 1; i >= 0; i--) {
	console.log(person.charAt(i));
}

let counter = 0;
while (counter < person.length) {
	console.log(person.charAt(counter));
	counter++;
}

console.log(person.slice(0, 5));
console.log(person.substring(0, 5));
console.log(person.repeat(4));
console.log(person.replace(/[]/i, ''));
console.log(secondName.split(''));

console.log(secondName.indexOf('a'));
console.log(secondName.indexOf('W'));

console.log(person.lastIndexOf('o'));
console.log(person.includes('J'));
console.log(person.includes('w'));

console.log(secondName.startsWith('D'));

// numbers methods
let x = 9.5656;

console.log(x.toFixed(2));

console.log(Number('123'));
console.log(parseInt('1234'));
console.log(parseFloat('123456.4545'));

//Arrays methods

let numbers = [1, 2, 3, 4, 7, 8];
console.log(numbers.length);
console.log(numbers.toString());
console.log(numbers.join(','));
console.log(numbers.at(0));
console.log(numbers.pop());
console.log(numbers.push(9));
console.log(numbers.shift());
console.log(numbers.unshift(1, 2, 4));

let arrayOfNumbers = [
	[1, 23],
	[456, 45]
];
console.log(arrayOfNumbers.flat());

console.log(numbers.splice(2, 4, 100));
console.log(numbers.slice(2));
console.log(numbers.includes(100));
console.log(numbers.find(x => x == 100));
console.log(numbers.filter(x => x >= 10));
numbers = [...numbers, 1, 2, 3];

numbers.forEach(x => console.log(x));
let newValues = numbers.map(x => x * 2);
console.log(newValues);
console.log(newValues.flatMap(x => x / 2));

const newReducedNumber = [1, 2].reduce((acc, x) => acc + x, 0);
console.log(newReducedNumber);
const items = [
	{ name: 'Bike', price: 100 },
	{ name: 'TV', price: 200 },
	{ name: 'Album', price: 10 }
];
const total = items.reduce((acc, item) => acc + item.price, 0);
console.log(total);
// reduce with objects
const items2 = [
	{ name: 'Bike', price: 100 },
	{ name: 'TV', price: 200 },
	{ name: 'Album', price: 10 }
];
const total2 = items2.reduce((acc, item) => {
	acc[item.name] = item.price;
	return acc;
}, {});
console.log(total2);

//reduce with arrays
const items3 = [1, 2, 3, 4, 5];
const value = items3.reduce((acc, item) => {
	acc.push(item);
	return acc;
}, []);
console.log(value);

const people = [
	{
		name: 'Kyle',
		age: 26
	},
	{
		name: 'John',
		age: 31
	},
	{
		name: 'Sally',
		age: 42
	},
	{
		name: 'Jill',
		age: 42
	}
];
const groupedPeople = people.reduce((current, acc, index, array) => {
	console.log(index);
	console.log(array);
	const age = acc.age;
	if (current[age] == null) current[age] = [];
	current[age].push(acc);
	return current;
}, {});
console.log(groupedPeople);
