// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
	let result = [];
	for (const i in A) {
		const val = A[i];
		const tempIndex = parseInt(i, 0) + K % A.length;
		const index = tempIndex >= A.length ? (tempIndex - A.length) : tempIndex;	
		result[index] = val;
	}
	
	return result;
}
