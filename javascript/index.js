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

const groupedPeople2 = people.reduceRight((current, acc, index, array) => {
	const age = acc.age;
	if (current[age] == null) current[age] = [];
	current[age].push(acc);
	return current;
}, {});

console.log(groupedPeople2);

const sortedArray = people.toSorted((a, b) => {
	if (a.age > b.age) return 1;
	if (a.age < b.age) return -1;
	return 0;
});
console.log(sortedArray);

const sortedArrayNames = people.sort((a, b) => {
	if (a.name > b.name) return 1;
	if (a.name < b.name) return -1;
	return 0;
});
console.log(sortedArrayNames);

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

const findMaxArray = arr => {
	let len = arr.length;
	let min = Infinity;
	while (len--) {
		if (arr[len] < min) {
			min = arr[len];
		}
	}
	return min;
};

const max = findMaxArray([1, 2, 3, 4, 5]);
console.log(max);

console.log(numbers.some(x => x > 10));
console.log(numbers.every(x => x > 10));

console.log(Array.from('hello'));
const keys = people.keys();

for (let key of keys) {
	console.log(key);
	console.log(people[key]);
}

const entries = people.entries();

for (let entry of entries) {
	console.log(entry);
}

//use of with
const months = ['Jan', 'March', 'April', 'June'];
const myMonths = months.with(1, 'MARCH');
console.log(myMonths);

//spread operator
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5, 6];
console.log(arr2);
//more complex example

const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
const arr5 = [...arr3, ...arr4];
console.log(arr5);

//use of rest operator
function sum(...args) {
	return args.reduce((acc, x) => acc + x, 0);
}
console.log(sum(1, 2, 3, 4, 5));

//sets and maps
const set = new Set([1, 2, 3, 4, 5]);
console.log(set.size);
console.log(set.has(1));
console.log(set.add(6));
console.log(set.delete(6));
console.log(set.entries());
console.log(set.keys());
console.log(set.values());
//console.log(set.clear());
for (let value of set) {
	console.log(value);
}

//Set of objects
const setOfObjects = new Set([{ name: 'John' }, { name: 'Doe' }]);
setOfObjects.add({ name: 'Jane' });
setOfObjects.add({ name: 'Doe' });
console.log(setOfObjects.has({ name: 'Jane' }));
console.log(setOfObjects.has({ name: 'Doe' }));
console.log(setOfObjects.delete({ name: 'Jane' }));
console.log(setOfObjects.keys());
console.log(setOfObjects.size);
for (let value of setOfObjects) {
	console.log(value);
}
const keys2 = setOfObjects.keys();
for (let key of keys2) {
	console.log(key);
}

//Maps
const map = new Map();
map.set('name', 'John');
map.set('age', 30);
console.log(map.get('name'));

const fruits = new Map([
	['apple', 100],
	['banana', 200]
]);
console.log(fruits.size);
console.log(fruits.has('apple'));
console.log(fruits.get('apple'));
const keys3 = fruits.keys();
for (let key of keys3) {
	console.log(key);
	console.log(fruits.get(key));
}
//entries
const entries2 = fruits.entries();
for (let entry of entries2) {
	for (let value of entry) {
		console.log(entry);
		console.log(value);
	}
}
