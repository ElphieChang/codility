// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4
	let f = [], max = Math.pow(2, 30);
	for (let i = 0; i <= A.length + 1; i++) {
		if (i <= 1) {
			f[i] = i;
		} else {
			f[i] = f[i - 1] + f[i - 2];
		}
		
		f[i] = f[i] % max;
	}
	
	let result = [];
	for (let j = 0; j < A.length; j++) {
		const a = A[j], b = B[j];		
		const fa = f[a + 1];		
		result[j] = fa % Math.pow(2, b);
	}
	
	return result;
}
