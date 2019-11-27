// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
	let count = Math.floor(B/K) - Math.floor(A/K);
	if (A % K === 0) {
		count++;
	}
	
	return count;
}
