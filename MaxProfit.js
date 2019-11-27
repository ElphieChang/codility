// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
	let maxSum = 0;
	let maxResult = 0;
	
	for (let i = 1; i < A.length; i++) {
		maxSum = Math.max(0, maxSum + A[i] - A[i - 1]);
		maxResult = Math.max(maxResult, maxSum);
	}
	
	return maxResult;
}
