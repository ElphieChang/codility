// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	A.sort((a, b) => a - b);
	for (let i = 0; i < A.length; i += 2) {
		if (i + 1 === A.length || A[i] !== A[i + 1]) {
			return A[i];
		}
	}
}

