// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)	
	let result;
	A.sort((a, b) => a - b);
	for (let i = 0; i < A.length; i++) {
		if (A[i] !== i + 1) {			
			return i + 1;; 
		}
	}
	
	return A.length + 1;
}
