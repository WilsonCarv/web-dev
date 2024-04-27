// Different examples of Big O Notation

// O(1) - Constant Time
// This function runs in constant time because it always takes the same amount of time to run, regardless of the size of the input.

function constantTime(arr) {
	return arr[0];
}

// O(n) - Linear Time
// This function runs in linear time because the number of iterations is directly proportional to the size of the input.

function linearTime(arr) {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

// O(n^2) - Quadratic Time
// This function runs in quadratic time because the number of iterations is proportional to the square of the size of the input.

function quadraticTime(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			console.log(arr[i], arr[j]);
		}
	}
}

// O(log n) - Logarithmic Time
// This function runs in logarithmic time because the number of iterations is reduced by a constant factor with each iteration.

function logarithmicTime(n) {
	let i = n;
	while (i > 1) {
		i = Math.floor(i / 2);
		console.log(i);
	}
}

// O(n log n) - Linearithmic Time
// This function runs in linearithmic time because it combines linear and logarithmic time complexity.
function linearithmicTime(arr) {
	arr.sort();
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

// O(2^n) - Exponential Time
// This function runs in exponential time because the number of iterations doubles with each additional element in the input.

function exponentialTime(n) {
	if (n <= 1) return n;
	return exponentialTime(n - 1) + exponentialTime(n - 2);
}

// O(n!) - Factorial Time
// This function runs in factorial time because the number of iterations is proportional to the factorial of the input size.

function factorialTime(n) {
	if (n <= 1) return 1;
	return n * factorialTime(n - 1);
}
