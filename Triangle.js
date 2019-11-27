// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
	if (A.length < 3) {
		return 0;
	}
	
	A.sort((a, b) => a- b);
	for (let i in A) {
		const index = parseInt(i);
		if (index + 1 < A.length && index + 2 < A.length) {
			if (A[index] + A[index + 1] > A[index + 2]) {
				return 1;
			}
		}
	}
	
	return 0;
}
