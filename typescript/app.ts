interface Person {
	name: string;
	age: number;
}
let person: Person = {
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
console.log(user.address?.city); // New York

// 2. Nullish Coalescing
// Nullish coalescing is a feature that allows you to provide a default value when the value is null or undefined.

let personName = null;
let username = personName ?? 'Guest';
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

function sum(...numbers: number[]): number {
	return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// 6. Spread Syntax
// Spread syntax allows you to expand an array or object into individual elements.
let numbers = [1, 2, 3];
console.log(...numbers); // 1 2 3

let person3 = { name: 'John', age: 30 };

let personCopy = { ...person3 };
console.log(personCopy); // { name: 'John', age: 30 }

// 7. Default Parameters
// Default parameters allow you to initialize a function parameter with a default value if no argument is provided.
function greet(message: string = 'Hello') {
	console.log(message);
}

greet(); // Hello

// 8. Arrow Functions

// Arrow functions are a shorthand syntax for writing function expressions.
// They have a more concise syntax compared to regular functions.
let add = (a: number, b: number) => a + b;
console.log(add(10, 20)); // 30

// 9. Classes
// Classes are a blueprint for creating objects with properties and methods.
// They are a fundamental part of object-oriented programming in JavaScript.
class Person2 {
	name: string;
	age: number;

	constructor(name: string, age: number) {
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
function identity<T>(arg: T): T {
	return arg;
}

let output = identity<string>('Hello');
console.log(output); // Hello

// 11. Enums
// Enums are a way to define a set of named constants.
// They make it easier to document intent, or create a set of distinct cases.
enum Color {
	Red,
	Green,
	Blue
}

let color: Color = Color.Green;
console.log(color); // 1

// 12. Type Assertions
// Type assertions allow you to override the default type inference in TypeScript.
// It is like type casting in other languages.
let message2;
message2 = 'abc';
let endsWithC = (<string>message2).endsWith('c');

console.log(endsWithC); // true

// 13. Type Guards
// Type guards are a way to check the type of a variable at runtime.
// They are useful when working with union types.
function process(input: string | number) {
	if (typeof input === 'string') {
		return input.toUpperCase();
	} else {
		return input.toFixed(2);
	}
}

console.log(process('abc')); // ABC
console.log(process(123.456)); // 123.46

// 14. Intersection Types
// Intersection types allow you to combine multiple types into one.
// The resulting type will have all properties of all types.
interface A {
	a: number;
}

interface B {
	b: number;
}

type C = A & B;

let c: C = { a: 1, b: 2 };
console.log(c); // { a: 1, b: 2 }

// 15. Union Types
// Union types allow you to combine multiple types into one.
// The resulting type can be one of the specified types.
let result: string | number;
result = 'abc';
console.log(result); // abc
result = 123;
console.log(result); // 123

// 16. Type Aliases
// Type aliases allow you to create a new name for a type.
// They are similar to interfaces but can represent primitives, unions, tuples, and any other types.
type Age = number;
type Person4 = {
	name: string;
	age: Age;
};

let person4: Person4 = {
	name: 'John',
	age: 30
};

console.log(person4); // { name: 'John', age: 30 }

// 17. Index Signatures
// Index signatures allow you to define a type that can have properties with dynamic names.
// They are useful when working with objects that have unknown property names.
interface Dictionary {
	[key: string]: string;
}

let dict: Dictionary = {
	name: 'John',
	age: '30'
};

console.log(dict); // { name: 'John', age: '30' }

// 18. Decorators
// Decorators are a design pattern that allows you to add behavior to a class or its members.
// They are a special kind of declaration that can be attached to a class declaration
// method, accessor, property, or parameter.
function log(target: any, key: string) {
	console.log(`${key} was called`);
}

class Calculator {
	//@log('add', 'subtract')
	add(x: number, y: number) {
		return x + y;
	}
}

let calculator = new Calculator();
console.log(calculator.add(1, 2)); // add was called, 3

// 19. Mixins
// Mixins are a way to combine reusable components in a single object.
// They are similar to multiple inheritance but implemented in a different way.
// Mixins are a flexible way to reuse functionality across multiple classes.
abstract class Jumpable {
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
	constructor(public name: string) {
		super();
	}
}

let character = new Character('Mario');
character.jump(); // Jumping

// 20. Modules
// Modules are a way to organize code in a separate file.
// They allow you to split your code into multiple files and import/export functionality between them.
// TypeScript supports modules using the ES6 module syntax.
// For example, consider the following module:
// Path: typescript/utils.ts
// export function test(a: number, b: number): number {
// 	return a + b;
// }

// Path: typescript/app.ts
// import { test } from './utils';
// console.log(test(1, 2)); // 3

// 21. Namespaces
// Namespaces are a way to organize code in a separate scope.
// They allow you to group related functionality together and avoid naming conflicts.
// TypeScript supports namespaces using the namespace keyword.
// For example, consider the following namespace:
// Path: typescript/utils.ts
// namespace Math {
// 	export function add(a: number, b: number): number {
// 		return a + b;
// 	}

// 	export function subtract(a: number, b: number): number {
// 		return a - b;
// }
// }

// Path: typescript/app.ts
// import { Math } from './utils';
// console.log(Math.add(1, 2)); // 3

// 22. Ambient Declarations
// Ambient declarations are a way to tell the TypeScript compiler about the types that are defined elsewhere.
// They are useful when working with libraries that are written in JavaScript.
// For example, consider the following ambient declaration:
// Path: typescript/globals.d.ts
// declare module 'lodash' {
// 	export function cloneDeep<T>(value: T): T;
// }

// Path: typescript/app.ts
// import * as _ from 'lodash';
// let obj = { name: 'John' };
// let clone = _.cloneDeep(obj);

// 23. Triple-Slash Directives
// Triple-slash directives are a way to reference other files in TypeScript.
// They are useful when working with modules and declaration files.
// For example, consider the following triple-slash directive:
// Path: typescript/app.ts
// /// <reference path="utils.ts" />
// import { test } from './utils';
// console.log(test(1, 2)); // 3

//what is the difference between ? and | in typescript
// The question mark (?) is used to denote optional properties in TypeScript.
// It means that the property may or may not exist in the object.
// For example:
interface Person5 {
	name: string;
	age?: number;
}

let person5: Person5 = {
	name: 'John'
};

console.log(person5.age); // undefined

// The pipe symbol (|) is used to denote union types in TypeScript.
// It means that the variable can have one of the specified types.
// For example:
let result2: string | number;
result2 = 'abc';
