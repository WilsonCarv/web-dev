'use strict';
var _a;
let person = {
	name: 'John',
	age: 30
};
console.log(person.name); // John
//typeScript advance topics
// Path: typescript/advance.ts
// 1. Optional Chaining
// Optional chaining is a feature that allows you to access deeply nested properties without worrying if the property exists or not.
// It is denoted by a question mark (?) and stops the evaluation if the property is null or undefined.
// It is useful when you are working with APIs that return nested objects.
// For example, consider the following
let user = {
	name: 'John',
	address: {
		street: 'Main Street',
		city: 'New York',
		zip: '10044'
	}
};
console.log((_a = user.address) === null || _a === void 0 ? void 0 : _a.city); // New York
// 2. Nullish Coalescing
// Nullish coalescing is a feature that allows you to provide a default value when the value is null or undefined.
let personName = null;
let username = personName !== null && personName !== void 0 ? personName : 'Guest';
console.log(username); // Guest
// 3. Template Literals
// Template literals are string literals that allow embedded expressions.
// You can use multi-line strings and string interpolation features with them.
let name2 = 'John';
let message = `Hello ${name2}`;
console.log(message); // Hello John
// 4. Destructuring
// Destructuring is a way to extract values from objects and arrays and assign them to variables.
let user2 = {
	name: 'John',
	age: 30
};
let { name: userName, age: userAge } = user2;
console.log(userName); // John
// 5. Rest Parameters
// Rest parameters allow you to represent an indefinite number of arguments as an array.
function sum(...numbers) {
	return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
// 6. Spread Syntax
// Spread syntax allows you to expand an array or object into individual elements.
let numbers = [1, 2, 3];
console.log(...numbers); // 1 2 3
let person3 = { name: 'John', age: 30 };
let personCopy = Object.assign({}, person3);
console.log(personCopy); // { name: 'John', age: 30 }
// 7. Default Parameters
// Default parameters allow you to initialize a function parameter with a default value if no argument is provided.
function greet(message = 'Hello') {
	console.log(message);
}
greet(); // Hello
// 8. Arrow Functions
// Arrow functions are a shorthand syntax for writing function expressions.
// They have a more concise syntax compared to regular functions.
let add = (a, b) => a + b;
console.log(add(10, 20)); // 30
// 9. Classes
// Classes are a blueprint for creating objects with properties and methods.
// They are a fundamental part of object-oriented programming in JavaScript.
class Person2 {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	greet() {
		console.log(`Hello, my name is ${this.name}`);
	}
}
let person2 = new Person2('John', 30);
person2.greet(); // Hello, my name is John
//More advance topics not modules
// 10. Generics
// Generics are a way to create reusable components in TypeScript.
// They allow you to define the type of a function or class at a later point.
function identity(arg) {
	return arg;
}
let output = identity('Hello');
console.log(output); // Hello
// 11. Enums
// Enums are a way to define a set of named constants.
// They make it easier to document intent, or create a set of distinct cases.
var Color;
(function (Color) {
	Color[(Color['Red'] = 0)] = 'Red';
	Color[(Color['Green'] = 1)] = 'Green';
	Color[(Color['Blue'] = 2)] = 'Blue';
})(Color || (Color = {}));
let color = Color.Green;
console.log(color); // 1
// 12. Type Assertions
// Type assertions allow you to override the default type inference in TypeScript.
// It is like type casting in other languages.
let message2;
message2 = 'abc';
let endsWithC = message2.endsWith('c');
console.log(endsWithC); // true
// 13. Type Guards
// Type guards are a way to check the type of a variable at runtime.
// They are useful when working with union types.
function process(input) {
	if (typeof input === 'string') {
		return input.toUpperCase();
	} else {
		return input.toFixed(2);
	}
}
console.log(process('abc')); // ABC
console.log(process(123.456)); // 123.46
let c = { a: 1, b: 2 };
console.log(c); // { a: 1, b: 2 }
// 15. Union Types
// Union types allow you to combine multiple types into one.
// The resulting type can be one of the specified types.
let result;
result = 'abc';
console.log(result); // abc
result = 123;
console.log(result); // 123
let person4 = {
	name: 'John',
	age: 30
};
console.log(person4); // { name: 'John', age: 30 }
let dict = {
	name: 'John',
	age: '30'
};
console.log(dict); // { name: 'John', age: '30' }
// 18. Decorators
// Decorators are a design pattern that allows you to add behavior to a class or its members.
// They are a special kind of declaration that can be attached to a class declaration
// method, accessor, property, or parameter.
function log(target, key) {
	console.log(`${key} was called`);
}
class Calculator {
	//@log('add', 'subtract')
	add(x, y) {
		return x + y;
	}
}
let calculator = new Calculator();
console.log(calculator.add(1, 2)); // add was called, 3
// 19. Mixins
// Mixins are a way to combine reusable components in a single object.
// They are similar to multiple inheritance but implemented in a different way.
// Mixins are a flexible way to reuse functionality across multiple classes.
class Jumpable {
	jump() {
		console.log('Jumping');
	}
}
class Duckable {
	duck() {
		console.log('Ducking');
	}
}
class Character extends Jumpable {
	constructor(name) {
		super();
		this.name = name;
	}
}
let character = new Character('Mario');
character.jump(); // Jumping
let person5 = {
	name: 'John'
};
console.log(person5.age); // undefined
// The pipe symbol (|) is used to denote union types in TypeScript.
// It means that the variable can have one of the specified types.
// For example:
let result2;
result2 = 'abc';
