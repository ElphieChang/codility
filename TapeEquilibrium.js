// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	let sumLeft = A[0];
	let sumRight = A.slice(1).reduce((a, b) => a + b, 0);
	let result = Math.abs(sumRight - sumLeft);
	
    // write your code in JavaScript (Node.js 8.9.4)
	for (let i = 1; i < A.length - 1; i++ ) {
		sumRight -= A[i];
		sumLeft += A[i];
		
		const difference = Math.abs(sumRight - sumLeft);
		
		result = difference > result ? result : difference;
	}
	
	return result;
}
