//Euler problem 1
const maxValue = 1000;
let sum = 0;

for (let i = 0; i < maxValue; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		sum += i;
	}
}
console.log(sum);

//Euler problem 2
//Even Fibonacci Numbers

function fibonacciSumEven(limit) {
	let a = 1;
	let b = 2;
	let evenSum = 0;

	while (a <= limit) {
		if (a % 2 === 0) {
			evenSum += a;
		}
		let temp = a;
		a = b;
		b += temp;
	}

	return evenSum;
}

const limit = 4000000;
const result = fibonacciSumEven(limit);
console.log(
	'The sum of even-valued terms in the Fibonacci sequence not exceeding four million is:',
	result
);

//Euler problem 3
//Largest Prime Factor
function calculateLargestPrimeFactor(value) {
	let largestPrime = 0;

	// Check divisibility by 2
	while (value % 2 === 0) {
		largestPrime = 2;
		value /= 2;
	}

	// Check divisibility by odd numbers starting from 3
	for (let i = 3; i <= Math.sqrt(value); i += 2) {
		while (value % i === 0) {
			largestPrime = i;
			value /= i;
		}
	}

	// If the remaining value is greater than 2, it's a prime factor
	if (value > 2) {
		largestPrime = value;
	}

	return largestPrime;
}

const factor = 600851475143;
const largestPrimeNumber = calculateLargestPrimeFactor(factor);
console.log(largestPrimeNumber);

//Euler problem 4
//Largest Palindrome Product
function isPalindrome(number) {
	const str = number.toString();
	const reversed = str.split('').reverse().join('');
	return str === reversed;
}

function largestPalindromeProduct() {
	let largestPalindrome = 0;
	for (let i = 100; i < 1000; i++) {
		for (let j = 100; j < 1000; j++) {
			const product = i * j;
			if (isPalindrome(product) && product > largestPalindrome) {
				largestPalindrome = product;
			}
		}
	}
	return largestPalindrome;
}

const result4 = largestPalindromeProduct();
console.log(result4);

//Euler problem 5
//Smallest Multiple
function gcd(a, b) {
	if (b === 0) {
		return a;
	}
	return gcd(b, a % b);
}

function lcm(a, b) {
	return (a * b) / gcd(a, b);
}

function smallestMultiple(limit) {
	let multiple = 1;
	for (let i = 2; i <= limit; i++) {
		multiple = lcm(multiple, i);
	}
	return multiple;
}

const limit5 = 20;
const result5 = smallestMultiple(limit5);
console.log(result5);

//Euler problem 6
//Sum Square Difference
function sumSquareDifference(limit) {
	let sumOfSquares = 0;
	let squareOfSum = 0;
	for (let i = 1; i <= limit; i++) {
		sumOfSquares += i * i;
		squareOfSum += i;
	}
	squareOfSum *= squareOfSum;
	return squareOfSum - sumOfSquares;
}

const limit6 = 100;
const result6 = sumSquareDifference(limit6);
console.log(result6);

//Euler problem 7
//10001st Prime

function isPrime(number) {
	for (let i = 2; i < number; i++) {
		if (number % i === 0) {
			return false;
		}
	}
	return number !== 1;
}

function nthPrime(n) {
	let count = 0;
	let number = 1;
	while (count < n) {
		number++;
		if (isPrime(number)) {
			count++;
		}
	}
	return number;
}

const n = 10001;
const result7 = nthPrime(n);
console.log(result7);

//Euler problem 8
//Largest Product in a Series
function largestProductSeries(series, adjacentDigits) {
	let largestProduct = 0;
	for (let i = 0; i < series.length - adjacentDigits; i++) {
		let product = 1;
		for (let j = 0; j < adjacentDigits; j++) {
			product *= parseInt(series[i + j]);
		}
		if (product > largestProduct) {
			largestProduct = product;
		}
	}
	return largestProduct;
}

const result8 = largestProductSeries(
	'7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450',
	13
);
console.log(result8);

//Euler problem 9
//Special Pythagorean Triplet
function specialPythagoreanTriplet(sum) {
	for (let a = 1; a < sum; a++) {
		for (let b = a + 1; b < sum; b++) {
			const c = sum - a - b;
			if (a * a + b * b === c * c) {
				return a * b * c;
			}
		}
	}
}
const sum9 = 1000;
const result9 = specialPythagoreanTriplet(sum9);
console.log(result9);

//Euler problem 10
// Summation of primes
function primeSummation(n) {
	const isPrime = num => {
		if (num % 2 === 0) {
			return false;
		}
		for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
			if (num % i === 0) {
				return false;
			}
		}
		return true;
	};

	let ans = 2;

	for (let j = 3; j < n; j = j + 2) {
		if (isPrime(j)) {
			ans += j;
		}
	}
	return ans;
}
const result10 = primeSummation(2000000);
console.log(result10);
