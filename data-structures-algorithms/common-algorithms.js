// Quick Sort
function quickSort(arr) {
	if (arr.length <= 1) return arr;
	const pivot = arr[Math.floor(arr.length / 2)];
	const left = arr.filter(num => num < pivot);
	const middle = arr.filter(num => num === pivot);
	const right = arr.filter(num => num > pivot);
	return quickSort(left).concat(middle).concat(quickSort(right));
}

// Merge Sort
function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	const middle = Math.floor(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	let result = [];
	let leftIndex = 0;
	let rightIndex = 0;
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex]);
			leftIndex++;
		} else {
			result.push(right[rightIndex]);
			rightIndex++;
		}
	}
	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const result = quickSort([3, 0, 2, 5, -1, 4, 1]);
console.log(result);
const result2 = mergeSort([3, 0, 2, 5, -1, 4, 1]);
console.log(result2);

// Binary Search
function binarySearch(arr, target) {
	let left = 0;
	let right = arr.length - 1;
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		if (arr[mid] === target) return mid;
		if (arr[mid] < target) left = mid + 1;
		else right = mid - 1;
	}
	return -1;
}

// Linear Search
function linearSearch(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) return i;
	}
	return -1;
}

const result3 = binarySearch([0, 1, 2, 3, 4, 5, 6], 3);
console.log(result3);

// Breadth-First Search (BFS)
function BFS(graph, start) {
	const visited = new Set();
	const queue = [start];
	visited.add(start);
	while (queue.length) {
		const node = queue.shift();
		console.log(node);
		for (const neighbor of graph[node]) {
			if (!visited.has(neighbor)) {
				visited.add(neighbor);
				queue.push(neighbor);
			}
		}
	}
}

// Depth-First Search (DFS)
function DFS(graph, start, visited = new Set()) {
	console.log(start);
	visited.add(start);
	for (const neighbor of graph[start]) {
		if (!visited.has(neighbor)) {
			DFS(graph, neighbor, visited);
		}
	}
}

function fibonacci(n) {
	const fib = [0, 1];
	for (let i = 2; i <= n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}
	return fib[n];
}

// Prime Number Generation (Sieve of Eratosthenes)
function sieveOfEratosthenes(limit) {
	const primes = [];
	const sieve = new Array(limit + 1).fill(true);
	for (let p = 2; p <= Math.sqrt(limit); p++) {
		if (sieve[p]) {
			for (let i = p * p; i <= limit; i += p) {
				sieve[i] = false;
			}
		}
	}
	for (let i = 2; i <= limit; i++) {
		if (sieve[i]) {
			primes.push(i);
		}
	}
	return primes;
}

// Factorization
function primeFactors(n) {
	const factors = [];
	for (let i = 2; i <= Math.sqrt(n); i++) {
		while (n % i === 0) {
			factors.push(i);
			n /= i;
		}
	}
	if (n > 1) {
		factors.push(n);
	}
	return factors;
}
